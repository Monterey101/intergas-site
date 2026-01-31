import { PageTitle } from "../../components/pagetitle"
import { Button } from "../../components/button"

export default function PrivacyPage() {
    return (
        <main className="">
            <PageTitle title="Privacy Policy" />
            <div className="grid grid-cols-1 xl:grid-cols-2">
                {/* <img src="/sydney.jpg" /> */}
                <div className="p-5 sm:p-10 text-lg">
                    <p className="text-gray-500">Last updated: 27 October 2025</p>
                    <br />
                    <div className="h-[1px] w-full bg-black" />
                    <br />
                    <p className="text-xl font-semibold">1. Introduction</p>
                    <br />
                    <p>Intergas Pty Ltd (“Intergas”, “we”, “our”, or “us”) values and respects the privacy of every individual who visits our website or engages with us through our contact channels. This Privacy Policy outlines how we collect, use, maintain, and safeguard the information you provide through our website’s contact form, as well as through any associated digital or offline communications. By submitting your details, you consent to the handling of your personal information in accordance with this Privacy Policy.</p>
                    <br />
                    <p className="text-xl font-semibold">2. Information We Collect</p>
                    <br />
                    <p>When you complete the contact form on our website, we collect the following information: your full name, company name, industry, email address, phone number, and any message or inquiry you provide. This information allows us to respond effectively to your query, assess the nature of your business interest, and maintain appropriate communication for business or service-related purposes. In addition to this direct information, our website may collect non-personally identifiable information such as browser type, operating system, referral source, time spent on pages, and IP address. This technical data is used exclusively to enhance the functionality, performance, and security of our website environment.</p>
                    <br />
                    <p className="text-xl font-semibold">3. Use of Collected Information</p>
                    <br />
                    <p>The information you provide is used primarily for communication, verification, and customer engagement purposes. Intergas may use this data to respond to inquiries, deliver requested information about our products or services, evaluate partnership opportunities, and maintain accurate business records. We may also use the data to enhance user experience, improve our communication standards, and ensure compliance with applicable industry and regulatory requirements. Intergas does not sell, rent, or exchange personal data for marketing or commercial gain. Any disclosure of data is limited strictly to operational, legal, or regulatory purposes, and only to authorized personnel or trusted third-party partners operating under confidentiality agreements.</p>
                    <br />
                    <p className="text-xl font-semibold">4. Data Retention and Security</p>
                    <br />
                    <p>Intergas implements rigorous administrative, physical, and technical safeguards designed to protect your personal information against unauthorized access, disclosure, alteration, or destruction. While we employ secure servers and encryption standards appropriate to our operational scale, no method of transmission or storage can be guaranteed as entirely secure. Nevertheless, Intergas exercises due diligence and applies best-practice security measures across its digital systems.  Information collected via our website may be stored for as long as necessary to fulfill the purpose for which it was collected or as required by applicable law, contractual obligations, or internal policy. Upon expiration of such need, data may be securely archived or permanently deleted.</p>
                    <br />
                    <p className="text-xl font-semibold">5. Disclosure to Third Parties</p>
                    <br />
                    <p>Intergas may disclose your information to affiliated entities, service providers, and legal or regulatory authorities when reasonably necessary for legitimate business functions. Examples include IT infrastructure providers, website maintenance teams, or advisors bound by confidentiality obligations. Intergas does not disclose personal information to unrelated third parties except where legally required or explicitly authorized by you.</p>
                    <br />
                    <p className="text-xl font-semibold">6. International Data Handling</p>
                    <br />
                    <p>As Intergas operates in the global energy market, certain data may be processed or accessed across different jurisdictions. All such activities are performed in compliance with relevant privacy laws and in accordance with our internal governance standards to ensure continued protection and lawful use of your information.</p>
                    <br />
                    <p className="text-xl font-semibold">7. Your Rights</p>
                    <br />
                    <p>You may request access to, correction of, or deletion of your personal information held by Intergas by contacting us through the designated channels provided on our website. Intergas will respond within a reasonable time frame and in compliance with applicable privacy legislation.</p>
                    <br />
                    <p className="text-xl font-semibold">8. Updates to this Policy</p>
                    <br />
                    <p>Intergas reserves the right to modify or update this Privacy Policy from time to time to reflect operational, legal, or regulatory changes. The most current version will always be available on our website and will supersede all prior versions.</p>
                    <br />
                    <a href="/contact"><Button label="Contact" type="light"/></a>
                </div>
                <img className="hidden lg:block" src="/light-blue-pattern.jpg" />
            </div>
        </main>
    )
}