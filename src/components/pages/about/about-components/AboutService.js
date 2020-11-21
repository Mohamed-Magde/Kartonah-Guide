import React from "react";

const AboutService = () => {
  const data = {
    title: "Our Services",
    items: [
      {
        id: 1,
        img: require("../../../../assets/img/icons/service-1.png"),
        title: "Raegan Reilly",
        desc:
          "Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget",
      },
      {
        id: 2,
        img: require("../../../../assets/img/icons/service-2.png"),
        title: "Raegan Reilly",
        desc:
          "Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget",
      },
      {
        id: 3,
        img: require("../../../../assets/img/icons/service-3.png"),
        title: "Raegan Reilly",
        desc:
          "Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget",
      },
      {
        id: 4,
        img: require("../../../../assets/img/icons/service-4.png"),
        title: "Raegan Reilly",
        desc:
          "Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget",
      },
    ],
  };
  const { title, items } = data;
  return (
    <div className="about-service">
      <div className="container">
        <div className="title">
          <h3 className="heading-3">{title} </h3>
        </div>
        <div className="about-service-grid">
          {items.map((item) => {
            const { id, img, title, desc } = item;
            return (
              <div className="about-service-grid-block" key={id}>
                <img src={img} alt="" />
                <span>{title} </span>
                <p>{desc} </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutService;
