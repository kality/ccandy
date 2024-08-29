// 头部导航
import topNav from "./topNav";
// 左侧导航栏
import { vitePressNote } from "./sideBar/vitePressBar";

export default {

    base: "/vitePress-project/",

    title: '前端吧',
    description: '关注web前端开发为主的博客网站和前端网址大全',
    // 打包目录 outDir: './dist',
    head: [
    // 添加图标
    ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],

    // 主题配置
    themeConfig: {
      // 导航上的logo
      logo: "/logo.png",
      // 隐藏logo右边的标题
      siteTitle: '前端吧qianduan8.com',
      // 头部导航栏配置
      nav: topNav,
      // 左侧导航栏
      sidebar: {
        "/note/vitePress": vitePressNote,
      },
      // 编辑链接
      editLink: {
        pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path", // 自己项目仓库地址
        text: "在 github 上编辑此页",
      },
      // 站点页脚配置
      footer: {
        message: "Released under the MIT License",
        copyright: "Copyright © 2023-present Lao Yuan",
      },
      socialLinks: [
        { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
        // 也可以自定义svg的icon:
        {
        icon: {
            svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
        },
        link: '...'
        }
      ],
      // 右侧边栏配置，默认值是"In this page"
      outlineTitle: "本页目录",
    },
 }