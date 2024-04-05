import {useTranslations} from 'next-intl';

import ThemeSwitch from "@/app/components/ThemeSwitch";
import LocaleSwitcher from './LocaleSwitcher';
import Logo from "@/app/components/Logo";
import HamburgerMenu from "@/app/components/HamburgerMenu";

export default function Header() {
    const t = useTranslations('Navigation');

    return (
        <header className={'container bg-default w-full flex justify-between py-4 sticky top-0'}>
            <div className={'flex items-center gap-8'}>
                <div role="banner" className="title">
                    <Logo />
                </div>
                <nav className={'hidden md:block'} aria-label="Proceed Navigation">
                    <menu className="flex gap-4"
                        role="menubar"
                        aria-label="Proseed Navigation Menu">
                        <li role="none">
                            <a role="menuitem" href="#missionSection">
                                {t('mission')}
                            </a>
                        </li>
                        <li role="none">
                            <a role="menuitem" href="#howSection">
                                {t('how')}
                            </a>
                        </li>
                        <li role="none">
                            <a role="menuitem" href="#prosperitySection">
                                {t('prosperity')}
                            </a>
                        </li>
                        <li role="none">
                            <a role="menuitem" href="#contactSection">
                                {t('contact')}
                            </a>
                        </li>
                        <li role="none">
                            <a role="menuitem" href="#careerSection">
                                {t('career')}
                            </a>
                        </li>
                    </menu>
                </nav>
            </div>
            <div className="switches flex items-center gap-4">
                <LocaleSwitcher/>
                <ThemeSwitch />
                <HamburgerMenu />
            </div>
        </header>
    );
}