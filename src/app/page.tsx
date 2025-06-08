import Link from "next/link";
import {Button} from "@/components/ui/button";
import {TypingAnimation} from "@/components/magicui/typing-animation";
import BlurText from "@/components/ui/blur-text";
import CircularText from "@/components/ui/circular-text";


export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section
                className="relative h-[calc(100vh-4rem)] overflow-hidden"
            >

                <div className="fixed right-8 bottom-16 space-y-4">
                    <CircularText
                        text="POWERED*BY*AI*"
                        onHover="speedUp"
                        spinDuration={20}
                    />
                </div>
                {/* Square image behind content */}
                {/*<img*/}
                {/*    src="/path/to/your-image.jpg"*/}
                {/*    alt=""*/}
                {/*    className="absolute right-8 bottom-8 w-64 h-64 object-cover opacity-80 -z-10"*/}
                {/*/>*/}

                {/* Text + Button at bottom-left */}
                <div className="absolute left-8 bottom-16 space-y-4">
                    <h1>
                        <BlurText
                            text="ROPAgen"
                            delay={50}
                            animateBy="letters"
                            direction="top"
                            className="text-8xl"
                        />
                    </h1>

                    <div className="text-4xl">
                        Create your GDPR-compliant ROPA files with ease.<br/>
                        <TypingAnimation delay={1000} startOnView={true}>Powered by AI.</TypingAnimation>
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
