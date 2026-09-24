type Page = "home" | "umrah" | "services" | "about" | "faq" | "contact" | "apply" | "success" | "privacy" | "terms";

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

export default function Terms({ navigate }: { navigate: (page: Page) => void }) {
  const go = (page: Page) => {
    navigate(page);
    window.scrollTo(0, 0);
  };

  const toc = [
    ["agreement", "Agreement to Our Legal Terms"],
    ["services", "1. Our Services"],
    ["third-party", "2. Travel Services and Third-Party Providers"],
    ["documents", "3. Travel Documents, Information, and Eligibility"],
    ["visas", "4. Visas, Immigration, Pilgrimage, and Government Approvals"],
    ["prices", "5. Prices, Availability, and Travel Information"],
    ["payments", "6. Payments, Bookings, Cancellations, and Refunds"],
    ["representations", "7. User Representations"],
    ["prohibited", "8. Prohibited Activities"],
    ["intellectual-property", "9. Intellectual Property Rights"],
    ["submitted-information", "10. Information You Submit to Us"],
    ["management", "11. Services Management"],
    ["privacy", "12. Privacy and Personal Data"],
    ["third-party-websites", "13. Third-Party Websites and Services"],
    ["modifications", "14. Modifications and Interruptions"],
    ["disruptions", "15. Travel Disruptions and Events Beyond Our Control"],
    ["disclaimer", "16. Disclaimer"],
    ["liability", "17. Limitation of Liability"],
    ["indemnification", "18. Indemnification"],
    ["communications", "19. Electronic Communications and Records"],
    ["complaints", "20. Complaints and Customer Support"],
    ["governing-law", "21. Governing Law and Dispute Resolution"],
    ["corrections", "22. Corrections"],
    ["miscellaneous", "23. Miscellaneous"],
    ["contact", "24. Contact Us"],
  ];

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="mb-12">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-[var(--color-brand-blue)] mb-3">Legal & Terms</p>
          <h1 className="text-3xl md:text-5xl font-bold text-[var(--color-dark)] mb-4">Terms and Conditions of Service</h1>
          <p className="text-sm text-[var(--color-muted)]">Last updated: September 17, 2026</p>
        </div>

        <div className="prose-none">
          <Section id="agreement" title="AGREEMENT TO OUR LEGAL TERMS">
            <p>These Terms and Conditions of Service ("<strong>Legal Terms</strong>") constitute a legally binding agreement between you ("<strong>you</strong>" or "<strong>your</strong>") and <strong>Dandurgu Air Travel and Tours Ltd</strong> ("<strong>Dandurgu</strong>," "<strong>we</strong>," "<strong>us</strong>," or "<strong>our</strong>") concerning your access to and use of our website, <strong>https://dandurgu.l.cd</strong>, and any related pages, forms, applications, communications, and services that refer or link to these Legal Terms (collectively, the "<strong>Services</strong>").</p>
            <p>You can contact us at:</p>
            <div className="border-l-2 border-[var(--color-brand-blue)] pl-5 space-y-1">
              <p><strong>Dandurgu Air Travel and Tours Ltd</strong></p>
              <p><strong>Address:</strong> Satatima Plaza, Miller Road, Bompai Rd, Nassarawa, Kano, Nigeria</p>
              <p><strong>Email:</strong> <a href="mailto:dandurguairtravels@gmail.com" className={linkClass}>dandurguairtravels@gmail.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+2349030878676" className={linkClass}>0903-087-8676</a> / <a href="tel:+2348037866633" className={linkClass}>0803-786-6633</a></p>
            </div>
            <p>By accessing or using the Services, you confirm that you have read, understood, and agree to be bound by these Legal Terms and our <button onClick={() => go("privacy")} className={linkClass}>Privacy Policy</button>.</p>
            <p>If you do not agree with these Legal Terms, you must not use the Services.</p>
            <p>These Legal Terms, together with our <button onClick={() => go("privacy")} className={linkClass}>Privacy Policy</button> and any additional terms, conditions, booking conditions, package terms, or other documents expressly incorporated into them, govern your use of the Services.</p>
            <p>We may update these Legal Terms from time to time. When we do, we will update the "Last updated" date above. Unless otherwise required by applicable law, your continued use of the Services after revised Legal Terms are posted constitutes acceptance of the revised terms.</p>
          </Section>

          <nav aria-label="Table of contents" className="border border-[var(--color-border)] rounded-2xl bg-[var(--color-light-grey)] p-6 md:p-8 mb-14">
            <h2 className="text-lg font-bold text-[var(--color-dark)] mb-5">Table of Contents</h2>
            <ol className="space-y-2.5 text-[14px] leading-6">
              {toc.map(([id, label]) => <li key={id}><a href={`#${id}`} className={linkClass}>{label}</a></li>)}
            </ol>
          </nav>

          <Section id="services" title="1. OUR SERVICES">
            <p>Dandurgu provides travel-related services, which may include flight arrangements, Umrah and Hajj travel services, tours and travel arrangements, travel assistance, visa-related assistance, accommodation arrangements, transportation arrangements, and other related services.</p>
            <p>The information displayed on the Services is provided for general informational and service-enquiry purposes. Availability, prices, schedules, package contents, routes, accommodation, visa requirements, and other travel arrangements may change and may require confirmation.</p>
            <Subsection title="Applications are not bookings"><p>Submitting an enquiry, application, form, document, payment request, or other information through the Services does not by itself constitute:</p><ul className="list-disc pl-6 space-y-1"><li>a confirmed booking;</li><li>a confirmed flight or ticket;</li><li>a confirmed hotel or accommodation reservation;</li><li>a confirmed tour;</li><li>a confirmed Hajj or Umrah package;</li><li>a visa application approval or visa issuance;</li><li>a pilgrimage registration;</li><li>a guarantee of entry into any country; or</li><li>an agreement by Dandurgu to provide a particular service.</li></ul><p>A booking or service arrangement becomes confirmed only when Dandurgu expressly confirms the relevant arrangement and any applicable payment, documentation, availability, supplier requirements, or other conditions have been satisfied.</p></Subsection>
            <Subsection title="Service availability"><p>All services are subject to availability and applicable requirements. Dandurgu reserves the right to decline, modify, or discontinue a service where reasonably necessary, including where a service is unavailable, a required document or approval cannot be obtained, a supplier changes its terms, or applicable law or regulatory requirements prevent the service from being provided.</p></Subsection>
          </Section>

          <Section id="third-party" title="2. TRAVEL SERVICES AND THIRD-PARTY PROVIDERS">
            <p>Some services arranged or facilitated by Dandurgu may be provided by third parties, including airlines, hotels, transportation providers, tour operators, accommodation providers, visa authorities, pilgrimage authorities, government agencies, insurers, payment providers, and other suppliers.</p>
            <p>Third-party services may be subject to their own terms and conditions, fare rules, cancellation policies, refund rules, schedules, availability, documentation requirements, and other requirements.</p>
            <p>You agree that Dandurgu may rely on the information, availability, decisions, rules, and requirements provided by relevant third-party suppliers and authorities when arranging your travel.</p>
            <p>Dandurgu does not control the acts or omissions of third-party providers or government authorities, including their decisions regarding visas, immigration, entry, permits, pilgrimage registration, schedules, cancellations, delays, capacity, or other matters within their control.</p>
            <p>Where applicable, the terms of the relevant airline, hotel, tour operator, pilgrimage provider, or other supplier may apply in addition to these Legal Terms.</p>
          </Section>

          <Section id="documents" title="3. TRAVEL DOCUMENTS, INFORMATION, AND ELIGIBILITY">
            <p>You are responsible for providing information that is accurate, complete, current, and truthful.</p><p>Where you provide information or documents relating to yourself or another traveller, you represent that you are authorized to provide that information and documents.</p><p>This may include, where applicable:</p><ul className="list-disc pl-6 space-y-1"><li>full name and date of birth;</li><li>nationality;</li><li>passport information;</li><li>passport validity;</li><li>visa information;</li><li>contact information;</li><li>travel dates;</li><li>departure location;</li><li>accommodation requirements;</li><li>special assistance requirements;</li><li>guarantor information; and</li><li>other information reasonably required to arrange the requested services.</li></ul><p>You must not provide forged, altered, fraudulent, misleading, expired, or unauthorized documents or information.</p><p>You are responsible for ensuring that your passport, visa, permits, health documentation, travel authorizations, and other required travel documents are valid and meet the applicable requirements.</p><p>Dandurgu may request additional information or documents where reasonably necessary to process or arrange your requested services.</p><p>Providing information or documents to Dandurgu does not guarantee that the information will result in a successful visa application, travel authorization, pilgrimage registration, admission, or other approval.</p>
          </Section>

          <Section id="visas" title="4. VISAS, IMMIGRATION, PILGRIMAGE, AND GOVERNMENT APPROVALS">
            <p>Where Dandurgu provides assistance relating to visas, immigration, Hajj, Umrah, pilgrimage registration, or other government or regulatory requirements, Dandurgu acts only within the scope of the service agreed with you.</p><p>Dandurgu does not control the decisions of immigration authorities, embassies, consulates, airlines, pilgrimage authorities, border authorities, or other government or regulatory bodies.</p><p>Submission of an application or documents does not guarantee:</p><ul className="list-disc pl-6 space-y-1"><li>visa issuance;</li><li>visa approval;</li><li>entry into a country;</li><li>permission to remain in a country;</li><li>pilgrimage registration;</li><li>issuance of a permit;</li><li>acceptance by an airline or other carrier; or</li><li>any other government or third-party approval.</li></ul><p>You remain responsible for complying with the applicable laws and requirements of the countries and authorities relevant to your journey.</p>
          </Section>

          <Section id="prices" title="5. PRICES, AVAILABILITY, AND TRAVEL INFORMATION">
            <p>Prices, fares, schedules, routes, accommodation, package contents, availability, visa requirements, and other information displayed through the Services may change.</p><p>Unless expressly stated otherwise, information displayed on the Services does not constitute a binding offer or guarantee that a particular service, fare, package, seat, room, permit, visa, or other travel arrangement will remain available.</p><p>Where a price or travel arrangement requires confirmation, the final applicable price, availability, inclusions, exclusions, and conditions will be communicated to you before the relevant transaction is confirmed.</p><p>Dandurgu reserves the right to correct typographical, pricing, availability, or other errors in information displayed through the Services, subject to applicable law and any rights that may have arisen after a transaction has been validly confirmed.</p>
          </Section>

          <Section id="payments" title="6. PAYMENTS, BOOKINGS, CANCELLATIONS, AND REFUNDS">
            <p>Payment requirements vary depending on the service, package, supplier, booking conditions, and applicable transaction.</p><p>Where applicable, Dandurgu may require:</p><ul className="list-disc pl-6 space-y-1"><li>a deposit;</li><li>full payment;</li><li>payment by a specified deadline;</li><li>payment of supplier or government charges; or</li><li>additional payment where a customer requests a change or additional service.</li></ul><p>A payment does not necessarily constitute confirmation of every element of a travel arrangement unless Dandurgu has confirmed the relevant booking or service.</p><p>Cancellation, amendment, refund, and transfer conditions may depend on the particular service and may also be governed by the terms of the relevant airline, hotel, tour operator, pilgrimage provider, visa authority, or other supplier.</p><p>Any applicable cancellation charges, supplier charges, administrative charges, non-refundable amounts, or refund conditions will be communicated or made available to you where applicable and subject to applicable law.</p><p>Nothing in these Legal Terms is intended to remove or restrict any statutory consumer right to a refund, cancellation, remedy, or other protection that cannot lawfully be excluded or restricted.</p>
          </Section>

          <Section id="representations" title="7. USER REPRESENTATIONS">
            <p>By using the Services, you represent and warrant that:</p><ol className="list-decimal pl-6 space-y-1"><li>The information you provide is accurate, complete, and current to the best of your knowledge.</li><li>You have the legal capacity to enter into these Legal Terms, or you are using the Services with the involvement and authorization of a parent, guardian, or other person legally authorized to act on your behalf where required.</li><li>If you submit information or documents on behalf of another traveller, you are authorized to do so.</li><li>Documents and information you submit are genuine and have not been falsified, altered, or obtained through unauthorized means.</li><li>You will comply with applicable laws and regulations.</li><li>You will comply with applicable airline, immigration, visa, pilgrimage, health, border, and other travel requirements.</li><li>You will not use the Services for fraudulent, unlawful, deceptive, or unauthorized purposes.</li><li>You will not attempt to interfere with the security or operation of the Services.</li><li>You will not knowingly provide information intended to mislead Dandurgu or any third-party provider.</li></ol><p>If information you provide is materially false, inaccurate, incomplete, fraudulent, or misleading, Dandurgu may refuse to process an application, suspend communications relating to the requested service, cancel an unconfirmed arrangement, or take other lawful action available to it.</p>
          </Section>

          <Section id="prohibited" title="8. PROHIBITED ACTIVITIES">
            <p>You may not access or use the Services for any purpose other than their intended purpose.</p><p>You agree not to:</p><ul className="list-disc pl-6 space-y-1"><li>Systematically retrieve or collect data or other content from the Services to create or compile a database, directory, or similar collection without our written permission.</li><li>Trick, defraud, or mislead Dandurgu, another user, or a third-party provider.</li><li>Submit false, inaccurate, misleading, incomplete, fraudulent, or unauthorized information.</li><li>Submit forged, altered, fraudulent, expired, or unauthorized passports, visas, identification documents, travel documents, payment information, or other materials.</li><li>Impersonate another person, traveller, customer, representative, or organization.</li><li>Use the Services for an unlawful or unauthorized purpose.</li><li>Circumvent, disable, interfere with, or attempt to bypass security-related features of the Services.</li><li>Attempt to gain unauthorized access to the Services, our systems, networks, databases, or other connected systems.</li><li>Upload or transmit viruses, malware, Trojan horses, malicious code, or other material that may interfere with the operation or security of the Services.</li><li>Interfere with, disrupt, damage, or place an unreasonable burden on the Services or systems connected to them.</li><li>Use unauthorized bots, scripts, scrapers, spiders, robots, data-mining tools, or other automated systems to access or extract information from the Services, except for ordinary search-engine indexing or standard browser functionality.</li><li>Use automated means to submit applications, forms, messages, or other information through the Services.</li><li>Collect email addresses, telephone numbers, or other personal information obtained through the Services for unsolicited communications or other unauthorized purposes.</li><li>Harass, threaten, intimidate, abuse, or harm Dandurgu employees, representatives, agents, suppliers, or other users.</li><li>Submit false reports of abuse, misconduct, fraud, or other violations.</li><li>Remove copyright, trademark, or other proprietary notices from the Services.</li><li>Copy, reproduce, adapt, reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code of the Services, except where expressly permitted by applicable law.</li><li>Use the Services or their Content for an unauthorized commercial purpose or in a manner intended to compete unfairly with Dandurgu.</li><li>Use the Services to facilitate fraud, identity theft, document fraud, immigration fraud, visa fraud, payment fraud, or any other unlawful activity.</li><li>Use the Services to circumvent applicable airline, immigration, visa, pilgrimage, border, or other travel requirements.</li><li>Engage in any activity that materially interferes with another person's lawful use of the Services.</li></ul>
          </Section>

          <Section id="intellectual-property" title="9. INTELLECTUAL PROPERTY RIGHTS">
            <p>Unless otherwise stated, Dandurgu owns or has the right to use the intellectual property contained in the Services, including its website design, text, graphics, photographs, logos, trademarks, service marks, software, and other Content.</p><p>The Content and Marks are protected by applicable intellectual property laws.</p><p>Subject to your compliance with these Legal Terms, Dandurgu grants you a limited, non-exclusive, non-transferable, revocable permission to access and use the Services for their intended purpose.</p><p>You may download or print reasonable portions of publicly available Content for personal, non-commercial reference purposes, provided that you do not remove proprietary notices or modify the Content.</p><p>Except where expressly permitted by Dandurgu or applicable law, you may not reproduce, modify, distribute, publicly display, sell, license, publish, repurpose, or commercially exploit the Services, Content, or Marks.</p><p>Nothing in these Legal Terms transfers ownership of Dandurgu's intellectual property to you.</p>
          </Section>

          <Section id="submitted-information" title="10. INFORMATION YOU SUBMIT TO US">
            <p>When you submit information through the Services, including enquiries, applications, feedback, or other communications, you remain responsible for the accuracy and legality of the information you provide.</p><p>You grant Dandurgu permission to use information you submit for the purposes reasonably necessary to respond to your enquiry, process your application, arrange requested services, communicate with you, comply with legal or regulatory requirements, and otherwise provide the Services, subject to our <button onClick={() => go("privacy")} className={linkClass}>Privacy Policy</button> and applicable law.</p><p>You must not submit information or materials that you do not have the right or authority to provide.</p><p>Dandurgu does not claim ownership of your personal documents merely because you submit them through the Services. The handling of personal information and documents is governed by our <button onClick={() => go("privacy")} className={linkClass}>Privacy Policy</button> and applicable data-protection law.</p>
          </Section>

          <Section id="management" title="11. SERVICES MANAGEMENT">
            <p>We reserve the right, where reasonably necessary and subject to applicable law, to:</p><ol className="list-decimal pl-6 space-y-1"><li>Monitor the Services for violations of these Legal Terms.</li><li>Refuse, suspend, restrict, or terminate access to the Services where a user violates these Legal Terms or applicable law.</li><li>Remove or disable content or submissions that violate these Legal Terms or applicable law.</li><li>Take reasonable steps to protect the security, integrity, availability, and proper operation of the Services.</li><li>Report suspected unlawful activity to appropriate authorities where we reasonably believe such reporting is required or appropriate.</li><li>Modify or remove website content, features, forms, or functionality.</li></ol><p>Nothing in this section requires Dandurgu to monitor every submission, communication, or activity occurring through the Services.</p>
          </Section>

          <Section id="privacy" title="12. PRIVACY AND PERSONAL DATA">
            <p>Your use of the Services may require us to collect and process personal information, including information relating to travel arrangements and, where applicable, passport, visa, identification, contact, or other travel-related information.</p><p>Our collection, use, storage, disclosure, retention, and other processing of personal information is governed by our <button onClick={() => go("privacy")} className={linkClass}>Privacy Policy</button>, which forms part of these Legal Terms.</p><p>You should review our <button onClick={() => go("privacy")} className={linkClass}>Privacy Policy</button> before submitting personal information through the Services.</p><p>Where we need to share information with an airline, hotel, visa provider, pilgrimage provider, government authority, payment provider, or other third party in order to provide a requested service or comply with applicable law, such processing will be handled in accordance with our <button onClick={() => go("privacy")} className={linkClass}>Privacy Policy</button> and applicable law.</p>
          </Section>

          <Section id="third-party-websites" title="13. THIRD-PARTY WEBSITES AND SERVICES">
            <p>The Services may contain links to websites, platforms, applications, or services operated by third parties.</p><p>Such links are provided for convenience and do not necessarily constitute an endorsement by Dandurgu.</p><p>Dandurgu does not control third-party websites or services and is not responsible for their content, availability, security, privacy practices, terms, or policies.</p><p>Your use of third-party websites or services is subject to the terms and policies of those third parties.</p>
          </Section>

          <Section id="modifications" title="14. MODIFICATIONS AND INTERRUPTIONS">
            <p>We may modify, update, suspend, or discontinue any part of the Services at any time where reasonably necessary.</p><p>The Services may occasionally be unavailable due to maintenance, technical problems, network failures, security incidents, or circumstances beyond our reasonable control.</p><p>We will use reasonable efforts to restore affected Services where appropriate, but we do not guarantee uninterrupted or error-free access to the website.</p><p>Nothing in this section affects any rights you may have under applicable law in relation to a confirmed service or transaction.</p>
          </Section>

          <Section id="disruptions" title="15. TRAVEL DISRUPTIONS AND EVENTS BEYOND OUR CONTROL">
            <p>Travel may be affected by circumstances outside Dandurgu's reasonable control, including but not limited to:</p><ul className="list-disc pl-6 space-y-1"><li>severe weather;</li><li>natural disasters;</li><li>epidemics or public-health emergencies;</li><li>war or armed conflict;</li><li>civil unrest;</li><li>terrorism or security incidents;</li><li>government restrictions;</li><li>border closures;</li><li>immigration restrictions;</li><li>strikes or industrial action;</li><li>airline or airport disruption;</li><li>changes to government requirements;</li><li>changes to pilgrimage requirements;</li><li>supplier failure;</li><li>technical failures affecting third-party systems; or</li><li>other events beyond our reasonable control.</li></ul><p>Where such circumstances affect a travel arrangement, Dandurgu will take reasonable steps within its role to communicate relevant information and assist with available alternatives, subject to the applicable supplier terms, availability, and applicable law.</p>
          </Section>

          <Section id="disclaimer" title="16. DISCLAIMER">
            <p>To the fullest extent permitted by applicable law, the Services are provided on an "AS IS" and "AS AVAILABLE" basis.</p><p>We do not guarantee that the website will always be available, uninterrupted, secure, error-free, or completely current.</p><p>We do not guarantee that information displayed on the website will remain unchanged, or that any particular travel service, fare, accommodation, visa, package, seat, route, or other arrangement will remain available.</p><p>Information concerning third-party services, travel requirements, schedules, prices, or availability may change and may be subject to confirmation.</p><p>Nothing in these Legal Terms excludes or limits any warranty, liability, right, or remedy that cannot lawfully be excluded or limited under applicable law.</p>
          </Section>

          <Section id="liability" title="17. LIMITATION OF LIABILITY">
            <p>To the fullest extent permitted by applicable law, Dandurgu will not be liable for losses arising solely from circumstances beyond its reasonable control or from the acts or omissions of third-party providers or government authorities, including airlines, hotels, transportation providers, visa authorities, immigration authorities, pilgrimage authorities, or other suppliers, except to the extent that applicable law provides otherwise.</p><p>Where Dandurgu is legally responsible for a loss, our liability will be determined in accordance with applicable law and the circumstances of the relevant transaction.</p><p>Nothing in these Legal Terms excludes, restricts, or attempts to waive liability or rights that cannot lawfully be excluded, restricted, or waived, including liability arising from fraud, applicable statutory consumer protections, or other non-excludable liability.</p><p>Where a particular travel service is supplied by a third party, any claim concerning that third-party service may also be subject to the terms and conditions of the relevant provider.</p>
          </Section>

          <Section id="indemnification" title="18. INDEMNIFICATION">
            <p>To the extent permitted by applicable law, you agree to compensate Dandurgu for losses, claims, liabilities, damages, costs, and reasonable legal expenses arising directly from:</p><ol className="list-decimal pl-6 space-y-1"><li>Your material breach of these Legal Terms;</li><li>Your submission of fraudulent, forged, or unauthorized information or documents;</li><li>Your unlawful use of the Services;</li><li>Your violation of another person's intellectual property or other legal rights; or</li><li>Your intentional misuse of the Services that causes loss or damage to Dandurgu or another party.</li></ol><p>This section does not require you to indemnify Dandurgu for losses caused by Dandurgu's own unlawful conduct, negligence, or other liability that cannot lawfully be transferred to you.</p>
          </Section>

          <Section id="communications" title="19. ELECTRONIC COMMUNICATIONS AND RECORDS">
            <p>When you use the Services, submit an online form, send us an email, or otherwise communicate electronically with us, you consent to receiving communications electronically where permitted by applicable law.</p><p>Electronic communications, including emails, application submissions, confirmations, notices, and electronic records, may be used to communicate with you concerning your enquiry, application, booking, payment, or other service.</p><p>Where applicable law recognizes electronic signatures, records, agreements, and communications, you consent to their use in connection with the Services.</p>
          </Section>

          <Section id="complaints" title="20. COMPLAINTS AND CUSTOMER SUPPORT">
            <p>If you have a complaint, question, or concern regarding the Services or a travel arrangement, you should first contact Dandurgu using the contact details provided in these Legal Terms or on the Services.</p><p>We will review complaints and seek to resolve legitimate concerns in accordance with applicable law and the circumstances of the relevant transaction.</p><p>Nothing in this section prevents you from exercising any statutory rights or pursuing any lawful remedy available to you.</p>
          </Section>

          <Section id="governing-law" title="21. GOVERNING LAW AND DISPUTE RESOLUTION">
            <p>These Legal Terms and your use of the Services are governed by the laws of the Federal Republic of Nigeria, without regard to conflict-of-law principles, except where mandatory applicable law provides otherwise.</p><p>If a dispute arises between you and Dandurgu concerning these Legal Terms or the Services, the parties should first attempt in good faith to resolve the matter directly through written communication.</p><p>If the dispute cannot be resolved through reasonable efforts, either party may pursue any remedy available through a court or other lawful dispute-resolution mechanism having competent jurisdiction in Nigeria.</p><p>Nothing in this section prevents a consumer from exercising any mandatory statutory right, including any right to seek redress before a competent regulatory body, tribunal, or court where permitted by applicable law.</p>
          </Section>

          <Section id="corrections" title="22. CORRECTIONS">
            <p>The Services may contain typographical errors, inaccuracies, omissions, outdated information, or other errors relating to descriptions, prices, schedules, availability, or other information.</p><p>We reserve the right to correct or update such information.</p><p>Where a correction materially affects an already confirmed transaction, the correction will be handled subject to the applicable transaction terms and applicable law.</p>
          </Section>

          <Section id="miscellaneous" title="23. MISCELLANEOUS">
            <p>These Legal Terms, together with our <button onClick={() => go("privacy")} className={linkClass}>Privacy Policy</button> and any applicable booking, package, or service-specific terms expressly incorporated into them, constitute the agreement between you and Dandurgu concerning your use of the Services.</p><p>If any provision of these Legal Terms is determined to be unlawful, invalid, or unenforceable, that provision will be modified or severed to the minimum extent necessary, and the remaining provisions will continue in effect.</p><p>Dandurgu's failure to enforce any provision of these Legal Terms does not constitute a waiver of that provision or any other right.</p><p>Nothing in these Legal Terms creates a partnership, joint venture, employment relationship, fiduciary relationship, or agency relationship between you and Dandurgu unless expressly agreed otherwise.</p><p>Dandurgu may assign or transfer its rights and obligations under these Legal Terms where permitted by applicable law.</p><p>Dandurgu will not be responsible for delay or failure to perform caused by circumstances beyond its reasonable control.</p><p>These Legal Terms are intended to operate to the fullest extent permitted by applicable law.</p>
          </Section>

          <Section id="contact" title="24. CONTACT US">
            <p>If you have a question, complaint, or request concerning these Legal Terms or the Services, please contact:</p>
            <div className="border-l-2 border-[var(--color-brand-blue)] pl-5 space-y-1">
              <p><strong>Dandurgu Air Travel and Tours Ltd</strong></p>
              <p><strong>Address:</strong> Satatima Plaza, Miller Road, Bompai Rd, Nassarawa, Kano, Nigeria</p>
              <p><strong>Phone:</strong> <a href="tel:+2349030878676" className={linkClass}>0903-087-8676</a> / <a href="tel:+2348037866633" className={linkClass}>0803-786-6633</a></p>
              <p><strong>Email:</strong> <a href="mailto:dandurguairtravels@gmail.com" className={linkClass}>dandurguairtravels@gmail.com</a></p>
              <p><strong>Website:</strong> <a href="https://dandurgu.l.cd" target="_blank" rel="noopener noreferrer" className={linkClass}>dandurgu.l.cd</a></p>
            </div>
          </Section>

          <div className="border-t border-[var(--color-border)] pt-8 mt-16 text-sm text-[var(--color-muted)]">
            <p><strong>Dandurgu Air Travel and Tours Ltd</strong></p>
            <p>Terms and Conditions of Service</p>
            <p>Last updated: September 17, 2026</p>
            <p className="mt-5"><button onClick={() => go("home")} className={linkClass}>Return to Dandurgu</button></p>
          </div>
        </div>
      </div>
    </div>
  );
}
