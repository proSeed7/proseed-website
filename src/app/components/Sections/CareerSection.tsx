import { useTranslations } from 'next-intl';
import {unstable_setRequestLocale} from "next-intl/server";

interface CareerSectionProps {
    locale: string;
}

export default function CareerSection({ locale }: CareerSectionProps) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('CareerSection');

    return (
        <section id="careerSection" className={'container w-full py-8'}>
            <h2>{t('title')}</h2>
            <p>{t('text')}</p>
        </section>
    );
}
