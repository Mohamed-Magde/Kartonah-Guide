import React, { useState, useEffect } from "react";
import Zoom from "react-reveal/Zoom";

import GuideAdvantages from "./guide-components/guideAdvantages/GuideAdvantages";
import GuideBanner from "./guide-components/guideBanner/GuideBanner";
import GuideCompetitive from "./guide-components/guideCompetitive/GuideCompetitive";
import GuideForm from "./guide-components/guideForm/GuideForm";
import GuideFranchise from "./guide-components/guideFranchise/GuideFranchise";
import GuideInvesting from "./guide-components/guideInvesting/GuideInvesting";
import MarketSize from "./guide-components/guideMarketSize/MarketSize";
import GuideObstacles from "./guide-components/guideObstacles/GuideObstacles";
import GuideOffer from "./guide-components/guideOffer/GuideOffer";
import GuideProduct from "./guide-components/guideProducts/GuideProduct";
import GuideSolution from "./guide-components/guideSolution/GuideSolution";
import GuideStatistics from "./guide-components/guideStatistics/GuideStatistics";
import GuideSupport from "./guide-components/guideSupport/GuideSupport";
import { useTranslation } from "react-i18next";
import Navbar from "../../layout/nav/Navbar";

const Guide = () => {
  const [t, i18n] = useTranslation("common");
  const [lang, setLang] = useState("en");
  const handleLang = (e) => {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className={lang === "ar" && "arabic"}>
      <Zoom>
        <div className="guide-lang">
          {lang === "ar" ? (
            <button value="en" onClick={handleLang}>
              en
            </button>
          ) : (
            <button className="guide-lang-ar" value="ar" onClick={handleLang}>
              AR
            </button>
          )}
        </div>
      </Zoom>
      <Navbar />
      <GuideBanner lang={lang} />
      <GuideObstacles />
      <GuideSolution />
      <MarketSize />
      <GuideStatistics />
      <GuideFranchise lang={lang} />
      <GuideCompetitive />
      <GuideAdvantages />
      <GuideProduct />
      <GuideInvesting lang={lang} />
      <GuideOffer />
      <GuideSupport />
      <GuideForm />
    </div>
  );
};

export default Guide;
