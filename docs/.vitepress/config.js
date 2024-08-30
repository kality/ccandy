// 头部导航
import topNav from "./topNav";
// 左侧导航栏
import { NoFapSidebar } from "./sideBar/NoFapBar";
import { WriteSidebar } from "./sideBar/WriteBar";

export default {

    base: "/ccandy/",

    title: '疯狂的糖果',
    description: 'CrazyCandy',
    // 打包目录 outDir: './dist',
    head: [
    // 添加图标
      ['link', { rel: 'icon', href: '/ccandy/favicon.ico' }]
    ],

    // 主题配置
    themeConfig: {
      // 首页导航上的logo
      logo: "/logo.png",

      // logo右边的标题
      siteTitle: '疯狂的糖果',

      // 头部导航栏配置
      nav: topNav,

      // 左侧导航栏
      sidebar: {
        "/NoFap": NoFapSidebar,
        "/Write": WriteSidebar,
      },

      // 编辑链接
      editLink: {
        pattern: "https://github.com/kality/ccandy/edit/main/docs/:path", // 自己项目仓库地址
        text: "在 github 上编辑此页",
      },

      // 站点页脚配置
      footer: {
        message: "Released under the MIT License",
        copyright: "Copyright © 2024-present CrazyCandy",
      },

      // 社交媒体配置
      socialLinks: [
        { icon: 'github', link: 'https://github.com' },
      ],

      // 右侧边栏配置，默认值是"In this page"
      outlineTitle: "本页目录",
    },
 }