import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "YYFnoDiCK",
  description: "为 嘤嘤饭 发声！",
  lang: "zh",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "发声", link: "/README" },
      { text: "关于", link: "/about"}
    ],
    socialLinks: [
      { icon: "discord", link: "https://discord.com/channels/@KaguReion" },
      { icon: "github", link: "https://github.com/KaguReion/YYFnoDiCK" },
      { icon: "x", link: "https://twitter.com/KaguReion" },
      { icon: "youtube", link: "https://www.youtube.com/@KaguReion" },
    ],
    siteTitle: "YYFnoDiCK",
    footer: {
      message:
        '该 repo 遵循 <a href="https://github.com/KaguReion/YYFnoDiCK/blob/main/LICENSE">MIT</a> 协议，并使用 <a href="https://vitepress.dev">VitePress</a> 构建。',
      copyright: "版权所有 (c) 2019-present Paranoia Seal",
    },
    logo: "/yyf_avatar.svg",
    head: [
      ['link', { rel: 'icon', href: '/yyf_avatar.ico' }]
    ],
    editLink: {
      pattern: "https://github.com/KaguReion/YYFnoDiCK/edit/main/docs/:path",
    },
    search: {
      provider: "local",
    },
  },
  sitemap: {
    hostname: "https://yyf.kagureion.top",
  },
  lastUpdated: true,
});
