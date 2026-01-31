import { PageTitle } from "../../components/pagetitle"
import { Button } from "../../components/button"

export default function TermsPage() {
    return (
        <main className="">
            <PageTitle title="Terms of Use" />
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* <img src="/sydney.jpg" /> */}
                <div className="p-5 sm:p-10 text-lg">
                    <p className="text-gray-500">Last updated: 17 November 2025</p>
                    <br />
                    <div className="h-[1px] w-full bg-black" />
                    <br />
                    <p className="text-xl font-semibold">1. Acceptance of Terms</p>
                    <br />
                    <p>By accessing or using the Intergas website and its associated contact forms, you agree to be bound by these Terms of Service. These Terms govern your access to and use of the site and all communications facilitated through it. If you do not agree to these Terms, you must refrain from using our website and services.</p>
                    <br />
                    <p className="text-xl font-semibold">2. Scope of Service</p>
                    <br />
                    <p>The Intergas website serves as an informational platform providing insight into our operations, business focus, and communication channel for potential clients, partners, and industry stakeholders. Submission of information through the website does not constitute a binding offer, commercial agreement, or partnership, and Intergas reserves the right to accept, reject, or ignore submissions at its discretion.</p>
                    <br />
                    <p className="text-xl font-semibold">3. Intellectual Property Rights</p>
                    <br />
                    <p>All content, branding, logos, text, graphics, and related materials displayed on this website are the exclusive property of Intergas Pty Ltd or its affiliates, unless otherwise stated. You may not copy, reproduce, distribute, modify, or republish any content from this website without prior written consent from Intergas.</p>
                    <br />
                    <p className="text-xl font-semibold">4. Limitation of Liability</p>
                    <br />
                    <p>Intergas strives to maintain accurate and up-to-date information on its website; however, we make no representations or warranties regarding the completeness, reliability, or suitability of such content for any particular purpose. Under no circumstances shall Intergas, its directors, employees, or affiliates be held liable for any direct, indirect, incidental, or consequential damages arising from the use of or inability to use this website.</p>
                    <br />
                    <p className="text-xl font-semibold">5. User Responsibilities</p>
                    <br />
                    <p>By submitting information through our contact form, you warrant that all provided data is accurate, complete, and truthful. You further agree not to submit false, misleading, or malicious content and to use the website only for legitimate business communications and inquiries.</p>
                    <br />
                    <p className="text-xl font-semibold">6. Third-Party Links</p>
                    <br />
                    <p>Our website may include links to third-party websites or resources that are not owned or controlled by Intergas. Intergas assumes no responsibility for the content, policies, or practices of such external entities and provides such links solely for informational purposes.</p>
                    <br />
                    <p className="text-xl font-semibold">7. Indemnification</p>
                    <br />
                    <p>You agree to indemnify and hold harmless Intergas, its officers, directors, employees, and agents from and against any claims, liabilities, damages, or expenses (including reasonable legal fees) arising from your use of the website, your breach of these Terms, or any violation of applicable laws or third-party rights.</p>
                    <br />
                    <p className="text-xl font-semibold">8. Governing Law and Jurisdiction</p>
                    <br />
                    <p>These Terms of Service and any disputes arising from or related to them shall be governed by and construed in accordance with the laws of New South Wales, Australia. Any disputes shall be subject to the exclusive jurisdiction of the courts of New South Wales.</p>
                    <br />
                    <p className="text-xl font-semibold">9. Amendments</p>
                    <br />
                    <p>Intergas reserves the right to modify these Terms at any time without prior notice. Continued use of this website following such amendments constitutes your acceptance of the revised Terms.</p>
                    <br />
                    <p className="text-xl font-semibold">10. Contact Information</p>
                    <br />
                    <p>For questions regarding this Privacy Policy or Terms of Service, please contact Intergas through our website’s contact form or via email at contact@intergas.com.au. We will make every effort to respond to inquiries in a timely and professional manner.</p>
                    <br />
                    <a href="/contact"><Button label="Contact" type="light"/></a>
                </div>
                <img className="hidden lg:block" src="/light-green-pattern.jpg" />
            </div>
        </main>
    )
}