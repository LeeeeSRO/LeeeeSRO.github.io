var posts=["2020/06/12/PaTa视觉设计汇总/","2022/03/16/Pixel Streamer的一个简单demo/","2020/04/20/ThingsBoard开源物联网平台部署教程/","2022/04/11/使用Arduino做一个座位检测器/","2024/05/02/使用Hexo与GitHub Pages实现博客自动部署教程/","2024/04/28/卡片桌面/","2024/04/28/复古玩家/","2019/03/20/如何使用obsidian和github publisher插件实现文章自动发布/","2024/04/27/彩虹数字/","2024/04/27/景深地球/","2024/04/27/点阵手表/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };