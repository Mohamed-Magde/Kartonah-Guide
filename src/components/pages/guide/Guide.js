import React from "react";
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

const Guide = () => {
  return (
    <>
      <GuideBanner />
      <GuideObstacles />
      <GuideSolution />
      <MarketSize />
      <GuideStatistics />
      <GuideFranchise />
      <GuideCompetitive />
      <GuideAdvantages />
      <GuideProduct />
      <GuideInvesting />
      <GuideOffer />
      <GuideSupport />
      <GuideForm />
    </>
  );
};

export default Guide;
