import React from "react";
import Carousel from "react-elastic-carousel";
const AboutTeam = () => {
  const data = {
    title: "Kartonah Team",
    desc:
      "Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores consectetuer, nulla aptent est pede. Scelerisque euismod",
    items: [
      {
        id: 1,
        title: "Raegan Reilly",
        desc: "Accountability Facilitator",
        img: require("../../../../assets/img/teams/team-1.png"),
        items: [
          { id: 1, icon: "fab fa-twitter" },
          { id: 2, icon: "fab fa-facebook-f" },
          { id: 3, icon: "fab fa-linkedin-in" },
        ],
      },
      {
        id: 2,
        title: "Raegan Reilly",
        desc: "Accountability Facilitator",
        img: require("../../../../assets/img/teams/team-2.png"),
        items: [
          { id: 1, icon: "fab fa-twitter" },
          { id: 2, icon: "fab fa-facebook-f" },
          { id: 3, icon: "fab fa-linkedin-in" },
        ],
      },
      {
        id: 3,
        title: "Raegan Reilly",
        desc: "Accountability Facilitator",
        img: require("../../../../assets/img/teams/team-3.png"),
        items: [
          { id: 1, icon: "fab fa-twitter" },
          { id: 2, icon: "fab fa-facebook-f" },
          { id: 3, icon: "fab fa-linkedin-in" },
        ],
      },
      {
        id: 4,
        title: "Raegan Reilly",
        desc: "Accountability Facilitator",
        img: require("../../../../assets/img/teams/team-4.png"),
        items: [
          { id: 1, icon: "fab fa-twitter" },
          { id: 2, icon: "fab fa-facebook-f" },
          { id: 3, icon: "fab fa-linkedin-in" },
        ],
      },
      {
        id: 5,
        title: "Raegan Reilly",
        desc: "Accountability Facilitator",
        img: require("../../../../assets/img/teams/team-1.png"),
        items: [
          { id: 1, icon: "fab fa-twitter" },
          { id: 2, icon: "fab fa-facebook-f" },
          { id: 3, icon: "fab fa-linkedin-in" },
        ],
      },
      {
        id: 6,
        title: "Raegan Reilly",
        desc: "Accountability Facilitator",
        img: require("../../../../assets/img/teams/team-2.png"),
        items: [
          { id: 1, icon: "fab fa-twitter" },
          { id: 2, icon: "fab fa-facebook-f" },
          { id: 3, icon: "fab fa-linkedin-in" },
        ],
      },
      {
        id: 7,
        title: "Raegan Reilly",
        desc: "Accountability Facilitator",
        img: require("../../../../assets/img/teams/team-3.png"),
        items: [
          { id: 1, icon: "fab fa-twitter" },
          { id: 2, icon: "fab fa-facebook-f" },
          { id: 3, icon: "fab fa-linkedin-in" },
        ],
      },
      {
        id: 8,
        title: "Raegan Reilly",
        desc: "Accountability Facilitator",
        img: require("../../../../assets/img/teams/team-4.png"),
        items: [
          { id: 1, icon: "fab fa-twitter" },
          { id: 2, icon: "fab fa-facebook-f" },
          { id: 3, icon: "fab fa-linkedin-in" },
        ],
      },
      {
        id: 9,
        title: "Raegan Reilly",
        desc: "Accountability Facilitator",
        img: require("../../../../assets/img/teams/team-1.png"),
        items: [
          { id: 1, icon: "fab fa-twitter" },
          { id: 2, icon: "fab fa-facebook-f" },
          { id: 3, icon: "fab fa-linkedin-in" },
        ],
      },
      {
        id: 10,
        title: "Raegan Reilly",
        desc: "Accountability Facilitator",
        img: require("../../../../assets/img/teams/team-2.png"),
        items: [
          { id: 1, icon: "fab fa-twitter" },
          { id: 2, icon: "fab fa-facebook-f" },
          { id: 3, icon: "fab fa-linkedin-in" },
        ],
      },
      {
        id: 11,
        title: "Raegan Reilly",
        desc: "Accountability Facilitator",
        img: require("../../../../assets/img/teams/team-3.png"),
        items: [
          { id: 1, icon: "fab fa-twitter" },
          { id: 2, icon: "fab fa-facebook-f" },
          { id: 3, icon: "fab fa-linkedin-in" },
        ],
      },
    ],
  };
  const { title, desc, items } = data;
  return (
    <div className="about-team">
      <div className="container">
        <div className="title">
          <h3 className="heading-3">{title} </h3>
          <p> {desc} </p>
        </div>
        <div className="about-team-slider">
          <Carousel
            className="desktop"
            itemsToShow={4}
            showArrows={false}
            itemsToScroll={1}
          >
            {items.map((item) => {
              const { id, title, desc, img, items } = item;
              return (
                <figure className="about-team-slider-item" key={id}>
                  <img src={img} alt="" />
                  <figcaption>
                    <h6 className="heading-7">{title} </h6>
                    <p>{desc} </p>
                    <div className="social">
                      {items.map((item) => {
                        const { id, icon } = item;
                        return <i className={icon} key={id}></i>;
                      })}
                    </div>
                  </figcaption>
                </figure>
              );
            })}
          </Carousel>
          <Carousel
            className="mobile"
            itemsToShow={1}
            showArrows={false}
            itemsToScroll={1}
          >
            {items.map((item) => {
              const { id, title, desc, img, items } = item;
              return (
                <figure className="about-team-slider-item" key={id}>
                  <img src={img} alt="" />
                  <figcaption>
                    <h6 className="heading-7">{title} </h6>
                    <p>{desc} </p>
                    <div className="social">
                      {items.map((item) => {
                        const { id, icon } = item;
                        return <i className={icon} key={id}></i>;
                      })}
                    </div>
                  </figcaption>
                </figure>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
