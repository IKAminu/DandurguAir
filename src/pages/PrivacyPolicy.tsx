type Page = "home" | "umrah" | "services" | "about" | "faq" | "contact" | "apply" | "success" | "privacy";

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

export default function PrivacyPolicy({ navigate }: { navigate: (page: Page) => void }) {
  const go = (page: Page) => {
    navigate(page);
    window.scrollTo(0, 0);
  };

  const toc = [
    ["summary", "Summary of Key Points"],
    ["information", "1. What Information Do We Collect?"],
    ["processing", "2. How Do We Process Your Information?"],
    ["sharing", "3. When and With Whom Do We Share Your Personal Information?"],
    ["cookies", "4. Do We Use Cookies and Other Tracking Technologies?"],
    ["retention", "5. How Long Do We Keep Your Information?"],
    ["security", "6. How Do We Keep Your Information Safe?"],
    ["minors", "7. Do We Collect Information From Minors?"],
    ["rights", "8. What Are Your Privacy Rights?"],
    ["dnt", "9. Controls for Do-Not-Track Features"],
    ["updates", "10. Do We Make Updates to This Notice?"],
    ["contact-dpo", "11. How Can You Contact Us About This Notice?"],
    ["review-update-delete", "12. How Can You Review, Update, or Delete the Data We Collect From You?"],
    ["framework", "Governing Privacy Framework"],
  ];

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="mb-12">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-[var(--color-brand-blue)] mb-3">Legal & Privacy</p>
          <h1 className="text-3xl md:text-5xl font-bold text-[var(--color-dark)] mb-4">Privacy Policy</h1>
          <p className="text-sm text-[var(--color-muted)]">Last updated: September 17, 2026</p>
        </div>

        <div className="prose-none">
          <p className="text-[15px] leading-7 text-[var(--color-text)] mb-5">
            This Privacy Policy for <strong>Dandurgu Air Travel and Tours Ltd</strong> ("we", "us", or "our") describes how and why we may access, collect, store, use, and share ("process") your personal information when you use our services ("Services"), including when you:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[15px] leading-7 text-[var(--color-text)] mb-5">
            <li>Visit our website at <strong>dandurgu.cc.cd</strong> or any other website of ours that links to this Privacy Policy.</li>
            <li>Submit an enquiry, application, booking, or other request through our website.</li>
            <li>Contact us by telephone, WhatsApp, email, social media, or other communication channels.</li>
            <li>Purchase or enquire about our travel, pilgrimage, flight, accommodation, tour, or related services.</li>
            <li>Engage with us in other related ways, including marketing, events, or customer support.</li>
          </ul>
          <p className="text-[15px] leading-7 text-[var(--color-text)] mb-5">This Privacy Policy is intended to help you understand what information we collect, why we collect it, how we use and share it, how long we retain it, and the rights and choices available to you.</p>
          <p className="text-[15px] leading-7 text-[var(--color-text)] mb-12">If you have questions or concerns about this Privacy Policy or how we process your personal information, please contact our <a href="#contact-dpo" className={linkClass}>Data Protection Officer</a> at <a href="mailto:dandurguairtravels@gmail.com" className={linkClass}>dandurguairtravels@gmail.com</a>.</p>

          <nav aria-label="Table of contents" className="border border-[var(--color-border)] rounded-2xl bg-[var(--color-light-grey)] p-6 md:p-8 mb-14">
            <h2 className="text-lg font-bold text-[var(--color-dark)] mb-5">Table of Contents</h2>
            <ol className="space-y-2.5 text-[14px] leading-6">
              {toc.map(([id, label]) => <li key={id}><a href={`#${id}`} className={linkClass}>{label}</a></li>)}
            </ol>
          </nav>

          <Section id="summary" title="Summary of Key Points">
            <Subsection title="What personal information do we process?"><p>We may process personal information depending on how you interact with us and the Services, the choices you make, and the products and services you use.</p><p>This may include your name, contact details, travel information, passport and identification information, nationality, age, location information, payment-related information, and documents you provide to us for travel or pilgrimage arrangements.</p></Subsection>
            <Subsection title="Do we process sensitive personal information?"><p>We do not intentionally request sensitive personal information unless it is necessary for a specific service or required by applicable law.</p><p>If you voluntarily provide information that may be considered sensitive personal information, we will process it only where permitted or required by applicable law.</p></Subsection>
            <Subsection title="Do we collect information from third parties?"><p>We may receive information from third parties where this is necessary to provide services to you or where permitted by law. This may include airlines, hotels, travel service providers, payment providers, visa or documentation providers, pilgrimage service providers, and other business partners involved in fulfilling your requested services.</p></Subsection>
            <Subsection title="How do we process your information?"><p>We process your personal information to provide and administer our Services, arrange travel and pilgrimage services, communicate with you, process applications and bookings, facilitate payments, provide customer support, improve our Services, prevent fraud and security incidents, comply with legal and regulatory requirements, and for other purposes permitted by applicable law.</p></Subsection>
            <Subsection title="In what situations and with which parties do we share personal information?"><p>We may share personal information where necessary to provide the Services you request, operate our business, comply with legal obligations, protect our rights, or otherwise as permitted by applicable law.</p></Subsection>
            <Subsection title="How do we keep your information safe?"><p>We use reasonable technical and organisational measures designed to protect personal information against unauthorised access, disclosure, alteration, loss, or destruction. However, no electronic transmission or storage system can be guaranteed to be completely secure.</p></Subsection>
            <Subsection title="What are your rights?"><p>Subject to applicable law, you may have rights to access, correct, update, restrict, object to, or request deletion of your personal information, as well as the right to withdraw consent where processing is based on consent.</p></Subsection>
            <Subsection title="How do you exercise your rights?"><p>You may contact us using the details provided in this Privacy Policy. We will consider and respond to requests in accordance with applicable data protection laws.</p></Subsection>
          </Section>

          <Section id="information" title="1. WHAT INFORMATION DO WE COLLECT?">
            <Subsection title="Personal information you disclose to us"><p>We collect personal information that you voluntarily provide when you express an interest in our Services, submit an enquiry or application, make a booking, request information, communicate with us, or otherwise interact with Dandurgu.</p><p>The personal information we collect depends on the nature of your interaction with us and the Services you request.</p><p>This may include:</p><ul className="list-disc pl-6 space-y-1"><li>Full name</li><li>Date of birth and age</li><li>Gender where required for travel arrangements</li><li>Phone number and WhatsApp number</li><li>Email address</li><li>Contact preferences</li><li>Residential address, state, and city</li><li>Nationality</li><li>Passport details</li><li>Passport expiry date and place of issue</li><li>Travel dates and departure city</li><li>Flight and itinerary information</li><li>Accommodation preferences and booking information</li><li>Information relating to other travellers in your booking, where provided by you</li><li>Visa and travel-document information</li><li>Copies of passports and other travel documents that you provide to us</li><li>Payment-related information necessary to process or confirm your booking</li><li>Information you provide when requesting customer support</li><li>Information you voluntarily provide in connection with special travel requirements or assistance</li></ul></Subsection>
            <Subsection title="Travel documents and uploads"><p>When you submit an application for travel, Umrah, Hajj, or another service, we may collect copies of documents you provide, including passport copies and other travel-related documents.</p><p>We use these documents only for purposes connected with your application, travel arrangements, visa or documentation processing, booking and service delivery, compliance with applicable requirements, and other legitimate purposes described in this Privacy Policy.</p><p>You should provide only documents and information that are requested or reasonably necessary for the service you are seeking.</p></Subsection>
            <Subsection title="Information collected automatically"><p>When you visit our website, we may automatically collect certain technical information, such as your IP address, browser type, device information, operating system, pages visited, approximate location derived from technical information, and information about how you interact with the website.</p><p>This information may be collected through cookies, analytics tools, server logs, or similar technologies, depending on the technologies active on our website.</p></Subsection>
            <Subsection title="Sensitive information"><p>We do not intentionally request sensitive personal information unless it is necessary for a specific service or required by applicable law.</p><p>If you voluntarily provide information that may be considered sensitive personal information, we will process it only where permitted or required under applicable law and only for relevant purposes.</p><p>All personal information that you provide to us should be true, complete, and accurate. You should notify us when relevant information changes.</p></Subsection>
          </Section>

          <Section id="processing" title="2. HOW DO WE PROCESS YOUR INFORMATION?">
            <Subsection title="Providing travel and pilgrimage services"><p>We may process your information to arrange, administer, and facilitate the Services you request, including flights, accommodation, transportation, Umrah, Hajj, tours, visa and travel documentation, and related services.</p></Subsection>
            <Subsection title="Processing applications and bookings"><p>We may use your information to review applications, confirm availability, make reservations, issue or arrange travel documents, communicate booking information, and manage changes, cancellations, refunds, or other booking-related matters.</p></Subsection>
            <Subsection title="Communicating with you"><p>We may use your information to communicate with you by telephone, WhatsApp, email, SMS, social media, or other appropriate communication channels regarding enquiries, applications, bookings, payments, travel arrangements, customer support, and other services you have requested.</p></Subsection>
            <Subsection title="Providing customer support"><p>We may process your information to respond to enquiries, provide assistance, resolve problems, and support you before, during, or after your travel.</p></Subsection>
            <Subsection title="Travel documentation and compliance"><p>We may process your information where necessary to comply with airline, immigration, visa, pilgrimage, government, regulatory, or other applicable requirements.</p></Subsection>
            <Subsection title="Payments and financial administration"><p>We may process information necessary to receive or confirm payments, administer invoices, maintain financial records, process refunds, and meet applicable accounting, tax, legal, or regulatory requirements.</p><p>Where payments are processed through third-party payment providers, those providers may process your payment information in accordance with their own privacy policies and terms.</p></Subsection>
            <Subsection title="Administrative communications"><p>We may send you information relating to your bookings, Services, changes to our policies, service updates, and other administrative matters.</p></Subsection>
            <Subsection title="Marketing and promotional communications"><p>Where permitted by applicable law, we may use your contact information to send information about Dandurgu's services, offers, promotions, or other marketing communications.</p><p>You may opt out of promotional communications at any time by contacting us or using an unsubscribe option where one is provided.</p></Subsection>
            <Subsection title="Testimonials and reviews"><p>If you voluntarily provide a testimonial, review, photograph, or other feedback and give us permission to use it, we may publish it on our website, social media, marketing materials, or other communications.</p><p>We will not knowingly publish personal information as part of a testimonial without an appropriate basis or permission where required by applicable law.</p></Subsection>
            <Subsection title="Improving our Services"><p>We may analyse information about how customers interact with our Services to improve our website, services, customer experience, marketing, and business operations.</p></Subsection>
            <Subsection title="Security and fraud prevention"><p>We may process information to detect, investigate, prevent, or respond to fraud, abuse, unauthorised access, security incidents, or other unlawful activity.</p></Subsection>
            <Subsection title="Legal and regulatory obligations"><p>We may process personal information where necessary to comply with applicable laws, regulations, court orders, government requests, regulatory requirements, or legitimate legal obligations.</p><p>We process personal information only where we have a lawful basis for doing so under applicable data protection law.</p></Subsection>
          </Section>

          <Section id="sharing" title="3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?">
            <p>We may share personal information where reasonably necessary to provide our Services, operate our business, comply with legal obligations, protect our rights, or otherwise as permitted by applicable law.</p>
            <p>Depending on the service you request, this may include sharing information with:</p>
            <ul className="list-disc pl-6 space-y-1"><li>Airlines and airline booking or distribution providers</li><li>Hotels and accommodation providers</li><li>Transportation providers</li><li>Visa and travel-document processing providers</li><li>Saudi Arabian travel and pilgrimage service providers</li><li>Hajj and Umrah service providers</li><li>Government authorities and regulatory bodies where required</li><li>Payment providers, banks, and financial institutions where necessary</li><li>Technology, hosting, communications, and other service providers that support our business</li><li>Business partners involved in providing services requested by you</li><li>Professional advisers, auditors, or legal advisers where necessary</li><li>Other parties where you have provided consent or where disclosure is otherwise permitted or required by law</li></ul>
            <p>We do not sell your personal information to third parties.</p>
            <Subsection title="Business transfers"><p>We may transfer or share personal information in connection with a merger, restructuring, financing, sale of assets, acquisition, or other business transaction involving all or part of Dandurgu, where permitted by applicable law.</p></Subsection>
            <Subsection title="Service providers"><p>Where third-party service providers process personal information on our behalf, we take reasonable steps to require them to handle that information appropriately and in accordance with applicable data protection requirements.</p></Subsection>
            <Subsection title="International transfers"><p>Because travel services may involve international airlines, hotels, pilgrimage providers, visa services, technology providers, and other organisations located outside Nigeria, your personal information may sometimes be transferred to or processed in another country.</p><p>Where required by applicable law, we will take appropriate steps to ensure that such transfers are subject to appropriate data protection safeguards.</p></Subsection>
          </Section>

          <Section id="cookies" title="4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?">
            <p>We may use cookies and similar technologies to operate, secure, analyse, and improve our website.</p><p>These technologies may help us:</p><ul className="list-disc pl-6 space-y-1"><li>Maintain basic website functionality</li><li>Remember preferences</li><li>Understand how visitors use our website</li><li>Monitor website performance</li><li>Detect security issues</li><li>Improve our Services and user experience</li><li>Measure the effectiveness of marketing campaigns</li></ul><p>Depending on the tools used on our website, third-party service providers may also use cookies, pixels, or similar technologies for analytics or advertising purposes.</p><p>The specific technologies used may change as our website develops. Where required by applicable law, we will provide appropriate information or controls regarding non-essential cookies and tracking technologies.</p>
          </Section>

          <Section id="retention" title="5. HOW LONG DO WE KEEP YOUR INFORMATION?">
            <p>We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by applicable law.</p><p>The length of time we retain information may depend on:</p><ul className="list-disc pl-6 space-y-1"><li>The nature of the Services provided</li><li>Whether you have an ongoing relationship with us</li><li>Legal, regulatory, tax, accounting, or reporting requirements</li><li>The need to resolve disputes or enforce agreements</li><li>Legitimate business and record-keeping requirements</li><li>Security and fraud-prevention requirements</li></ul><p>When we no longer have a legitimate need to retain personal information, we will take reasonable steps to delete, anonymise, or securely isolate it in accordance with applicable law and our retention practices.</p><p>Information contained in backup systems may remain for a limited period until those backups are securely overwritten or deleted.</p>
          </Section>

          <Section id="security" title="6. HOW DO WE KEEP YOUR INFORMATION SAFE?">
            <p>We use reasonable technical and organisational security measures designed to protect personal information against unauthorised access, loss, misuse, alteration, disclosure, or destruction.</p><p>These measures may include access controls, secure communications, account protections, organisational procedures, and other appropriate safeguards.</p><p>However, no electronic transmission over the Internet or information storage technology can be guaranteed to be completely secure.</p><p>Accordingly, although we take reasonable steps to protect your information, we cannot guarantee that unauthorised third parties will never be able to defeat our security measures or access information improperly.</p><p>If we become aware of a personal data breach that requires notification under applicable law, we will take appropriate steps to investigate, contain, and respond to the incident and make any required notifications.</p><p>You should also take reasonable steps to protect your own information, including using secure devices and networks and avoiding sending sensitive information through channels that have not been requested or approved by Dandurgu.</p>
          </Section>

          <Section id="minors" title="7. DO WE COLLECT INFORMATION FROM MINORS?">
            <p>Our website and Services are not intended to be used independently by children under 18 unless permitted by applicable law and appropriate parental or guardian involvement.</p><p>We do not knowingly market directly to children under 18.</p><p>However, our travel services may involve families or groups travelling with minors. In such circumstances, a parent, guardian, or other authorised adult may provide information relating to a minor where necessary to arrange the requested travel or pilgrimage services.</p><p>Where we process information relating to a minor, we will handle that information in accordance with applicable data protection laws.</p><p>If you believe that we have collected personal information from a child inappropriately, please contact us using the details provided in our <a href="#contact-dpo" className={linkClass}>contact section</a>.</p>
          </Section>

          <Section id="rights" title="8. WHAT ARE YOUR PRIVACY RIGHTS?">
            <p>Depending on applicable law and the circumstances of the processing, you may have rights relating to your personal information, including the right to:</p><ul className="list-disc pl-6 space-y-1"><li>Request access to personal information we hold about you</li><li>Request correction of inaccurate or incomplete information</li><li>Request deletion of personal information in appropriate circumstances</li><li>Request restriction of certain processing</li><li>Object to certain processing</li><li>Withdraw consent where processing is based on consent</li><li>Request information about how your personal information is processed</li><li>Request a copy of certain personal information where applicable</li><li>Lodge a complaint with the relevant data protection authority where you believe your rights have been violated</li></ul><p>These rights are not absolute and may be subject to limitations under applicable law. For example, we may need to retain certain information to comply with legal, accounting, regulatory, contractual, or other obligations.</p>
            <Subsection title="Withdrawing consent"><p>Where we rely on your consent to process personal information, you may withdraw that consent at any time by contacting us.</p><p>Withdrawing consent does not affect the lawfulness of processing that occurred before the withdrawal.</p><p>Where another lawful basis permits us to continue processing your information, we may continue to do so to the extent permitted by applicable law.</p></Subsection>
          </Section>

          <Section id="dnt" title="9. CONTROLS FOR DO-NOT-TRACK FEATURES">
            <p>Some web browsers and mobile operating systems include a "Do Not Track" feature or similar setting.</p><p>Because there is currently no universally accepted technical standard for responding to these signals, our website may not respond to every browser-based Do Not Track signal.</p><p>Where applicable law requires us to recognise a particular privacy signal or preference, we will comply with the relevant requirements.</p>
          </Section>

          <Section id="updates" title="10. DO WE MAKE UPDATES TO THIS NOTICE?">
            <p>Yes. We may update this Privacy Policy from time to time to reflect changes to our Services, business practices, technology, or applicable legal and regulatory requirements.</p><p>The updated version will be identified by an updated "Last updated" date at the beginning of this Privacy Policy.</p><p>Where required by applicable law, we may provide additional notice of material changes.</p><p>We encourage you to review this Privacy Policy periodically so that you remain informed about how we handle personal information.</p>
          </Section>

          <Section id="contact-dpo" title="11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?">
            <p>If you have questions, concerns, requests, or complaints regarding this Privacy Policy or the processing of your personal information, you may contact us at:</p>
            <div className="border-l-2 border-[var(--color-brand-blue)] pl-5 space-y-1">
              <p><strong>Dandurgu Air Travel and Tours Ltd</strong></p>
              <p><strong>Data Protection Officer</strong></p>
              <p>Satatima Plaza</p><p>Miller Road, Bompai Rd, Nassarawa</p><p>Kano, Kano 900101</p><p>Nigeria</p>
              <p><strong>Email:</strong> <a href="mailto:dandurguairtravels@gmail.com" className={linkClass}>dandurguairtravels@gmail.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+2349030878676" className={linkClass}>09030878676</a></p>
            </div>
            <p>You may contact us through the contact form on this website.</p>
          </Section>

          <Section id="review-update-delete" title="12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?">
            <p>Subject to applicable law, you may request access to, correction of, updating of, or deletion of personal information we hold about you.</p><p>You may also request information about how we process your personal information or withdraw consent where consent is the applicable legal basis.</p><p>To make a request, contact us using the details provided in <a href="#contact-dpo" className={linkClass}>Section 11</a> of this Privacy Policy.</p><p>To help us protect your information, we may need to verify your identity before fulfilling certain requests.</p><p>We will consider and respond to your request within the timeframe required by applicable data protection law.</p><p>Some requests may be refused or limited where permitted or required by law, including where we are legally required to retain certain information or where fulfilling the request would adversely affect the rights of others.</p>
          </Section>

          <Section id="framework" title="GOVERNING PRIVACY FRAMEWORK">
            <p>Dandurgu Air Travel and Tours Ltd is committed to handling personal information in accordance with applicable data protection and privacy laws.</p><p>For customers and data subjects in Nigeria, this includes the <strong>Nigeria Data Protection Act 2023 (NDPA)</strong> and applicable regulations, directives, and guidance issued by the <strong>Nigeria Data Protection Commission (NDPC)</strong>.</p><p>Where other privacy laws apply based on your location or circumstances, we will handle personal information in accordance with applicable legal requirements to the extent required.</p>
          </Section>

          <div className="border-t border-[var(--color-border)] pt-8 mt-16 text-sm text-[var(--color-muted)]">
            <p><strong>Dandurgu Air Travel and Tours Ltd</strong></p>
            <p>Privacy Policy</p>
            <p>Last updated: September 17, 2026</p>
            <p className="mt-5"><a href="#" onClick={(e) => { e.preventDefault(); go("home"); }} className={linkClass}>Return to Dandurgu</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
