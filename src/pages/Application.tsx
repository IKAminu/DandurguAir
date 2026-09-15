import { useState } from "react";

type Page = "home" | "umrah" | "services" | "about" | "faq" | "contact" | "apply" | "success";

interface ApplicationProps {
  navigate: (page: Page) => void;
}

type Answers = Record<string, string | number>;

const steps = [
  { num: "01", label: "Getting Started" },
  { num: "02", label: "Travel Plans" },
  { num: "03", label: "Your Details" },
  { num: "04", label: "Documents" },
  { num: "05", label: "Review" },
];

function OptionButton({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full px-5 py-4 rounded-xl border-2 text-left font-medium text-[15px] transition-all duration-150 ${
        selected
          ? "border-[var(--color-brand-blue)] bg-[var(--color-brand-blue)] text-white shadow-md"
          : "border-[var(--color-border)] bg-white text-[var(--color-dark)] hover:border-[var(--color-brand-blue)]/50 hover:bg-blue-50/50"
      }`}
      style={{ fontFamily: "var(--font-display)" }}
    >
      <span className="flex items-center gap-3">
        <span
          className={`w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center transition-colors ${
            selected ? "border-white bg-white" : "border-[var(--color-border)]"
          }`}
        >
          {selected && <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-brand-blue)]" />}
        </span>
        {children}
      </span>
    </button>
  );
}

function Question({
  question,
  subtext,
  children,
}: {
  question: string;
  subtext?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="animate-in fade-in duration-300">
      <h3
        className="text-2xl md:text-3xl font-bold text-[var(--color-dark)] tracking-tight mb-2"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {question}
      </h3>
      {subtext && <p className="text-[var(--color-muted)] text-[14px] mb-8">{subtext}</p>}
      {!subtext && <div className="mb-8" />}
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function InputField({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[12px] font-semibold text-[var(--color-dark)] mb-2 tracking-wide uppercase" style={{ fontFamily: "var(--font-display)" }}>
        {label}{required && <span className="text-[var(--color-brand-orange)] ml-0.5">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full px-4 py-3.5 rounded-xl border border-[var(--color-border)] bg-white text-[15px] text-[var(--color-dark)] placeholder:text-[var(--color-muted)]/50 focus:outline-none focus:border-[var(--color-brand-blue)] focus:ring-3 focus:ring-[var(--color-brand-blue)]/10 transition-all"
      />
    </div>
  );
}

export default function Application({ navigate }: ApplicationProps) {
  const [step, setStep] = useState(1);
  const [subQ, setSubQ] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [details, setDetails] = useState({
    name: "", dob: "", gender: "", phone: "", email: "", state: "", city: "",
    departure: "", travelDate: "", package: "",
    passportNum: "", passportExpiry: "", passportIssue: "",
    saudiVisa: "", visaType: "",
    specialAssistance: "", assistanceDetails: "",
    guarantor: "", guarantorName: "", guarantorRel: "", guarantorPhone: "", guarantorAddress: "",
    hearAbout: "", hearAboutOther: "",
  });
  const [fileState, setFileState] = useState<"empty" | "uploaded">("empty");

  const go = (page: Page) => {
    navigate(page);
    window.scrollTo(0, 0);
  };

  const set = (key: string, val: string | number) => {
    setAnswers((prev) => ({ ...prev, [key]: val }));
  };

  const nextSubQ = () => setSubQ((q) => q + 1);
  const nextStep = () => {
    setStep((s) => s + 1);
    setSubQ(0);
    window.scrollTo(0, 0);
  };
  const prevStep = () => {
    if (subQ > 0) {
      setSubQ((q) => q - 1);
    } else {
      setStep((s) => Math.max(1, s - 1));
    }
  };

  const select = (key: string, val: string) => {
    set(key, val);
    setTimeout(nextSubQ, 200);
  };

  const totalSubQs = [3, 3, 2, 3];
  const progress = step <= 4
    ? ((step - 1) * 20 + (subQ / (totalSubQs[step - 1] || 1)) * 20)
    : step === 5 ? 100 : 0;

  const renderStep1 = () => {
    if (subQ === 0) return (
      <Question question="ARE YOU A NIGERIAN NATIONAL?">
        <OptionButton selected={answers.nigerian === "yes"} onClick={() => select("nigerian", "yes")}>YES</OptionButton>
        <OptionButton selected={answers.nigerian === "no"} onClick={() => select("nigerian", "no")}>NO</OptionButton>
      </Question>
    );
    if (subQ === 1) return (
      <Question question="DO YOU HAVE AN ACTIVE INTERNATIONAL PASSPORT?">
        <OptionButton selected={answers.passport === "yes"} onClick={() => select("passport", "yes")}>YES</OptionButton>
        <OptionButton selected={answers.passport === "no"} onClick={() => select("passport", "no")}>NO — I need help with this</OptionButton>
      </Question>
    );
    return (
      <Question question="WHEN DO YOU PLAN TO TRAVEL?">
        {["THIS MONTH", "IN 1–3 MONTHS", "WITHIN 6 MONTHS", "JUST BROWSING"].map((opt) => (
          <OptionButton key={opt} selected={answers.timing === opt} onClick={() => { set("timing", opt); setTimeout(nextStep, 200); }}>
            {opt}
          </OptionButton>
        ))}
      </Question>
    );
  };

  const renderStep2 = () => {
    if (subQ === 0) return (
      <Question question="HOW DO YOU PLAN TO PAY FOR YOUR JOURNEY?" subtext="There is no wrong answer. This helps us understand your situation.">
        {["ONE-TIME PAYMENT", "PAY A DEPOSIT NOW, COMPLETE PAYMENT LATER", "I'M NOT SURE YET"].map((opt) => (
          <OptionButton key={opt} selected={answers.payment === opt} onClick={() => select("payment", opt)}>
            {opt}
          </OptionButton>
        ))}
      </Question>
    );
    if (subQ === 1) return (
      <Question question="HOW MANY PEOPLE ARE YOU PLANNING TO TRAVEL WITH?">
        <div className="grid grid-cols-3 gap-3">
          {["JUST ME", "2", "3", "4", "5", "6", "7", "8", "9", "10", "MORE THAN 10"].map((opt) => (
            <button
              key={opt}
              onClick={() => select("groupSize", opt)}
              className={`py-3.5 rounded-xl border-2 text-[14px] font-semibold transition-all ${
                answers.groupSize === opt
                  ? "border-[var(--color-brand-blue)] bg-[var(--color-brand-blue)] text-white"
                  : "border-[var(--color-border)] text-[var(--color-dark)] hover:border-[var(--color-brand-blue)]/40"
              } ${opt === "JUST ME" || opt === "MORE THAN 10" ? "col-span-3" : ""}`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              {opt}
            </button>
          ))}
        </div>
      </Question>
    );
    return (
      <Question question="WHAT SERVICE ARE YOU INTERESTED IN?">
        {["UMRAH", "HAJJ", "FLIGHTS", "TOURS & TRAVEL", "I'M NOT SURE YET"].map((opt) => (
          <OptionButton key={opt} selected={answers.service === opt} onClick={() => { set("service", opt); setTimeout(nextStep, 200); }}>
            {opt}
          </OptionButton>
        ))}
      </Question>
    );
  };

  const renderStep3 = () => {
    if (subQ === 0) return (
      <div className="animate-in fade-in duration-300">
        <p className="text-[11px] font-semibold tracking-widest text-[var(--color-brand-blue)] uppercase mb-2" style={{ fontFamily: "var(--font-display)" }}>Step 3</p>
        <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-dark)] tracking-tight mb-2" style={{ fontFamily: "var(--font-display)" }}>
          GREAT. NOW WE JUST NEED<br />A FEW DETAILS FROM YOU.
        </h3>
        <p className="text-[var(--color-muted)] text-[14px] mb-10">This information helps our team understand your travel requirements and contact you about your application.</p>
        <div className="grid sm:grid-cols-2 gap-5">
          <InputField label="Full Name" placeholder="Your full name" value={details.name} onChange={(v) => setDetails({ ...details, name: v })} required />
          <InputField label="Date of Birth" type="date" value={details.dob} onChange={(v) => setDetails({ ...details, dob: v })} required />
          <div>
            <label className="block text-[12px] font-semibold text-[var(--color-dark)] mb-2 tracking-wide uppercase" style={{ fontFamily: "var(--font-display)" }}>Gender<span className="text-[var(--color-brand-orange)]">*</span></label>
            <select
              value={details.gender}
              onChange={(e) => setDetails({ ...details, gender: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl border border-[var(--color-border)] bg-white text-[15px] text-[var(--color-dark)] focus:outline-none focus:border-[var(--color-brand-blue)] transition-colors"
            >
              <option value="">Select gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <InputField label="Phone / WhatsApp" type="tel" placeholder="e.g. 0801 234 5678" value={details.phone} onChange={(v) => setDetails({ ...details, phone: v })} required />
          <div className="sm:col-span-2">
            <InputField label="Email Address" type="email" placeholder="your@email.com" value={details.email} onChange={(v) => setDetails({ ...details, email: v })} />
          </div>
          <InputField label="State" placeholder="Your state" value={details.state} onChange={(v) => setDetails({ ...details, state: v })} required />
          <InputField label="City" placeholder="Your city" value={details.city} onChange={(v) => setDetails({ ...details, city: v })} required />
        </div>
      </div>
    );
    return (
      <div className="animate-in fade-in duration-300">
        <p className="text-[11px] font-semibold tracking-widest text-[var(--color-brand-blue)] uppercase mb-2" style={{ fontFamily: "var(--font-display)" }}>Travel details</p>
        <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-dark)] tracking-tight mb-8" style={{ fontFamily: "var(--font-display)" }}>
          YOUR TRAVEL DETAILS.
        </h3>
        <div className="space-y-5">
          <div>
            <label className="block text-[12px] font-semibold text-[var(--color-dark)] mb-2 tracking-wide uppercase" style={{ fontFamily: "var(--font-display)" }}>Where would you like to depart from?</label>
            <select
              value={details.departure}
              onChange={(e) => setDetails({ ...details, departure: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl border border-[var(--color-border)] bg-white text-[15px] text-[var(--color-dark)] focus:outline-none focus:border-[var(--color-brand-blue)] transition-colors"
            >
              <option value="">[DEPARTURE CITY OPTIONS — REPLACE WITH DANDURGU'S ACTUAL DEPARTURE CITIES]</option>
            </select>
          </div>
          <InputField label="When would you prefer to travel?" type="date" value={details.travelDate} onChange={(v) => setDetails({ ...details, travelDate: v })} />
          <div>
            <label className="block text-[12px] font-semibold text-[var(--color-dark)] mb-3 tracking-wide uppercase" style={{ fontFamily: "var(--font-display)" }}>Do you have a preferred package?</label>
            <div className="space-y-3">
              {["I KNOW WHICH PACKAGE I WANT", "HELP ME CHOOSE", "I HAVEN'T DECIDED YET"].map((opt) => (
                <OptionButton key={opt} selected={details.package === opt} onClick={() => setDetails({ ...details, package: opt })}>
                  {opt}
                </OptionButton>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderStep4 = () => {
    if (subQ === 0) return (
      <div className="animate-in fade-in duration-300">
        <p className="text-[11px] font-semibold tracking-widest text-[var(--color-brand-blue)] uppercase mb-2" style={{ fontFamily: "var(--font-display)" }}>Documents</p>
        <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-dark)] tracking-tight mb-8" style={{ fontFamily: "var(--font-display)" }}>
          YOUR DOCUMENTS.
        </h3>
        <div className="space-y-5">
          <div className="grid sm:grid-cols-3 gap-5">
            <InputField label="Passport Number" placeholder="A12345678" value={details.passportNum} onChange={(v) => setDetails({ ...details, passportNum: v })} />
            <InputField label="Passport Expiry Date" type="date" value={details.passportExpiry} onChange={(v) => setDetails({ ...details, passportExpiry: v })} />
            <InputField label="Place of Issue" placeholder="e.g. Abuja" value={details.passportIssue} onChange={(v) => setDetails({ ...details, passportIssue: v })} />
          </div>
          {/* Upload area */}
          <div>
            <label className="block text-[12px] font-semibold text-[var(--color-dark)] mb-3 tracking-wide uppercase" style={{ fontFamily: "var(--font-display)" }}>Upload Passport Copy</label>
            {fileState === "empty" ? (
              <button
                onClick={() => setFileState("uploaded")}
                className="w-full border-2 border-dashed border-[var(--color-border)] rounded-2xl p-10 text-center hover:border-[var(--color-brand-blue)] hover:bg-blue-50/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-light-grey)] flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                  <svg className="w-6 h-6 text-[var(--color-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <p className="font-semibold text-[15px] text-[var(--color-dark)] mb-1" style={{ fontFamily: "var(--font-display)" }}>TAP TO UPLOAD PASSPORT COPY</p>
                <p className="text-[13px] text-[var(--color-muted)]">PDF, JPG or PNG</p>
                <p className="text-[12px] text-[var(--color-muted)] mt-1">Make sure all passport details are clearly visible.</p>
              </button>
            ) : (
              <div className="border-2 border-[var(--color-success)] rounded-2xl p-5 bg-green-50 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[14px] text-[var(--color-dark)]">passport.pdf</p>
                  <p className="text-[12px] text-[var(--color-muted)]">2.4 MB · Uploaded</p>
                </div>
                <button onClick={() => setFileState("empty")} className="text-[12.5px] font-medium text-[var(--color-muted)] hover:text-red-600 transition-colors">
                  Remove
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );

    if (subQ === 1) return (
      <div className="animate-in fade-in duration-300">
        <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-dark)] tracking-tight mb-8" style={{ fontFamily: "var(--font-display)" }}>
          DO YOU CURRENTLY HAVE<br />A VALID SAUDI VISA?
        </h3>
        <div className="space-y-3 mb-6">
          {["YES", "NO", "I'M NOT SURE"].map((opt) => (
            <OptionButton key={opt} selected={details.saudiVisa === opt} onClick={() => setDetails({ ...details, saudiVisa: opt })}>
              {opt}
            </OptionButton>
          ))}
        </div>
        {details.saudiVisa === "YES" && (
          <div className="mt-5">
            <InputField label="Visa Type" placeholder="e.g. Tourist, Umrah" value={details.visaType} onChange={(v) => setDetails({ ...details, visaType: v })} />
          </div>
        )}
      </div>
    );

    return (
      <div className="animate-in fade-in duration-300 space-y-8">
        {/* Special assistance */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-[var(--color-dark)] tracking-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
            WILL YOU OR ANYONE TRAVELLING WITH YOU<br />REQUIRE SPECIAL ASSISTANCE?
          </h3>
          <div className="space-y-3">
            {["NO", "YES"].map((opt) => (
              <OptionButton key={opt} selected={details.specialAssistance === opt} onClick={() => setDetails({ ...details, specialAssistance: opt })}>
                {opt}
              </OptionButton>
            ))}
          </div>
          {details.specialAssistance === "YES" && (
            <div className="mt-5">
              <label className="block text-[12px] font-semibold text-[var(--color-dark)] mb-2 tracking-wide uppercase" style={{ fontFamily: "var(--font-display)" }}>Please tell us what assistance is required</label>
              <textarea
                rows={3}
                placeholder="e.g. Mobility assistance, visual or hearing assistance, elderly traveller..."
                value={details.assistanceDetails}
                onChange={(e) => setDetails({ ...details, assistanceDetails: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-white text-[14px] focus:outline-none focus:border-[var(--color-brand-blue)] transition-colors resize-none"
              />
            </div>
          )}
        </div>

        {/* Guarantor */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-[var(--color-dark)] tracking-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
            WILL SOMEONE BE RESPONSIBLE FOR<br />OR SUPPORTING THIS APPLICATION?
          </h3>
          <div className="space-y-3">
            {["NO", "YES"].map((opt) => (
              <OptionButton key={opt} selected={details.guarantor === opt} onClick={() => setDetails({ ...details, guarantor: opt })}>
                {opt}
              </OptionButton>
            ))}
          </div>
          {details.guarantor === "YES" && (
            <div className="mt-5 grid sm:grid-cols-2 gap-5">
              <InputField label="Full Name" value={details.guarantorName} onChange={(v) => setDetails({ ...details, guarantorName: v })} />
              <InputField label="Relationship to Applicant" placeholder="e.g. Spouse, Parent" value={details.guarantorRel} onChange={(v) => setDetails({ ...details, guarantorRel: v })} />
              <InputField label="Phone Number" type="tel" value={details.guarantorPhone} onChange={(v) => setDetails({ ...details, guarantorPhone: v })} />
              <InputField label="Address" value={details.guarantorAddress} onChange={(v) => setDetails({ ...details, guarantorAddress: v })} />
              <div className="sm:col-span-2 p-3 rounded-lg bg-amber-50 border border-amber-200">
                <p className="text-[12px] text-amber-700 italic">[ADDITIONAL GUARANTOR REQUIREMENTS — REPLACE WITH APPROVED DANDURGU POLICY]</p>
              </div>
            </div>
          )}
        </div>

        {/* How did you hear */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-[var(--color-dark)] tracking-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
            HOW DID YOU HEAR ABOUT DANDURGU?
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {["Facebook / Instagram", "WhatsApp", "Google", "Friend / Family", "Previous Customer", "Other"].map((opt) => (
              <button
                key={opt}
                onClick={() => setDetails({ ...details, hearAbout: opt })}
                className={`py-3 px-4 rounded-xl border-2 text-[13.5px] font-medium text-left transition-all ${
                  details.hearAbout === opt
                    ? "border-[var(--color-brand-blue)] bg-[var(--color-brand-blue)] text-white"
                    : "border-[var(--color-border)] text-[var(--color-dark)] hover:border-[var(--color-brand-blue)]/40"
                }`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {opt}
              </button>
            ))}
          </div>
          {details.hearAbout === "Other" && (
            <div className="mt-4">
              <input
                type="text"
                placeholder="Please tell us..."
                value={details.hearAboutOther}
                onChange={(e) => setDetails({ ...details, hearAboutOther: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-white text-[14px] focus:outline-none focus:border-[var(--color-brand-blue)] transition-colors"
              />
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderStep5 = () => {
    const sections = [
      {
        title: "YOUR DETAILS",
        items: [
          { label: "Name", val: details.name || "—" },
          { label: "Date of Birth", val: details.dob || "—" },
          { label: "Gender", val: details.gender || "—" },
          { label: "Phone", val: details.phone || "—" },
          { label: "Email", val: details.email || "—" },
          { label: "State / City", val: details.state && details.city ? `${details.city}, ${details.state}` : "—" },
        ],
        editStep: 3,
      },
      {
        title: "TRAVEL PLANS",
        items: [
          { label: "Nationality", val: answers.nigerian === "yes" ? "Nigerian National" : answers.nigerian === "no" ? "Non-Nigerian" : "—" },
          { label: "Passport", val: answers.passport === "yes" ? "Active international passport" : answers.passport === "no" ? "No passport" : "—" },
          { label: "Travel Timing", val: (answers.timing as string) || "—" },
          { label: "Payment", val: (answers.payment as string) || "—" },
          { label: "Group Size", val: (answers.groupSize as string) || "—" },
          { label: "Service", val: (answers.service as string) || "—" },
          { label: "Departure", val: details.departure || "—" },
          { label: "Travel Date", val: details.travelDate || "—" },
        ],
        editStep: 2,
      },
      {
        title: "DOCUMENTS",
        items: [
          { label: "Passport Number", val: details.passportNum || "—" },
          { label: "Passport Expiry", val: details.passportExpiry || "—" },
          { label: "Place of Issue", val: details.passportIssue || "—" },
          { label: "Passport Copy", val: fileState === "uploaded" ? "Uploaded" : "Not uploaded" },
          { label: "Saudi Visa", val: details.saudiVisa || "—" },
        ],
        editStep: 4,
      },
      {
        title: "SPECIAL REQUIREMENTS",
        items: [
          { label: "Special Assistance", val: details.specialAssistance || "—" },
          ...(details.specialAssistance === "YES" ? [{ label: "Details", val: details.assistanceDetails || "—" }] : []),
          { label: "Guarantor", val: details.guarantor || "—" },
          { label: "How You Found Us", val: details.hearAbout || "—" },
        ],
        editStep: 4,
      },
    ];

    return (
      <div className="animate-in fade-in duration-300">
        <p className="text-[11px] font-semibold tracking-widest text-[var(--color-brand-blue)] uppercase mb-2" style={{ fontFamily: "var(--font-display)" }}>Review</p>
        <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-dark)] tracking-tight mb-8" style={{ fontFamily: "var(--font-display)" }}>
          REVIEW YOUR APPLICATION.
        </h3>
        <div className="space-y-5 mb-8">
          {sections.map((section) => (
            <div key={section.title} className="rounded-xl border border-[var(--color-border)] overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3.5 bg-[var(--color-off-white)] border-b border-[var(--color-border)]">
                <span className="font-bold text-[12.5px] tracking-widest text-[var(--color-dark)]" style={{ fontFamily: "var(--font-display)" }}>
                  {section.title}
                </span>
                <button
                  onClick={() => { setStep(section.editStep); setSubQ(0); }}
                  className="text-[12px] font-medium text-[var(--color-brand-blue)] hover:underline"
                >
                  EDIT
                </button>
              </div>
              <div className="p-5 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {section.items.map((item) => (
                  <div key={item.label}>
                    <div className="text-[11px] text-[var(--color-muted)] mb-0.5">{item.label}</div>
                    <div className="text-[14px] font-medium text-[var(--color-dark)]">{item.val}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 mb-6">
          <p className="text-[13px] text-amber-700 italic">
            [CONSENT TEXT — REPLACE WITH DANDURGU'S APPROVED PRIVACY / DATA PROCESSING WORDING]
          </p>
        </div>
        <button
          onClick={() => go("success")}
          className="w-full py-4 rounded-xl bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-hover)] text-white font-bold text-[16px] tracking-wide transition-colors"
          style={{ fontFamily: "var(--font-display)" }}
        >
          SUBMIT APPLICATION
        </button>
      </div>
    );
  };

  const canContinue = () => {
    if (step === 1 && subQ === 0) return !!answers.nigerian;
    if (step === 1 && subQ === 1) return !!answers.passport;
    if (step === 2 && subQ === 1) return !!answers.groupSize;
    if (step === 3 && subQ === 0) return !!(details.name && details.phone && details.state);
    return true;
  };

  const isLastSubQ = () => {
    if (step === 1 && subQ === 2) return true;
    if (step === 2 && subQ === 2) return true;
    if (step === 3 && subQ === 1) return true;
    if (step === 4 && subQ === 2) return true;
    return false;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Application header */}
      <div className="border-b border-[var(--color-border)] bg-white">
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-8 md:py-10">
          {/* Logo */}
          <button onClick={() => go("home")} className="flex items-center gap-2 mb-8">
            <div className="w-7 h-7 rounded bg-[var(--color-brand-blue)] flex items-center justify-center">
              <span className="text-white font-bold text-xs" style={{ fontFamily: "var(--font-display)" }}>D</span>
            </div>
            <span className="font-bold text-[13px] text-[var(--color-dark)]" style={{ fontFamily: "var(--font-display)" }}>Dandurgu Air Travel & Tours</span>
          </button>
          <h2 className="text-xl md:text-2xl font-bold text-[var(--color-dark)] mb-1.5 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            LET'S GET YOUR JOURNEY STARTED.
          </h2>
          <p className="text-[var(--color-muted)] text-[14px] mb-8">A few quick questions will help us understand what you need.</p>

          {/* Progress */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-[var(--color-muted)] tracking-widest" style={{ fontFamily: "var(--font-display)" }}>
                STEP {step < 5 ? step : 5} OF 5
              </span>
              <span className="text-[11px] font-semibold text-[var(--color-brand-blue)] tracking-widest" style={{ fontFamily: "var(--font-display)" }}>
                {steps[step - 1]?.label.toUpperCase()}
              </span>
            </div>
            <div className="h-1.5 bg-[var(--color-light-grey)] rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--color-brand-blue)] rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex gap-1.5">
              {steps.map((s, i) => (
                <div
                  key={s.num}
                  className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                    i + 1 < step ? "bg-[var(--color-brand-blue)]" :
                    i + 1 === step ? "bg-[var(--color-brand-orange)]" :
                    "bg-[var(--color-light-grey)]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Question area */}
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-10 md:py-14">
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
        {step === 4 && renderStep4()}
        {step === 5 && renderStep5()}

        {step < 5 && (
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-[var(--color-border)]">
            <button
              onClick={prevStep}
              className="flex items-center gap-2 text-[13.5px] font-medium text-[var(--color-muted)] hover:text-[var(--color-dark)] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
            {isLastSubQ() ? (
              <button
                onClick={nextStep}
                disabled={!canContinue()}
                className="px-7 py-3 rounded-xl bg-[var(--color-brand-blue)] hover:bg-[var(--color-brand-blue-dark)] text-white font-semibold text-[14px] tracking-wide transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ fontFamily: "var(--font-display)" }}
              >
                CONTINUE
              </button>
            ) : (
              <button
                onClick={nextSubQ}
                disabled={!canContinue()}
                className="px-7 py-3 rounded-xl bg-[var(--color-brand-blue)] hover:bg-[var(--color-brand-blue-dark)] text-white font-semibold text-[14px] tracking-wide transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ fontFamily: "var(--font-display)" }}
              >
                NEXT
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
