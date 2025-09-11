/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "我架的服務",
    sites: [
      {
        title: "ian的blog",
        url: "https://cdn.ianip.eu.org",
        icon: "https://photo.ianip.eu.org/file/1744285479962_353934194_112885185168068_5570359555402115477_n.jpg",
      },
      {
        title: "短網址",
        url: "https://url.ianip.eu.org/",
        icon: "",
      },
      {
        title: "cloud-mail",
        url: "https://cloud.ianip.eu.org",
        icon: "https://raw.githubusercontent.com/jusoyi0405/cloud-mail/refs/heads/main/doc/demo/logo.png",
      },
      {
        title: "moemail",
        url: "https://moemail.ianip.eu.org/",
        icon: "https://raw.githubusercontent.com/jusoyi0405/moemail/refs/heads/master/public/icons/icon-192x192.png",
      },
      {
        title: "imgbad圖床",
        url: "https://photo.ianip.eu.org/",
        icon: "https://raw.githubusercontent.com/jusoyi0405/CloudFlare-ImgBed/refs/heads/main/logo.png",
      },
    ],
  },
];

/** Website 配置（2023.3.29 已废弃） */
const WEBSITE_ITEMS: WebsiteItem[] = [];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "ian‵s service",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://ianip.eu.org",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: "https://photo.ianip.eu.org/file/1744285479962_353934194_112885185168068_5570359555402115477_n.jpg",
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/EsunR",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://api.dujin.org/bing/1920.php",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "",
  ICP_URL: "https://beian.miit.gov.cn/",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "欢迎拜访",
    "歡迎拜訪",
    "Welcome, my friend!",
    "訪問へようこそ",
    "嗨，别来无恙",
    "不忘初心，一生浪漫",
    "最近还好吗？",
    "流星，落花，萤火",
    "马车越空，晃荡越响",
  ],
  /**
   * Website 分类配置
   */
  WEBSITE_SORTS,
  /**
   * Website 配置（2023.3.29 已废弃）
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "ian‵s service",
    keywords: "Blog, Index, Index Page",
    description: "This is my personal blog index page.",
  },
};

export default GLOBAL_CONFIG;
