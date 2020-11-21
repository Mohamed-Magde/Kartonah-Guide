import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        "guide-banner": {
          span: "Franchise Guide",
          "h1-first": "kartonah Franchise",
          "h1-second": "Guide",
          "top-p":
            "Kartonah Foundation belongs to one of the oldest commercial establishments in Turkey, which has over 8 years of experience in the fields of business and commercial activities. The institution is spread throughout the Middle East and North Africa.",
          "bottom-first":
            "However, this is <br /> not the end of <br /> our horizons",
          "bottom-second":
            "(this is not our limit), as we are looking to establish new branches by granting the franchise of the Kartonah brand to investors looking to spread and meet the worldwide market needs.",
          "bottom-third":
            " As a commitment to our society, we have put in place a franchise system that helps create job opportunities for young people with limited funding .",
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
    ar: {
      translations: {
        "guide-banner": {
          span: "hhhhhh",
          "h1-first": "khhhhhhh",
          "h1-second": "hhhh",
          "top-p":
            "Kartonah Foundation belongs to one of the oldest commercialasdasdasdasdadasdasdadasead throughout the Middle East and North Africa.",
          "bottom-first":
            "However, this is <br /> not the end of <br /> our horizons",
          "bottom-second":
            "(this is not our limit), as we are looking to establish new branches by granting the franchise of the Kartonah brand to investors looking to spread and meet the worldwide market needs.",
          "bottom-third":
            " As a commitment to our society, we have put in place a franchise system that helps create job opportunities for young people with limited funding .",
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
