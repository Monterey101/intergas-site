import { PageTitle } from "../components/pagetitle"
import { Button } from "../components/button"

export default function CareersPage() {
    return (
        <main className="min-h-screen">
            <PageTitle title="Careers" />
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                {/* <img src="/sydney.jpg" /> */}
                <div className="p-5 sm:p-10 text-lg">
                    <p>There are currently 0 job opennings.</p>
                    <br />
                    <p>If you are still interested in working at Intergas, please use our contact form to get in touch.</p>
                    <br />
                    <a href="/contact"><Button label="Contact" type="light"/></a>
                </div>
            </div>
        </main>
    )
}