'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

import LogoDarkHeader from '../../../public/proseed_logo.svg';
import LogoLightHeader from '../../../public/proseed_logo-light.svg';

import LogoDarkStage from '../../../public/proseed_logo_stage.svg';
import LogoLightStage from '../../../public/proseed_logo_stage-light.svg';

export default function Logo({ className, hasText = false }: { className?: string, hasText?: boolean }) {
    const { theme } = useTheme();
    const [logo, setLogo] = useState<string>(LogoDarkHeader);

    // Function to get the theme from the html class
    const getHtmlClassTheme = () => {
        const htmlElement = document.documentElement;

        if (htmlElement.classList.contains('dark')) {
            return 'dark';
        } else if (htmlElement.classList.contains('light')) {
            return 'light';
        }
        return null;  // Fallback if no 'dark' or 'light' class is found
    };

    useEffect(() => {
        let darkLogo = LogoDarkHeader;
        let lightLogo = LogoLightHeader;

        if (hasText) {
            darkLogo = LogoDarkStage;
            lightLogo = LogoLightStage;
        }

        const resolveLogo = () => {
            // Check if the theme is neither 'dark' nor 'light' then use HTML class to determine the logo
            if (theme === 'dark' || (theme === 'system' && getHtmlClassTheme() === 'dark')) {
                setLogo(lightLogo);
            } else if (theme === 'light' || (theme === 'system' && getHtmlClassTheme() === 'light')) {
                setLogo(darkLogo);
            } else {
                // If theme is undefined or system without a specific class, default to checking HTML class
                setLogo(getHtmlClassTheme() === 'dark' ? lightLogo : darkLogo);
            }
        };

        resolveLogo();
    }, [hasText, theme]);

    return (
        <Link href="/" passHref>
            <Image
                className={className}
                src={logo}
                alt="Proseed Logo"
                unoptimized={true}
            />
        </Link>
    );
}
