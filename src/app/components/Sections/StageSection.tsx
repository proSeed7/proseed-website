import { useTranslations } from 'next-intl';
import {unstable_setRequestLocale} from "next-intl/server";

interface StageSectionProps {
    locale: string;
}

export default function StageSection({ locale }: StageSectionProps) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('StageSection');

    return (
        <section id="stageSection" className={'container w-full py-8'}>

            <h1>{t('title')}</h1>
        </section>
    );
}
