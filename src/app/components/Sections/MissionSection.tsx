import { useTranslations } from 'next-intl';
import {unstable_setRequestLocale} from "next-intl/server";
interface MissionSectionProps {
    locale: string;
}
export default function MissionSection({ locale }: MissionSectionProps) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('MissionSection');

    return (
        <section id="missionSection" className={'container w-full py-8'}>
            <h2>{t('title')}</h2>
            <p>{t('text')}</p>
        </section>
    );
}