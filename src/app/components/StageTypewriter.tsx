'use client';

import Typewriter from 'typewriter-effect';

export default function StageTypewriter({typewriterWords}) {

    return (
        <Typewriter
            options={{
                strings: typewriterWords,
                autoStart: true,
                loop: true,
            }}
        />
    );
}
