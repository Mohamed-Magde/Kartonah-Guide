import React from "react";

const AboutTitle = () => {
  const data = {
    title: "About Kartonah",
    subtitle:
      "Lorem ipsum dolor sit amet, sed nulla ante amet elementum tincidunt arcu sed laoreet",
    firstDesc:
      "Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores consectetuer, nulla aptent est pede. Scelerisque euismod varius mi, congue eget sed vestibulum, ornare cras sed nec. At sed laoreet metus pellentesque, at dolor laoreet tempor magna. Ut nullam sed blandit, vel orci quam et, nunc dictum viverra bibendum ac, erat hymenaeos tempor enim pretium.",
    secondDesc:
      "Sed velit mattis ipsum mi, quam turpis porttitor duis, ipsum fusce congue at, etiam sit nec erat. Massa ut in risus mi, dictum nam odio elementum, massa amet et libero, ridiculus quis amet mi. A ut aliquam impedit, sed ad excepteur pellentesque. Posuere posuere dignissim wisi ligula, rutrum magna a congue, lobortis et lacus vel, congue pede donec lorem.",
    img: require("../../../../assets/img/others/about-img.png"),
  };
  const { title, subtitle, firstDesc, secondDesc, img } = data;
  return (
    <div className="about-title">
      <div className="container">
        <div className="about-title-left">
          <h3 className="heading-3">{title} </h3>
          <p className="subtitle">{subtitle} </p>
          <p>{firstDesc} </p>
          <p>{secondDesc} </p>
        </div>
        <figure className="bout-title-right">
          <img src={img} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default AboutTitle;
