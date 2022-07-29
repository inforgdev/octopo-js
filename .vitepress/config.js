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
    };
}