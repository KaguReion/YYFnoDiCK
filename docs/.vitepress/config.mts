import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "YYFnoDiCK",
  description: "为 嘤嘤饭 发声！",
  lang: "zh",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "发声", link: "/README" },
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
        '该 repo 遵循 <a href="https://github.com/KaguReion/YYFnoDiCK/blob/main/LICENSE">MIT</a> 协议。',
      copyright: "版权所有 (c) 2019-present Paranoia Seal",
    },
    logo: "/yyf_avatar.svg",
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