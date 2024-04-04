import { useTranslations } from 'next-intl';
import {unstable_setRequestLocale} from "next-intl/server";

interface CarrierSectionProps {
    locale: string;
}

export default function CarrierSection({ locale }: CarrierSectionProps) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('CarrierSection');

    return (
        <section className={'container w-full py-8'}>
            <h2>{t('title')}</h2>
            <p>{t('text')}</p>
        </section>
    );
}
