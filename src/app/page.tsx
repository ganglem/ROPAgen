import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section
                className="relative h-[calc(100vh-4rem)] overflow-hidden"
            >
                {/* Square image behind content */}
                <img
                    src="/path/to/your-image.jpg"
                    alt="Decorative"
                    className="absolute right-8 bottom-8 w-64 h-64 object-cover opacity-80 -z-10"
                />

                {/* Text + Button at bottom-left */}
                <div className="absolute left-8 bottom-16 space-y-4">
                    <h1 className="text-8xl">
                        ROPAgen
                    </h1>
                    <div className="text-4xl">
                        Create your GDPR-compliant ROPA files with ease.<br/> Powered by AI.
                    </div>
                    <Button>
                        <Link href="/generate">
                            Generate now
                        </Link>
                    </Button>
                </div>
            </section>

            {/* …rest of your normal page sections… */}
        </>
    )
}
