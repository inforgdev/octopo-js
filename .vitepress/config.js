export default {
    title: 'OctopoJS',
    description: 'OctopoJS Website',
    base: '/octopo-js/',
    srcDir: './src/docs',
    outDir: './dist/docs',
    themeConfig: themeConfig(),
}

function themeConfig() {
    return {
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
        ],
    };
}