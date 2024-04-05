import ThemeSwitch from "@/app/components/ThemeSwitch";
import LocaleSwitcher from './LocaleSwitcher';
import Logo from "@/app/components/Logo";
import { Twirl as Hamburger } from 'hamburger-react';
import HamburgerMenu from "@/app/components/HamburgerMenu";

export default function Header() {
    return (
        <header className={'container bg-default w-full flex justify-between py-4 sticky top-0'}>
            <div className={'flex items-center gap-8'}>
                <div role="banner" className="title">
                    <Logo />
                </div>
                <nav className={'hidden md:block'} aria-label="Proceed Navigation">
                    <menu className="flex gap-4"
                        role="menubar"
                        aria-label="Mythical University">
                        <li role="none">
                            <a role="menuitem" href="#home">
                                Home
                            </a>
                        </li>
                        <li role="none">
                            <a role="menuitem"
                               aria-haspopup="true"
                               aria-expanded="false"
                               href="#about">
                                Menüpunk 1
                            </a>
                        </li>
                        <li role="none">
                            <a role="menuitem"
                               aria-haspopup="true"
                               aria-expanded="false"
                               href="#admissions">
                                Menüpunk 2
                            </a>
                        </li>
                        <li role="none">
                            <a role="menuitem"
                               aria-haspopup="true"
                               aria-expanded="false"
                               href="#academics">
                                Menüpunk 3
                            </a>
                        </li>
                    </menu>
                </nav>
            </div>
            <div className="switches flex items-center gap-4">
                <LocaleSwitcher />
                <ThemeSwitch />
                <HamburgerMenu />
            </div>
        </header>
    );
}