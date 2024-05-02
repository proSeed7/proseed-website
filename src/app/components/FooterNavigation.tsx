'use client'
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import Link from "next/link";

export default function FooterNavigation({ translations }) {

    const router = useRouter();
    const onLinkClick = async (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href');
        const targetSection = document.querySelector(target);
        const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'), 10);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - headerHeight,
                behavior: "smooth"
            });
        } else {
            router.push('/');
            setTimeout(() => {
                const section = document.querySelector(target);
                if (section) {
                    window.scrollTo({
                        top: section.offsetTop - headerHeight,
                        behavior: "smooth"
                    });
                }
            }, 50);
        }
    };

    const navLinks = [
        { name: 'why', label: translations.why, href: "#stageSection" },
        { name: 'mission', label: translations.mission, href: "#missionSection" },
        { name: 'how', label: translations.how, href: "#howSection" },
        { name: 'what', label: translations.what, href: "#whatSection" },
        /*{ name: 'prosperity', label: translations.prosperity, href: "#prosperitySection" },*/
        { name: 'contact', label: translations.contact, href: "#contactSection" },
        { name: 'career', label: translations.career, href: "#careerSection" }
    ];

    return (
        <menu
            className={`grid grid-cols-2`}
            role="menubar"
            aria-label="Proseed Navigation Menu"
        >
            {navLinks.map(link => (
                <li className={''} role="none" key={link.name}>
                    <a role="menuitem"
                       className={'lg:text-lg hover:text-accent-green cursor-pointer'}
                       href={link.href}
                       onClick={onLinkClick}>
                        {link.label}
                    </a>
                </li>
            ))}
            <li className={''} role="none">
                <a role="menuitem"
                   className={'lg:text-lg hover:text-accent-green cursor-pointer'}
                   onClick={()=>{router.push('/impressum')}}>
                    Impressum
                </a>
            </li>
        </menu>
    );
}