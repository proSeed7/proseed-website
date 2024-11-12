import {useTranslations} from 'next-intl';

import ThemeSwitch from "@/app/components/ThemeSwitch";
import LocaleSwitcher from './LocaleSwitcher';
import Logo from "@/app/components/Logo";
import HeaderLogic from "@/app/components/HeaderLogic";
export default function Header() {
    const t = useTranslations('Navigation');
    const translations = {
        why: t('why'),
        mission: t('mission'),
        how: t('how'),
        what: t('what'),
        /*prosperity: t('prosperity'),*/
        contact: t('contact'),
        career: t('career')
    };

    return (
        <header className={'z-10 container bg-default w-full h-header-height flex justify-between py-4 sticky top-0'}>
            <div className={'flex items-center w-full gap-2 md:gap-8'}>
                <div role="banner" className="title order-1">
                    <Logo className={'w-20 h-20'}/>
                </div>
                <HeaderLogic translations={translations} />
                <LocaleSwitcher/>
                <ThemeSwitch className={''}/>
            </div>
        </header>
    );
}