'use client';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { IoIosArrowDown } from "react-icons/io";

export default function ScrollToNextSection({ className, sectionId }) {
    const [isClicked, setIsClicked] = useState(false);

    const handleOnClick = () => {
        setIsClicked(true);
    };

    return (
        <Link
            to={sectionId}
            smooth={true}
            duration={150}
            offset={-90}
            onClick={handleOnClick}
            className={`z-0 ${!isClicked ? 'animate-bounce' : ''} cursor-pointer mt-auto mb-6 text-3xl md:text-4xl hover:text-accent-green ${className}`}
        >
            <IoIosArrowDown className={'pointer-events-none'} />
        </Link>
    );
}