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
            {
                text: 'API',
                collapsible: true,
                items: [
                    { text: 'Introduction', link: '/api/index' },
                    { text: 'Options', link: '/api/options' },
                    { text: 'Methods', link: '/api/methods' },
                    { text: 'Nodes', link: '/api/nodes' },
                    { text: 'Factory', link: '/api/factory' },
                    { text: 'Grammars', link: '/api/grammars' },
                ],
            },
        ],
    };
}