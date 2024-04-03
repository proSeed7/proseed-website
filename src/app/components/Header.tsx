import ThemeSwitch from "@/app/components/ThemeSwitch";
import LocaleSwitcher from './LocaleSwitcher';

export default function Header() {
    return (
        <header className={'container w-full flex justify-between py-8'}>
            <div className={'flex gap-8'}>
                <div role="banner" className="title">
                    Proseed Logo
                </div>
                <nav aria-label="Proceed Navigation">
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
            <div className="switches flex gap-4">
                <ThemeSwitch />
                <LocaleSwitcher />
            </div>
        </header>
    );
}