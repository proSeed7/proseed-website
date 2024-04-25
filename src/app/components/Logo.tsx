'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'
import Link from 'next/link';
import Image from 'next/image';

import LogoDark from '../../../public/proseed_logo.svg';
import LogoLight from '../../../public/proseed_logo-light.svg'

export default function Logo() {
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
        <Link href="/" passHref>
            <Image
                className={'h-20 w-20'}
                src={logo}
                alt="Proseed Logo"
                unoptimized={true}
            />
        </Link>
    );
}
