import {ReactNode} from "react";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "../styles/default.css";

import {Providers} from "./providers";

import {getTranslations, unstable_setRequestLocale} from "next-intl/server";
import {locales} from '@/config';

import Header from "../components/Header";
import Footer from "../components/Footer";
import UnderConstruction from "../components/UnderConstruction";
import ThemeSwitch from "../components/ThemeSwitch";
import StageLogo from "../components/StageLogo";

type Props = {
    children: ReactNode;
    params: { locale: string };
};

export function generateStaticParams() {
    return locales.map((locale) => ({locale}));
}

export async function generateMetadata({
                                           params: {locale}
                                       }: Omit<Props, 'children'>) {
    const t = await getTranslations({locale, namespace: 'LocaleLayout'});

    return {
        title: t('title'),
    };
}

export default async function LocaleLayout({
                                               children,
                                               params: {locale}
                                           }: Props) {
    // Enable static rendering
    unstable_setRequestLocale(locale);

    return (
        <html suppressHydrationWarning lang={locale}>
        <body className={''}>
        <Providers>
            <div className="relative text-xl w-full container mx-auto min-h-screen text-balance flex flex-col justify-center items-center">
                <ThemeSwitch className={'absolute top-4 left-4'}/>
                <div className="w-fit flex flex-col justify-center gap-6">
                    <StageLogo className={'max-w-[300px] mb-10'}/>
                    <p className={''}>Wir sind für Sie da. Unsere Website bekommt einen neuen Anstrich.</p>
                    <div className="flex flex-col space-y-1">
                        <span>Bis dahin:</span>
                        <a className={'w-fit relative hover:text-accent-green after:bg-accent-green after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'} href="mailto:info@proseed-consulting.com">info@proseed-consulting.com</a>
                        <a className={'w-fit relative hover:text-accent-green after:bg-accent-green after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'} href="tel:4915123259252">+49151 2325 9252</a>
                    </div>
                    <h1 className={'font-bold'}>Wir retten IT-Projekte vor dem Scheitern und sichern beständigen Erfolg!</h1>
                </div>
            </div>
            {/*<Header/>
            {children}*/}
        </Providers>
        </body>
        </html>
    );
}