// Write左侧导航栏
export const WriteSidebar = [
  {
    text: '最新',
    items: [
      { text: 'Markdown Examples',
        link: '/markdown-examples' },
      { text: 'Runtime API Examples',
        link: '/api-examples' }
    ]
  },

  // PLAB部分
  {
    text: 'PLAB',
    collapsed: true,
    items: [
      { text: '开始', 
        link: '/Write/24-0818-01' },
      { text: '1、我的PLAB考试经验', 
        link: '/Write/24-0816-01' },
      { text: '2、通过PLAB考试之后，向GMC申请注册流程经验', 
        link: '/Write/24-0816-02' },
      { text: '3、考过PLAB（UKMLA），完成GMC注册之后——在NHS的第一份工作，GP专科培训以及MSR', 
        link: '/Write/24-0816-03' },
    ]
  },

  // USMLE部分
  {
    text: 'USMLE',
    collapsed: true,
    items: [
      { text: '1、从医行 | 6个月速通美国执医USMLE-STEP1攻略（上）', 
        link: '/Write/24-0817-01' },
      { text: '2、从医行 | 6个月速通美国执医USMLE-STEP1攻略（中）', 
        link: '/Write/24-0817-02' },
      { text: '3、从医行 | 6个月速通美国执医USMLE-STEP1攻略（下）', 
        link: '/Write/24-0817-03' },
    ],
  },

  // VitePress部分
  {
    text: 'VitePress',
    collapsed: true,
    items: [
      { text: '1、VitePress的安装和运行', 
        link: '/Write/24-0818-02' },
      { text: '2、默认首页、头部导航、左侧导航配置和右侧边栏配置', 
        link: '/Write/24-0819-01' },
      { text: '3、页脚、标题logo、最后更新时间等相关细节配置', 
        link: '/Write/24-0822-01' },
      { text: '4、（进阶）如何自定义首页布局和主题样式修改？', 
        link: '/Write/24-0822-02' },
      { text: '5、（进阶）如何自定义页面模板、给页面添加独有的className和使页面标题变成侧边目录？', 
        link: '/Write/24-0824-01' },
      { text: '6、（进阶）第三方组件库的使用-搭建组件库文档', 
        link: '/Write/24-0824-02' },
      { text: '7、如何用Github Actions自动化部署到Github Pages？', 
        link: '/Write/24-0824-03' },
      { text: '8、如何非自动化部署到Github Pages？', 
        link: '/Write/24-0824-04' },
      { text: '9、VitePress部署到Github Pages后发现样式全错乱了怎么办？', 
        link: '/Write/24-0824-05' },  
    ]
  },

  //往期部分
  {
    text: '往期',
    collapsed: true,
    items: [
      { text: 'Markdown Examples',
        link: '/markdown-examples' },
      { text: 'Runtime API Examples',
        link: '/api-examples' }
    ]
  },
];