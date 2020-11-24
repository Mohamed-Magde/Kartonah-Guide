import React from "react";
import "./scss/main.css";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";

import { useTranslation } from "react-i18next";
const GuideForm = () => {
  const svgElm = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="65"
      height="58.633"
      viewBox="0 0 65 58.633"
    >
      <path
        id="Path_6282"
        data-name="Path 6282"
        d="M7.27,49.564C7.27,36.656.584,27.792.584,21.572S4.159,2.29,32.772,2.29,65.584,19.863,65.584,26.7C65.586,58.74,7.27,72.424,7.27,49.564Z"
        transform="translate(-0.584 -2.29)"
        fill="#efefef"
      />
    </svg>
  );

  const data = {
    leftList: [
      {
        id: 1,
        icon: "fas fa-phone-alt",
        title: "+90 (552) 587 87 53",
      },
      {
        id: 2,
        icon: "fas fa-envelope-open",
        title: "info@kartonah.com",
      },
      {
        id: 3,
        icon: "fas fa-map-marked-alt",
        title:
          "Bahçelievler Merkez , D-100 Yan Yolu Yanı, Kadir Has Alışveriş Merkezi, Kat:4 No:407 34180 Bahçelievler/İstanbul",
      },
    ],
  };
  const [t] = useTranslation("common");
  return (
    <div className="guide-form">
      <div className="container">
        <Zoom>
          <div className="guide-form-left">
            <h2 className="guide-offer-title">
              {t("form.title1")} <span>{t("form.title2")}</span>
            </h2>
            <p className="guide-form-de">{t("form.p")}</p>
            <ul>
              {data.leftList.map((item) => {
                const { icon, title, id } = item;
                return (
                  <li key={id}>
                    <span>
                      {" "}
                      {svgElm} <i className={icon}></i>
                    </span>
                    <p>{title}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </Zoom>
        <form className="guide-form-right">
          <Zoom>
            <h3 className="guide-form-right-title">
              {t("form.formTitle1")} <span>{t("form.formTitle2")}</span>
            </h3>
          </Zoom>
          <Slide left>
            <div className="guide-form-right-group">
              <label htmlFor="">{t("form.name")}</label>
              <input type="text" placeholder={t("form.namePlaceHolder")} />
            </div>
            <div className="guide-form-right-group">
              <label htmlFor="">{t("form.name1")}</label>
              <input type="email" placeholder={t("form.name1PlaceHolder")} />
            </div>
            <div className="guide-form-right-group">
              <label htmlFor="">{t("form.name2")}</label>
              <input type="text" placeholder={t("form.name2PlaceHolder")} />
            </div>
            <div className="guide-form-right-group">
              <label htmlFor="">{t("form.name3")}</label>
              <textarea
                name=""
                placeholder={t("form.name3PlaceHolder")}
                id=""
                cols="30"
                rows="10"
              ></textarea>{" "}
            </div>
          </Slide>
          <input
            className="guide-form-submit"
            type="submit"
            value={t("form.btn")}
          />
        </form>
      </div>
    </div>
  );
};

export default GuideForm;
