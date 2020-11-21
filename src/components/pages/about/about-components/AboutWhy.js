import React from "react";

const AboutWhy = () => {
  const data = {
    title: "Why Choose Us",
    items: [
      {
        id: 1,
        icon: require("../../../../assets/img/icons/about-icon-1.png"),
        title: "Fast Shipping",
        desc:
          "Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed",
      },
      {
        id: 2,
        icon: require("../../../../assets/img/icons/about-icon-2.png"),
        title: "24/7 Support",
        desc:
          "Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed",
      },
      {
        id: 3,
        icon: require("../../../../assets/img/icons/about-icon-3.png"),
        title: "30 Dyas Returns",
        desc:
          "Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed",
      },
    ],
  };
  const { title, items } = data;
  return (
    <div className="about-why">
      <div className="container">
        <h3 className="heading-3">{title} </h3>
        <div className="about-why-grid">
          {items.map((item) => {
            const { id, icon, desc, title } = item;
            return (
              <div className="about-why-grid-block" key={id}>
                <div className="container">
                  <img src={icon} alt="" />
                  <h6 className="heading-6">{title} </h6>
                  <p>{desc} </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutWhy;
