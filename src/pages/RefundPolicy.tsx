type Page = "home" | "umrah" | "services" | "about" | "faq" | "contact" | "apply" | "success" | "privacy" | "terms" | "refund";

const sectionClass = "scroll-mt-28";
const linkClass = "text-[var(--color-brand-blue)] hover:underline";

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className={`${sectionClass} mb-12`}>
    <h2 className="text-xl md:text-2xl font-bold text-[var(--color-dark)] mb-5">{title}</h2>
    <div className="space-y-5 text-[15px] leading-7 text-[var(--color-text)]">{children}</div>
  </section>
);

const Subsection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-3">
    <h3 className="text-base md:text-lg font-semibold text-[var(--color-dark)]">{title}</h3>
    <div>{children}</div>
  </div>
);

export default function RefundPolicy({ navigate }: { navigate: (page: Page) => void }) {
  const go = (page: Page) => {
    navigate(page);
    window.scrollTo(0, 0);
  };

  const toc = [
    ["scope", "1. Scope and Definitions"],
    ["supplier-terms", "2. Third-Party Providers and Supplier Rules"],
    ["principles", "3. General Refund Principles"],
    ["customer-cancellation", "4. Customer-Initiated Cancellations"],
    ["deposits", "5. Deposits, Instalments, and Unpaid Balances"],
    ["airline", "6. Airline Tickets and Flight Changes"],
    ["pilgrimage", "7. Hajj and Umrah Bookings"],
    ["visa", "8. Visa Refusal and Documentation Issues"],
    ["other-services", "9. Hotels, Tours, Transport, and Other Services"],
    ["company-cancellation", "10. Cancellation or Changes by Dandurgu or a Supplier"],
    ["exceptional-events", "11. Events Beyond Our Control"],
    ["request", "12. How to Request a Cancellation or Refund"],
    ["amendments", "13. Amendments and Transfers"],
    ["liability", "14. Responsibility and Indemnity"],
    ["complaints", "15. Complaints and Disputes"],
    ["acceptance", "16. Disclosure, Acceptance, and Legal Rights"],
  ];

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="mb-12">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-[var(--color-brand-blue)] mb-3">Legal & Booking Information</p>
          <h1 className="text-3xl md:text-5xl font-bold text-[var(--color-dark)] mb-4">Refund, Cancellation, and Amendment Policy</h1>
          <p className="text-sm text-[var(--color-muted)]">Last updated: October 21, 2026</p>
          <p className="text-[15px] leading-7 text-[var(--color-text)] mt-6">This Policy explains how cancellation requests, booking changes, and refund calculations are handled by Dandurgu Air Travel and Tours Ltd. The terms that apply to a particular booking may also depend on the written quotation, invoice, confirmed itinerary, package terms, and the rules of the relevant supplier.</p>
        </div>

        <nav aria-label="Table of contents" className="border border-[var(--color-border)] rounded-2xl bg-[var(--color-light-grey)] p-6 md:p-8 mb-14">
          <h2 className="text-lg font-bold text-[var(--color-dark)] mb-5">Table of Contents</h2>
          <ol className="space-y-2.5 text-[14px] leading-6">
            {toc.map(([id, label]) => <li key={id}><a href={`#${id}`} className={linkClass}>{label}</a></li>)}
          </ol>
        </nav>

        <Section id="scope" title="1. SCOPE AND DEFINITIONS">
          <p>This Policy applies to requests for cancellation, amendment, credit, or refund relating to travel services arranged, sold, or facilitated by <strong>Dandurgu Air Travel and Tours Ltd</strong> ("Dandurgu", "we", "us", or "our"), including flights, Hajj and Umrah arrangements, accommodation, transportation, tours, visa-related assistance, and related services.</p>
          <p>"Customer" means the person who makes the booking or pays for a service. "Supplier" means an airline, hotel, transport operator, tour operator, visa or pilgrimage service provider, government authority, payment provider, or other third party involved in the arrangement. "Refundable amount" means the amount remaining payable to the customer after applying the relevant supplier rules, services already delivered, and lawful and disclosed charges.</p>
          <p>This Policy should be read with our <button onClick={() => go("terms")} className={linkClass}>Terms and Conditions</button> and, where personal information is involved, our <button onClick={() => go("privacy")} className={linkClass}>Privacy Policy</button>.</p>
        </Section>

        <Section id="supplier-terms" title="2. THIRD-PARTY PROVIDERS AND SUPPLIER RULES">
          <p>Many travel arrangements depend on independent suppliers. Airlines, hotels, visa processors, pilgrimage authorities, transport providers, and other suppliers may set their own deadlines, cancellation penalties, refund conditions, and documentation requirements.</p>
          <p>Where a supplier's rules apply to your booking, those rules form part of the conditions communicated for that service. Dandurgu will apply the relevant supplier rules when calculating a refund and will not promise a supplier refund that the supplier has not approved or made available.</p>
          <p>We will distinguish, where reasonably possible, between amounts retained or charged by a supplier and any separate Dandurgu service or administration fee. A supplier's refusal or delay in refunding money may affect timing or the amount available, but does not remove any rights the customer has against Dandurgu under applicable law.</p>
        </Section>

        <Section id="principles" title="3. GENERAL REFUND PRINCIPLES">
          <p>Refund eligibility and the amount payable depend on the service purchased, the timing of the request, supplier rules, work already performed, and applicable law. A refund may be reduced by charges that are applicable to the booking and were lawfully disclosed before payment.</p>
          <p>Where permitted by law, deductions may include:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>non-refundable amounts actually retained by a supplier;</li>
            <li>cancellation or amendment penalties imposed under applicable supplier rules;</li>
            <li>government, visa, permit, processing, or payment charges that cannot be recovered;</li>
            <li>the reasonable value of services already provided; and</li>
            <li>a Dandurgu service or administration fee that was disclosed before payment and is properly earned or applicable to the cancellation.</li>
          </ul>
          <p>We will not treat a charge as automatically deductible merely because it is described as an administrative cost. Deductions must be applicable, supportable, and lawful. We will not charge for hypothetical expenses that have not been incurred or for services that have not been earned merely to avoid issuing a refund.</p>
          <p>If no supplier commitment has been made and no relevant service has been performed, any amount retained by Dandurgu will be limited to a lawful, reasonable, and previously disclosed fee or cost that actually applies. Nothing in this Policy authorises a blanket forfeiture of all payments where that would be unlawful.</p>
        </Section>

        <Section id="customer-cancellation" title="4. CUSTOMER-INITIATED CANCELLATIONS">
          <p>If you decide not to travel or no longer want a service after paying, contact Dandurgu in writing as soon as possible. Your decision to change your mind does not automatically entitle you to a full refund, but it also does not automatically mean that Dandurgu may keep the entire amount paid.</p>
          <p>We will review the booking and calculate the amount, if any, refundable after accounting for applicable supplier penalties, non-recoverable third-party charges, services already provided, and any disclosed and lawful Dandurgu fee. The nearer the cancellation is to departure or service delivery, the more likely it is that supplier costs or restrictions will limit the available refund.</p>
          <p>Any cancellation schedule or package-specific cancellation terms supplied to you before payment will apply to the extent they are consistent with applicable law. Where no specific schedule was provided, the refund will be assessed using the applicable supplier terms, actual commitments and costs, work already performed, and the principles in this Policy.</p>
          <p>Failure to attend, late arrival, failure to provide required documents, or abandonment of a trip may be treated as a no-show or customer-caused cancellation under the relevant supplier rules. Such cases may result in limited or no supplier refund, subject to applicable law and the specific booking terms.</p>
        </Section>

        <Section id="deposits" title="5. DEPOSITS, INSTALMENTS, AND UNPAID BALANCES">
          <p>A deposit reserves or helps secure a requested arrangement only as described in the quotation or booking confirmation. Paying a deposit does not mean it is automatically non-refundable in every circumstance. Its treatment depends on the terms disclosed before payment, supplier commitments, costs incurred, services performed, and applicable law.</p>
          <p>If you cancel after making instalment payments, the refund calculation will consider the total amount received and the applicable deductions. If the lawful cancellation costs and earned charges exceed the amount paid, any further amount claimed from you must have a valid contractual and legal basis and will not be imposed contrary to applicable law.</p>
          <p>If you do not pay an instalment or balance by the stated deadline, Dandurgu may be unable to secure or retain the requested arrangements. After giving any notice required by the booking terms or applicable law, we may cancel an unconfirmed or at-risk arrangement and apply the relevant supplier rules and lawful disclosed charges. Any remaining balance, credit, or refund will be calculated under this Policy and the booking terms.</p>
        </Section>

        <Section id="airline" title="6. AIRLINE TICKETS AND FLIGHT CHANGES">
          <p>Airline tickets are subject to the fare conditions and ticket rules of the issuing airline or ticketing provider. Some fares are non-refundable, while others may permit a refund subject to penalties, taxes, deadlines, or other conditions. A ticket's price, taxes, service fees, and airline charges may be treated differently under the applicable rules.</p>
          <p>Where Dandurgu arranges a ticket through an airline, consolidator, or another ticketing provider, we will explain the applicable process and assist with a refund request where the service we agreed to provide includes that assistance. We cannot guarantee an airline's approval or refund timeline.</p>
          <p>If a customer requests a change, reissue, name correction, or rerouting, additional fare differences, airline penalties, supplier charges, and any previously disclosed Dandurgu service fee may apply. Customers should not assume that an unused ticket is refundable or that a refund request automatically cancels a ticket.</p>
        </Section>

        <Section id="pilgrimage" title="7. HAJJ AND UMRAH BOOKINGS">
          <p>Hajj and Umrah packages may combine several separate services, including flights, accommodation, ground transport, visa processing, permits, pilgrimage arrangements, and services supplied in Saudi Arabia or by other providers. Each component may have different cancellation deadlines and refund rules.</p>
          <p>Once a booking is made, funds may be committed to hotels, airlines, ground operators, visa or permit processing, pilgrimage platforms, or other suppliers. Amounts that those providers lawfully retain or cannot return may be deducted from the refund, together with applicable disclosed and earned Dandurgu charges.</p>
          <p>Government or pilgrimage authority deadlines, quota limits, permit rules, visa processing, and changes to official requirements may affect whether a service can be cancelled, transferred, or refunded. Dandurgu will explain the known consequences for the relevant booking and will not guarantee a refund or permit outcome controlled by another authority.</p>
          <p>Where a package-specific cancellation schedule or supplier terms are provided before payment, they should be reviewed carefully before the customer pays. If there is a conflict, mandatory law takes priority, followed by the applicable confirmed booking terms and supplier rules to the extent legally enforceable.</p>
        </Section>

        <Section id="visa" title="8. VISA REFUSAL AND DOCUMENTATION ISSUES">
          <p>Visa issuance, entry permission, pilgrimage approvals, and other official decisions are made by the relevant authorities, not by Dandurgu. Payment for visa assistance or a travel package does not guarantee approval.</p>
          <p>If a visa or permit is refused, delayed, or unavailable, the refund will depend on the package terms, supplier rules, work already performed, and whether fees or charges can be recovered. Government fees, completed processing services, and supplier costs may be non-refundable where the relevant rules lawfully provide for that result.</p>
          <p>If a refusal or service failure results from materially false, incomplete, or late information supplied by the customer, or from the customer's failure to meet a stated requirement, any resulting cancellation consequences will be assessed under the applicable booking terms and law. This does not excuse Dandurgu from responsibility for its own breach or other liability that cannot lawfully be excluded.</p>
        </Section>

        <Section id="other-services" title="9. HOTELS, TOURS, TRANSPORT, AND OTHER SERVICES">
          <p>Hotel reservations, tours, transfers, ground transport, insurance, and other travel services may be subject to deadlines, minimum-stay rules, no-show penalties, non-refundable rates, or separate supplier cancellation conditions.</p>
          <p>Where a supplier permits a refund, Dandurgu will account for the amount approved or returned, together with any lawful and disclosed fee for services already provided. Where a service has already been delivered, used, or partly performed, the value of that service may not be refundable, subject to applicable law and the terms of the transaction.</p>
          <p>Optional extras, separately purchased services, and third-party products may have their own cancellation rules. Customers should review those terms before confirming payment.</p>
        </Section>

        <Section id="company-cancellation" title="10. CANCELLATION OR CHANGES BY DANDURGU OR A SUPPLIER">
          <p>If Dandurgu cannot provide a service that it has expressly confirmed, we will inform you and explain the available options, which may include an alternative arrangement, a credit, or a refund, as appropriate to the circumstances and required by applicable law.</p>
          <p>If a supplier cancels, changes, or fails to provide a service, the options available may depend on that supplier's rules and the nature of the booking. Dandurgu will take reasonable steps within its role to communicate with the supplier and assist with available alternatives or refund procedures.</p>
          <p>Where Dandurgu is responsible for the cancellation or failure, the customer will retain any refund, remedy, or compensation rights available under applicable law. Nothing in this Policy permits Dandurgu to retain payment for a service it failed to provide where a refund is legally due.</p>
        </Section>

        <Section id="exceptional-events" title="11. EVENTS BEYOND OUR CONTROL">
          <p>Events such as severe weather, natural disasters, public-health emergencies, war, civil unrest, border closures, government restrictions, airline disruption, or changes to official pilgrimage requirements may affect travel services.</p>
          <p>In these circumstances, refund options may be determined by the relevant supplier, authority, insurance policy, or mandatory law. Dandurgu will communicate known options and provide reasonable assistance within the scope of the service agreed. We cannot promise a supplier refund, compensation, or alternative that is not available.</p>
          <p>This section does not remove any non-excludable rights or obligations under applicable law.</p>
        </Section>

        <Section id="request" title="12. HOW TO REQUEST A CANCELLATION OR REFUND">
          <p>Submit your request through the contact form on our website or contact Dandurgu using the details below. Include your full name, booking or invoice reference, the service concerned, payment details sufficient to identify the transaction, and the reason for the request. Do not send full card numbers, passwords, or other unnecessary sensitive payment credentials.</p>
          <div className="border-l-2 border-[var(--color-brand-blue)] pl-5 space-y-1">
            <p><strong>Dandurgu Air Travel and Tours Ltd</strong></p>
            <p>Satatima Plaza, Miller Road, Bompai Rd, Nassarawa, Kano, Nigeria</p>
            <p><strong>Email:</strong> <a href="mailto:dandurguairtravels@gmail.com" className={linkClass}>dandurguairtravels@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+2349030878676" className={linkClass}>0903-087-8676</a> / <a href="tel:+2348037866633" className={linkClass}>0803-786-6633</a></p>
          </div>
          <p>We aim to acknowledge a complete request within five business days. We will review the booking, identify applicable supplier conditions and charges, and explain the refund calculation or the information still required.</p>
          <p>Where a refund is due and the amount has been established, we aim to process it within 30 calendar days. This is a target, not permission to exceed a shorter deadline imposed by applicable law or a payment provider's mandatory rules. Processing may take longer where a supplier must first approve or return funds; we will communicate material delays where reasonably possible.</p>
          <p>Refunds will ordinarily be returned through the original payment method where practicable and lawful. If that method is unavailable, we may request reasonable verification and agree on an alternative lawful method with the customer. We will not ask for passwords or one-time security codes to process a refund.</p>
        </Section>

        <Section id="amendments" title="13. AMENDMENTS AND TRANSFERS">
          <p>Requests to change travel dates, passenger details, accommodation, package components, or other booking details are subject to availability and supplier approval. The request may result in fare differences, rebooking charges, supplier penalties, new government fees, or other lawful and disclosed costs.</p>
          <p>A change is not confirmed until Dandurgu communicates confirmation. Customers should not make travel plans on the assumption that a requested amendment has been approved. Some tickets, visas, permits, hotel rates, and pilgrimage arrangements cannot be transferred or amended.</p>
        </Section>

        <Section id="liability" title="14. RESPONSIBILITY AND INDEMNITY">
          <p>Customers are responsible for providing accurate information, meeting payment and documentation deadlines, reviewing the terms supplied before payment, and promptly notifying Dandurgu of cancellation or change requests.</p>
          <p>To the extent permitted by applicable law, a customer may be responsible for direct losses or costs caused by their fraud, unlawful conduct, material misrepresentation, or unauthorised instructions. Any such responsibility must be supported by the circumstances and applicable law.</p>
          <p>Nothing in this Policy requires a customer to indemnify Dandurgu for losses caused by Dandurgu's own unlawful conduct, negligence, breach of contract, or other liability that cannot lawfully be transferred to the customer. No provision excludes or limits any liability or consumer right that cannot lawfully be excluded or limited.</p>
        </Section>

        <Section id="complaints" title="15. COMPLAINTS AND DISPUTES">
          <p>If you disagree with a refund calculation or the handling of a cancellation, contact us in writing with your booking reference and the specific issue you want reviewed. We will review the matter and explain the basis for our decision, including relevant supplier charges and Dandurgu fees where reasonably available.</p>
          <p>This Policy is governed by the laws of the Federal Republic of Nigeria, subject to mandatory applicable law. The parties should first attempt to resolve disputes in good faith. Nothing prevents a customer from pursuing a lawful remedy before a competent court, regulator, tribunal, or other appropriate body.</p>
        </Section>

        <Section id="acceptance" title="16. DISCLOSURE, ACCEPTANCE, AND LEGAL RIGHTS">
          <p>Customers should review this Policy and any booking-specific cancellation schedule before making payment. Where a specific cancellation fee, deposit condition, or supplier restriction applies, Dandurgu should disclose it before payment or confirmation, as appropriate.</p>
          <p>We may update this Policy from time to time and will update the date shown above. The version and booking terms applicable to a transaction will be considered alongside the circumstances of that transaction and applicable law. A policy update does not remove rights already protected by mandatory law.</p>
          <p>This Policy is intended to explain our process and does not constitute legal advice. Nothing in it is intended to waive statutory consumer protections, aviation rights, or any other right or remedy that cannot lawfully be waived or restricted.</p>
        </Section>

        <div className="border-t border-[var(--color-border)] pt-8 mt-16 text-sm text-[var(--color-muted)]">
          <p><strong>Dandurgu Air Travel and Tours Ltd</strong></p>
          <p>Refund, Cancellation, and Amendment Policy</p>
          <p>Last updated: October 21, 2026</p>
          <p className="mt-5"><a href="#" onClick={(e) => { e.preventDefault(); go("home"); }} className={linkClass}>Return to Dandurgu</a></p>
          <p className="mt-2">Related policies: <button onClick={() => go("terms")} className={linkClass}>Terms and Conditions</button> · <button onClick={() => go("privacy")} className={linkClass}>Privacy Policy</button></p>
        </div>
      </div>
    </div>
  );
}
