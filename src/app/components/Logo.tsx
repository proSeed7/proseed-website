'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Image from 'next/image';

import LogoDarkHeader from '../../../public/proseed_logo.svg';
import LogoLightHeader from '../../../public/proseed_logo-light.svg';

import LogoDarkStage from '../../../public/proseed_logo_stage.svg';
import LogoLightStage from '../../../public/proseed_logo_stage-light.svg';

export default function Logo({className, hasText = false}: { className?: string, hasText?: boolean }) {
    const { theme } = useTheme();
    const [logo, setLogo] = useState<string>(LogoDarkHeader);

    useEffect(() => {
        let darkLogo = LogoDarkHeader;
        let lightLogo = LogoLightHeader;

        if (hasText) {
            darkLogo = LogoDarkStage;
            lightLogo = LogoLightStage;
        }

        setLogo(theme === 'dark' ? lightLogo : darkLogo);
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

