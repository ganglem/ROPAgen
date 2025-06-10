import {Textarea} from "@/components/ui/textarea";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {ShineBorder} from "@/components/ui/shine-border";
import {useTranslations} from "next-intl";

export default function RopaPreview({generatedDocument, setGeneratedDocument}: { generatedDocument: string, setGeneratedDocument: (doc: string) => void }) {

    const t = useTranslations('Preview');


    return (
        <Card className="relative overflow-hidden w-full mt-8 relative">
            <ShineBorder shineColor={["#7440ff", "#ffc200"]} />
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>{t("generatedDocument")}</CardTitle>
            </CardHeader>
            <CardContent>
                <Textarea
                    className="max-h-[500px] min-h-[200px]"
                    defaultValue={generatedDocument}
                    onChange={e => setGeneratedDocument(e.target.value)}
                />
            </CardContent>
        </Card>
    )
}