import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        "guide-banner-span": "Franchise Guide",
        "guide-banner-h1-first": "kartonah Franchise",
        "guide-banner-h1-second": "Guide",
        "guide-banner-top-p":
          "Kartonah Foundation belongs to one of the oldest commercial establishments in Turkey, which has over 8 years of experience in the fields of business and commercial activities. The institution is spread throughout the Middle East and North Africa.",
        "guide-banner-bottom-first":
          "However, this is <br /> not the end of <br /> our horizons",
        "guide-banner-bottom-second":
          "(this is not our limit), as we are looking to establish new branches by granting the franchise of the Kartonah brand to investors looking to spread and meet the worldwide market needs.",
        "guide-banner-bottom-third":
          " As a commitment to our society, we have put in place a franchise system that helps create job opportunities for young people with limited funding .",

        "guide-obs": {
          title: "The Obstacles (Difficulties)",
          data: [
            {
              id: 1,
              title: "Qunatity",
              desc:
                "The difficulty of making a successful deal in small quantities in the Turkish trade",
            },
            {
              id: 2,
              title: "Diversity",
              desc:
                "We offer Lack of diversity between Catagories , products, items and prices",
            },
            {
              id: 3,
              title: "Prices",
              desc:
                "One of the most important problems facing customers and wholesale clothing merchants",
            },
          ],
        },
      },
    },
    ar: {
      translations: {
        "guide-banner": {
          span: "تعريف بالمؤسسة",
          "h1-first": " تعريف ",
          "h1-second": "كرتونة",
          "top-p":
            "تنتمـي مؤسسـة كرتونة إلـى واحـدة مـن أعـرق المؤسسـات التجارية فـي تركيا و التـي تمتلـك خبـرة تتجـاوز 8 أعوام فـي مجـالات الآعمـال و النشـاطات التجاريـة وتنتشر هذه المؤسسة فـي كافـة أنحـاء العالم ",
          "bottom-first": "ولكـن هـذا <br /> يـس منتهـى <br /> فاقنا",
          "bottom-second":
            "نحـن نتطلـع إلـى إنشـاء فـروع جديـدة عبـر منـح الامتياز التجـاري لعلامـة كرتونة للمسـتثمرين المتطلعيـن للإنتشـار وسـد حاجـات السـوق فـي منطقـة  الشرق الأوسط وأفريقيا ومــن ثــم التمــدد نحــو الأســواق العالميــة لتحقيــق رؤيــة المؤسســة فــي أن تكــون الجهـة الرائـدة فـي تصدير الملابس التركية بالجملة ",
          "bottom-third":
            " التزامـا منـا تجـاه مجتمعنـا فقـد وضعنـا نظـام الإمتيـاز التجـاري بحيـث يسـاعد فـي إيجـاد فـرص عمـل للشـباب مـن ذوي رؤوس الأموال البسـيطة للعمل وبدء حياتهم بأقل المخاطر من خلال التدريب والتشـغيل .",
        },
        "guide-obs": {
          title: "The Obstacles (Difficulties)",
          data: [
            {
              id: 1,
              title: "Qunatity",
              desc:
                "The difficulty of making a successful deal in small quantities in the Turkish trade",
            },
            {
              id: 2,
              title: "Diversity",
              desc:
                "We offer Lack of diversity between Catagories , products, items and prices",
            },
            {
              id: 3,
              title: "Prices",
              desc:
                "One of the most important problems facing customers and wholesale clothing merchants",
            },
          ],
        },
      },
    },
  },
  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ",",
  },

  react: {
    wait: true,
  },
});

export default i18n;
