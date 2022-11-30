export default {
    siteTitle: 'OctopoJS',
    socialLinks: [
        { icon: 'github', link: 'https://github.com/inforgdev/octopo-js' },
    ],
    footer: {
        copyright: "By Inforg",
    },
    nav: [
        { text: 'Get Started', link: '/intro/about' },
    ],
    sidebar: [
        {
            text: 'Introduction',
            collapsible: true,
            items: [
                { text: 'About', link: '/intro/about' },
                { text: 'Install', link: '/intro/install' },
                { text: 'Usage', link: '/intro/usage' },
                { text: 'Example', link: '/intro/example' },
            ],
        },
        {
            text: 'API',
            collapsible: true,
            items: [
                { text: 'Productions', link: '/api/productions' },
                { text: 'Factory', link: '/api/factory' },
                { text: 'Generator', link: '/api/generator' },
                { text: 'Grammars', link: '/api/grammars' },
            ],
        },
    ],
};