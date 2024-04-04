import { useTranslations } from 'next-intl';
import {unstable_setRequestLocale} from "next-intl/server";

interface ContactSectionProps {
    locale: string;
}

export default function ContactSection({ locale }: ContactSectionProps) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('ContactSection');

    return (
        <section className={'container w-full py-8'}>
            <h2>{t('title')}</h2>
            <p>{t('text')}</p>
        </section>
    );
}
