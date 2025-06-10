import {Button} from "@/components/ui/button";
import {TypingAnimation} from "@/components/magicui/typing-animation";
import BlurText from "@/components/ui/blur-text";
import CircularText from "@/components/ui/circular-text";
import MovingBanner from "@/components/ui/moving-banner";
import SpotlightCard from '@/components/ui/spotlight-card';
import {CardHeader, CardContent} from "@/components/ui/card";
import { BrainCircuit } from 'lucide-react';
import { Landmark } from 'lucide-react';
import { UserCheck } from 'lucide-react';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';


export default function Home() {
    const t = useTranslations('Home');

    return (
        <>
            {/* Hero Section */}
            <section
                className="h-[calc(100vh-6rem)] container overflow-hidden md:flex md:flex-col md:justify-center md:items-start md:pb-10"
            >

                <div className="fixed right-8 bottom-8 z-50">
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
                <div className="">
                    <h1>
                        <BlurText
                            text="ROPAgen"
                            delay={50}
                            animateBy="letters"
                            direction="top"
                            className="text-4xl md:text-8xl"
                        />
                    </h1>

                    <div className="text-2xl md:text-4xl">
                        {t("title")}<br/>
                        <TypingAnimation delay={1000} startOnView={true}>Powered by AI.</TypingAnimation>
                    </div>
                    <Button>
                        <Link href="/generate">
                            {t("generateButton")}
                        </Link>
                    </Button>
                </div>
            </section>

            <div className="-mx-2 md:-mx-4 w-screen ">
                <MovingBanner />
            </div>

            <section className="py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(102, 102, 255, 0.2)">
        <CardHeader className="p-6 pb-0 flex items-center">
            <BrainCircuit className="mr-2 size-14" />
            <h1 className="text-2xl">{t("cardTitle1")}</h1>
        </CardHeader>
        <CardContent className="p-6">
            {t("cardContent1")}
        </CardContent>
    </SpotlightCard>
    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(102, 102, 255, 0.2)">
        <CardHeader className="p-6 pb-0 flex items-center">
            <Landmark className="mr-2 size-14" />
            <h1 className="text-2xl">{t("cardTitle2")}</h1>
        </CardHeader>
        <CardContent className="p-6">
            {t("cardContent2")}
        </CardContent>
    </SpotlightCard>
    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(102, 102, 255, 0.2)">
        <CardHeader className="p-6 pb-0 flex items-center">
            <UserCheck className="mr-2 size-14" />
            <h1 className="text-2xl">{t("cardTitle3")}</h1>
        </CardHeader>
        <CardContent className="p-6">
            {t("cardContent3")}
        </CardContent>
    </SpotlightCard>
</section>


            {/* …rest of your normal page sections… */}
        </>
    )
}
