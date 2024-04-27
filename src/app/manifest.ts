import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'proseed GmbH',
        short_name: 'proseed',
        description: 'proseed GmbH - Wir sind strategists of prosperity',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#004225',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
        related_applications: [
            {
                url: 'https://www.proseed-consulting.com/',
                platform: 'web',
            },
        ],
        shortcuts: [
            {
                name: 'proseed GmbH Startseite',
                url: '/',
                description: 'Zur Startseite der proseed GmbH PWA',
            },
            {
                name: 'proseed GmbH Kontakt',
                url: '/#contactSection',
                description: 'Zu den Kontaktinformationen der proseed GmbH',
            },
        ],
    };
}
