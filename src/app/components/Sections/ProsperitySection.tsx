import { useTranslations } from 'next-intl';
import {unstable_setRequestLocale} from "next-intl/server";

interface ProsperitySectionProps {
    locale: string;
}

export default function ProsperitySection({ locale }: ProsperitySectionProps) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('ProsperitySection');

    return (
        <section id="prosperitySection" className={'container w-full py-8'}>
            <p>WIRD ERST IM HERBST DEPLOYT</p>
            {/*Add a comment to trigger a diployment*/}
            <h2>{t('title')}</h2>
            <p>{t('text')}</p>
        </section>
    );
}
