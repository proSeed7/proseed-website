'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'
import Link from 'next/link';
import Image from 'next/image';

import LogoDark from '../../../public/proseed_logo_stage.svg';
import LogoLight from '../../../public/proseed_logo_stage-light.svg'

export default function StageLogo() {
    const [logo, setLogo] = useState(LogoDark);
    const { theme} = useTheme();

    useEffect(() => {
        if (theme === 'dark') {
            setLogo(LogoLight);
        } else {
            setLogo(LogoDark);
        }

    }, [theme]);

    return (
        <Image
            src={logo}
            alt="Proseed Logo"
            unoptimized={true}
            className={'w-96 md:w-9/12 h-auto'}
        />
    );
}
