import {ReactNode} from "react";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "../styles/default.css";

import {Providers} from "./providers";

import {getTranslations, unstable_setRequestLocale} from "next-intl/server";
import {locales} from '@/config';

import Header from "../components/Header";
import Footer from "../components/Footer";

type Props = {
    children: ReactNode;
    params: { locale: string };
};

const inter = Inter({subsets: ["latin"]});

export function generateStaticParams() {
    return locales.map((locale) => ({locale}));
}

export async function generateMetadata({
                                           params: {locale}
                                       }: Omit<Props, 'children'>) {
    const t = await getTranslations({locale, namespace: 'LocaleLayout'});

    return {
        title: t('title')
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
        <body className={inter.className}>
        <Providers>
            <Header/>
            {children}
            <Footer/>
        </Providers>
        </body>
        </html>
    );
}