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
    // 添加浏览器上的icon
      ['link', { rel: 'icon', href: '/ccandy/favicon.ico' }]
    ],

    // 显示markdown文件中代码块的行数
    markdown: {
      lineNumbers: true
    },

    // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
    lastUpdated: true, // string | boolean

    // 主题配置
    themeConfig: {
      // 首页导航上的logo
      logo: "/logo.png",

      // logo右边的标题
      siteTitle: '疯狂的糖果',

      // 首页搜索框
      search: {
        provider: "local"
      },

      // 头部导航栏配置
      nav: topNav,

      // 左侧导航栏
      sidebar: {
        "/NoFap": NoFapSidebar,
        "/Write": WriteSidebar,
      },

      // 右侧导航栏
      outline: {
        level: [2,6],
        label: "本页目录"
      },

      // 编辑链接
      editLink: {
        pattern: "https://github.com/kality/ccandy/edit/main/docs/:path", // 自己项目仓库地址
        text: "在 github 上编辑此页",
      },

      // 显示最后更新时间
      lastUpdatedText: "最后更新", // string

      // 站点页脚配置
      footer: {
        message: "Released under the MIT License",
        copyright: "Copyright © 2024-present CrazyCandy",
      },

      // 社交媒体配置
      socialLinks: [
        { icon: 'github', link: 'https://github.com' },
      ],
    },
 }