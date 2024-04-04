import { useTranslations } from 'next-intl';
import {unstable_setRequestLocale} from "next-intl/server";

interface HowSectionProps {
    locale: string;
}

export default function HowSection({ locale }: HowSectionProps) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('HowSection');

    return (
        <section className={'container w-full py-8'}>
            <h2>{t('title')}</h2>
            <p>{t('text')}</p>
        </section>
    );
}
