const FORM_GATE_URL =
  "https://dandurgu-form-gate.kstylefashionstores.workers.dev";

function isDandurguApplicationForm(form: HTMLFormElement) {
  return form.action.startsWith("https://formsubmit.co/");
}

function resetTurnstile(form: HTMLFormElement) {
  const tokenInput = form.querySelector<HTMLInputElement>(
    'input[name="cf-turnstile-response"]',
  );

  if (tokenInput) {
    tokenInput.value = "";
  }

  const turnstile = (
    window as typeof window & {
      turnstile?: {
        reset?: () => void;
      };
    }
  ).turnstile;

  try {
    turnstile?.reset?.();
  } catch {
    // Ignore reset errors. A fresh page interaction can create a new token.
  }
}

document.addEventListener(
  "submit",
  async (event) => {
    const form = event.target;

    if (!(form instanceof HTMLFormElement)) {
      return;
    }

    if (!isDandurguApplicationForm(form)) {
      return;
    }

    event.preventDefault();

    if (form.dataset.gateSubmitting === "true") {
      return;
    }

    const token = form.querySelector<HTMLInputElement>(
      'input[name="cf-turnstile-response"]',
    )?.value;

    if (!token) {
      window.alert(
        "Please complete the security check before submitting your application.",
      );
      return;
    }

    form.dataset.gateSubmitting = "true";

    try {
      const formData = new FormData(form);
      formData.set("cf-turnstile-response", token);

      const response = await fetch(FORM_GATE_URL, {
        method: "POST",
        body: formData,
      });

      let result: { success?: boolean; message?: string } = {};

      try {
        result = await response.json();
      } catch {
        // The Worker should return JSON. Use the generic error below otherwise.
      }

      if (!response.ok || !result.success) {
        resetTurnstile(form);

        window.alert(
          result.message ||
            "Your application could not be submitted. Please try again.",
        );

        return;
      }

      window.location.href = "/success";
    } catch {
      resetTurnstile(form);

      window.alert(
        "We could not connect to the application server. Please check your connection and try again.",
      );
    } finally {
      delete form.dataset.gateSubmitting;
    }
  },
  true,
);
