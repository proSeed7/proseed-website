import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from "next-intl/server";

import StageLogo from "@/app/components/StageLogo";
import StageTypewriter from "@/app/components/StageTypewriter";
import ScrollToNextSection from "@/app/components/ScrollToNextSection";

interface StageSectionProps {
    locale: string;
}

export default function StageSection({ locale }: StageSectionProps) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('StageSection');

    const typewriterWords = [];

    for (let i = 1; i <= 12; i++) {
        typewriterWords.push(t(`typewriter.${i}`));
    }
    return (
        <section id="stageSection" className="container w-full h-full">
            <div className="relative h-full max-w-2xl mx-auto flex flex-col gap-12 items-center justify-center pt-40 sm:pt-0 pb-40">
                <StageLogo className={''}/>
                {/*<h1 className="text-3xl md:text-6xl font-extrabold leading-none tracking-tight">{t('title')}</h1>*/}
                <div className="text-3xl md:text-6xl font-semibold text-accent-green leading-none tracking-tight">
                    <StageTypewriter typewriterWords={typewriterWords}/>
                </div>
                <ScrollToNextSection className={'absolute bottom-0'} sectionId={'missionSection'} />
            </div>
        </section>
    );
}
