'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'
import Link from 'next/link';
import Image from 'next/image';

import LogoDark from '../../../public/proseed_logo_stage.svg';
import LogoLight from '../../../public/proseed_logo_stage-light.svg'

export default function StageLogo({className}) {
    const [logo, setLogo] = useState(LogoDark);
    const { theme} = useTheme();

    const getHtmlClassTheme = () => {
        const htmlElement = document.documentElement;

        if (htmlElement.classList.contains('dark')) {
            return 'dark';
        } else if (htmlElement.classList.contains('light')) {
            return 'light';
        }
        return null;
    };


    useEffect(() => {
        if (theme === 'dark') {
            setLogo(LogoLight);
        } else if (theme === 'light') {
            setLogo(LogoDark);
        } else {
            setLogo(getHtmlClassTheme() === 'dark'? LogoLight : LogoDark);
        }

    }, [theme]);

    return (
        <Image
            src={logo}
            alt="Proseed Logo"
            unoptimized={true}
            className={'w-52 sm:w-96 md:w-9/12 h-auto ' + className}
        />
    );
}
