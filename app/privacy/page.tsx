import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function PrivacyPage() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main className='flex-1 flex w-full items-start justify-center bg-background px-4 py-12 sm:px-6 lg:px-8 mt-16'>
        <Card className='w-full max-w-4xl'>
          <CardHeader className='text-center'>
            <CardTitle className='text-3xl font-bold'>Privacy Policy</CardTitle>
            <CardDescription>Last Updated: January 3, 2025 | Effective Date: January 3, 2025</CardDescription>
          </CardHeader>
          <CardContent>
            <article className='prose prose-gray dark:prose-invert max-w-none'>
              <p>
                Welcome to Jurifica! This Privacy Policy describes how &ldquo;Jurifica Global LLC&rdquo;
                (&ldquo;Jurifica,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, shares, and protects your personal
                information when you access or use our website, platform, AI-powered document
                generation tools, and related services (collectively, the &ldquo;Services&rdquo;).
              </p>
              
              <p>
                We are committed to protecting your privacy and handling your data in an open and
                transparent manner. Please read this Privacy Policy carefully to understand our
                practices regarding your information and how we will treat it. By using our Services,
                you agree to the collection and use of information in accordance with this policy.
              </p>

              <h2>1. Information We Collect</h2>
              <p>
                We collect several different types of information for various purposes to provide and
                improve our Services to you.
              </p>

              <h3>A. Information You Provide Directly:</h3>
              <ul>
                <li>
                  <strong>Account Information:</strong> When you create an account, we collect
                  information such as your name (if provided), email address, and password.
                </li>
                <li>
                  <strong>Document Input Data:</strong> When you use our AI document generation
                  features, you provide specific information and variables required to draft the
                  document (e.g., company name, website URL, details about your business practices,
                  party names for contracts). This may include personal information depending on the
                  nature of the document you are creating.
                </li>
                <li>
                  <strong>Payment Information:</strong> If you subscribe to our paid Services (e.g.,
                  Pro or Enterprise tiers), we (or our third-party payment processor, e.g., Stripe)
                  will collect payment information, such as your credit card details or other billing
                  information. Jurifica itself typically does not directly store full credit card
                  numbers.
                </li>
                <li>
                  <strong>Communications:</strong> If you contact us directly (e.g., for customer
                  support, feedback), we may receive additional information about you such as your
                  name, email address, phone number, the contents of the message and/or attachments
                  you may send us, and any other information you may choose to provide.
                </li>
                <li>
                  <strong>Survey Responses & Feedback:</strong> Information you provide when
                  participating in surveys, beta testing, or providing feedback on our Services.
                </li>
              </ul>

              <h3>B. Information We Collect Automatically When You Use Our Services:</h3>
              <ul>
                <li>
                  <strong>Log Data:</strong> Like most websites and technology services delivered over
                  the Internet, our servers automatically collect information when you access or use
                  our Services and record it in log files. This log data may include your Internet
                  Protocol (IP) address, browser type and settings, the date and time of your request,
                  information about your browser configuration and plugins, language preferences, and
                  cookie data.
                </li>
                <li>
                  <strong>Usage Data:</strong> We collect information about how you use our Services,
                  such as the features you use, the documents you generate (metadata, not necessarily
                  the full content unless required for service provision or analysis with consent),
                  the actions you take, the time, frequency, and duration of your activities.
                </li>
                <li>
                  <strong>Device Information:</strong> We may collect information about the device you
                  are using to access our Services, including type of device, operating system, device
                  settings, application IDs, unique device identifiers, and crash data.
                </li>
                <li>
                  <strong>Cookies and Similar Tracking Technologies:</strong> We use cookies and
                  similar tracking technologies (e.g., web beacons, pixels) to track activity on our
                  Services and hold certain information. Cookies are files with a small amount of data
                  which may include an anonymous unique identifier. You can instruct your browser to
                  refuse all cookies or to indicate when a cookie is being sent. However, if you do
                  not accept cookies, you may not be able to use some portions of our Services.
                </li>
              </ul>

              <h3>C. Information We Receive from Third Parties:</h3>
              <ul>
                <li>
                  <strong>Third-Party Services:</strong> If you choose to link our Services to a
                  third-party account (e.g., login with Google, or integrate with a service like
                  DocuSign in the future), we may receive information about you from that third party,
                  but only if you have authorized the third party to share such information with us.
                </li>
                <li>
                  <strong>Payment Processors:</strong> Our payment processors may provide us with
                  limited information about your payment, such as a transaction ID or partial card
                  number, for verification and record-keeping.
                </li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect for various purposes, including:</p>

              <h3>To Provide, Operate, and Maintain our Services:</h3>
              <ul>
                <li>To create and manage your account.</li>
                <li>To enable you to generate, store, and manage documents.</li>
                <li>To process your inputs and use our AI engine to draft documents as requested.</li>
                <li>
                  To process transactions and send you related information, including purchase
                  confirmations and invoices (for paid tiers).
                </li>
              </ul>

              <h3>To Improve, Personalize, and Expand our Services:</h3>
              <ul>
                <li>
                  To understand and analyze how you use our Services to develop new products,
                  services, features, and functionality.
                </li>
                <li>To personalize your experience with our Services.</li>
                <li>
                  (With consent or on an aggregated/anonymized basis) To improve our AI models and the
                  quality of document generation.
                </li>
              </ul>

              <h3>To Communicate With You:</h3>
              <ul>
                <li>
                  To send you service-related communications, including technical notices, updates,
                  security alerts (e.g., via Arcjet), and support and administrative messages.
                </li>
                <li>
                  To respond to your comments, questions, and requests, and provide customer service
                  and support.
                </li>
                <li>
                  To send you promotional communications (e.g., newsletters, special offers) if you
                  have opted in. You can opt-out of receiving these communications at any time.
                </li>
              </ul>

              <h3>For Security and Fraud Prevention:</h3>
              <ul>
                <li>
                  To monitor and analyze trends, usage, and activities in connection with our Services
                  for security purposes, to prevent fraud, and to protect our rights and the rights of
                  others.
                </li>
              </ul>

              <h3>For Legal Compliance:</h3>
              <ul>
                <li>
                  To comply with applicable laws, legal processes, or regulations, and to enforce our
                  Terms of Service.
                </li>
              </ul>

              <h3>For Other Purposes:</h3>
              <ul>
                <li>
                  For any other purpose for which the information was collected or with your consent.
                </li>
              </ul>

              <h2>3. How We Share Your Information</h2>
              <p>
                We do not sell your personal information. We may share your personal information in
                the following circumstances:
              </p>
              <ul>
                <li>
                  <strong>With Service Providers:</strong> We may share your information with
                  third-party vendors, consultants, and other service providers who perform services
                  on our behalf or help us operate our Services (e.g., cloud hosting providers like
                  Supabase, AI API providers like Google Gemini, payment processors like Stripe, email
                  delivery services, analytics providers like Sentry, security services like Arcjet).
                  These service providers are authorized to use your personal information only as
                  necessary to provide these services to us and are obligated to protect your
                  information.
                </li>
                <li>
                  <strong>To Power AI Features:</strong> The specific input data you provide for
                  document generation will be processed by our AI engine (Google Gemini) to produce
                  the requested document. Google,&apos;s use of this data is subject to their terms and
                  privacy policies. We strive to use AI providers committed to data security and
                  responsible AI practices.
                </li>
                <li>
                  <strong>For Legal Reasons:</strong> We may disclose your information if required to
                  do so by law or in the good faith belief that such action is necessary to: (a)
                  comply with a legal obligation or governmental request; (b) protect and defend the
                  rights or property of Jurifica; (c) prevent or investigate possible wrongdoing in
                  connection with the Services; (d) protect the personal safety of users of the
                  Services or the public; or (e) protect against legal liability.
                </li>
                <li>
                  <strong>Business Transfers:</strong> If Jurifica is involved in a merger,
                  acquisition, financing due diligence, reorganization, bankruptcy, receivership, sale
                  of company assets, or transition of service to another provider, your information
                  may be sold or transferred as part of such a transaction as permitted by law and/or
                  contract.
                </li>
                <li>
                  <strong>With Your Consent:</strong> We may share your information with third parties
                  when we have your explicit consent to do so.
                </li>
                <li>
                  <strong>Aggregated or Anonymized Data:</strong> We may share aggregated or
                  anonymized information that does not directly identify you with third parties for
                  research, marketing, analytics, or other purposes.
                </li>
              </ul>

              <h2>4. Data Storage, Security, and Retention</h2>
              
              <h3>Data Storage and Processing</h3>
              <p>
                Your information, including personal data, may be stored and processed in any country
                where we or our service providers maintain facilities. By using our Services, you
                consent to the transfer of information to countries outside of your country of
                residence, including the United States, which may have different data protection rules
                than those of your country. We will take appropriate safeguards to protect your
                personal data in accordance with this Privacy Policy and applicable law.
              </p>

              <h3>Data Security</h3>
              <p>
                We implement appropriate technical and organizational security measures designed to
                protect the security of any personal information we process. We leverage Supabase,&apos;s
                built-in security features for database and storage, and tools like Arcjet for
                application-level security. However, please also remember that no method of
                transmission over the Internet, or method of electronic storage, is 100% secure. While
                we strive to use commercially acceptable means to protect your personal information,
                we cannot guarantee its absolute security.
              </p>

              <h3>Data Retention</h3>
              <p>
                We will retain your personal information only for as long as is necessary for the
                purposes set out in this Privacy Policy, to provide you with the Services, to comply
                with our legal obligations (e.g., if we are required to retain your data to comply
                with applicable laws), resolve disputes, and enforce our legal agreements and
                policies. Document content you generate and store on our platform will be retained as
                long as your account is active and subject to your tier,&apos;s storage limitations, or
                until you delete it. We may retain certain usage data and anonymized/aggregated data
                for longer periods for internal analysis purposes.
              </p>

              <h2>5. Your Data Protection Rights</h2>
              <p>
                Depending on your location and applicable data protection laws, you may have certain
                rights regarding your personal information. These may include:
              </p>
              <ul>
                <li>
                  <strong>The right to access:</strong> You have the right to request copies of your
                  personal information.
                </li>
                <li>
                  <strong>The right to rectification:</strong> You have the right to request that we
                  correct any information you believe is inaccurate or complete information you
                  believe is incomplete.
                </li>
                <li>
                  <strong>The right to erasure (right to be forgotten):</strong>
                  You have the right to request that we erase your personal information, under certain
                  conditions.
                </li>
                <li>
                  <strong>The right to restrict processing:</strong> You have the right to request
                  that we restrict the processing of your personal information, under certain
                  conditions.
                </li>
                <li>
                  <strong>The right to object to processing:</strong> You have the right to object to
                  our processing of your personal information, under certain conditions.
                </li>
                <li>
                  <strong>The right to data portability:</strong> You have the right to request that
                  we transfer the data that we have collected to another organization, or directly to
                  you, under certain conditions.
                </li>
                <li>
                  <strong>The right to withdraw consent:</strong> If we are relying on your consent to
                  process your personal information, you have the right to withdraw your consent at
                  any time.
                </li>
              </ul>
              <p>
                To exercise these rights, please contact us using the contact details provided below.
                We will respond to your request in accordance with applicable data protection laws. We
                may need to verify your identity before processing your request.
              </p>

              <h3>Specific Jurisdictional Rights (e.g., GDPR, CCPA/CPRA, PIPL)</h3>
              <ul>
                <li>
                  <strong>For users in the European Economic Area (EEA), UK, or Switzerland (GDPR/UK GDPR):</strong>
                  If you are a resident of these regions, you have specific rights under GDPR. Our
                  legal basis for collecting and using the personal information described in this
                  Privacy Policy will depend on the personal information concerned and the specific
                  context in which we collect it. We will normally collect personal information from
                  you only where we have your consent to do so, where we need the personal information
                  to perform a contract with you, or where the processing is in our legitimate
                  interests and not overridden by your data protection interests or fundamental rights
                  and freedoms.
                </li>
                <li>
                  <strong>For users in California (CCPA/CPRA):</strong>
                  California residents have specific rights regarding their personal information under
                  the CCPA/CPRA, including the right to know, the right to delete, the right to
                  opt-out of sale/sharing (Jurifica currently states it does not sell personal
                  information), and the right to non-discrimination. We will provide further details
                  and mechanisms for California residents to exercise their rights as required.
                </li>
                <li>
                  <strong>For users in China (PIPL):</strong> Users in China have rights under PIPL
                  regarding their personal information, including consent requirements for processing
                  and cross-border transfer. We are committed to complying with PIPL for users in
                  China.
                </li>
              </ul>

              <h2>6. Children,&apos;s Privacy</h2>
              <p>
                Our Services are not intended for use by children under the age of 13 (or a higher age
                threshold as required by applicable local law, e.g., 16 in certain EU countries for
                GDPR consent). We do not knowingly collect personally identifiable information from
                children under this age. If you become aware that a child has provided us with
                personal information without parental consent, please contact us. If we become aware
                that we have collected personal information from a child without verification of
                parental consent, we will take steps to remove that information from our servers.
              </p>

              <h2>7. Links to Other Websites</h2>
              <p>
                Our Services may contain links to other websites that are not operated by us. If you
                click on a third-party link, you will be directed to that third party,&apos;s site. We
                strongly advise you to review the Privacy Policy of every site you visit. We have no
                control over and assume no responsibility for the content, privacy policies, or
                practices of any third-party sites or services.
              </p>

              <h2>8. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes
                by posting the new Privacy Policy on this page and updating the &ldquo;Last Updated,&ldquo; date at
                the top of this Privacy Policy. You are advised to review this Privacy Policy
                periodically for any changes. Changes to this Privacy Policy are effective when they
                are posted on this page. For material changes, we may provide more prominent notice
                (such as by adding a statement to our homepage or sending you a notification).
              </p>

              <h2>9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, your data protection rights, or
                our data practices, please contact us:
              </p>
              <address className='not-prose'>
                Jurifica Global LLC<br />
                Delaware, USA<br />
                <a href='mailto:hello@jurifica.com' className='text-primary hover:underline'>
                  hello@jurifica.com
                </a><br />
                <a
                  href='https://www.jurifica.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'
                >
                  www.jurifica.com
                </a>
              </address>
              <p className='mt-4'>
                For data protection purposes, Jurifica,&apos;s Data Protection Officer (or responsible
                individual) can be reached at the email above.
              </p>
            </article>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}