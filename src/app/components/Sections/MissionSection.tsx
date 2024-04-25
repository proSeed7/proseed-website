import { useTranslations } from 'next-intl';
import {unstable_setRequestLocale} from "next-intl/server";
import Image from 'next/image';

import ScrollToNextSection from "@/app/components/ScrollToNextSection";

import SharedGoals from '../../../../public/SectionImages/shared-goals.svg'

interface MissionSectionProps {
    locale: string;
}
export default function MissionSection({ locale }: MissionSectionProps) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('MissionSection');

    return (
        <section id="missionSection" className={'container w-full'}>
            <div className="relative h-full w-full flex flex-col items-center justify-center pb-40">
                <div className="grid md:grid-cols-2 items-center gap-8">
                    <div className="flex flex-col gap-8 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl text-accent-green font-extrabold tracking-tight">
                            {t('title')}
                        </h2>
                        <p className="text-xl font-extrabold tracking-tight">
                            {t('text')}
                        </p>
                    </div>
                    <Image alt={'Mission Section Image'} src={SharedGoals}/>
                </div>
                <ScrollToNextSection className={'absolute bottom-0'} sectionId={'howSection'}/>
            </div>
        </section>
    );
}