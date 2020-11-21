import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./scss/main.css";
const BlogBanner = () => {
  const data = [
    {
      id: 0,
      img: require("../../../../assets/img/blogs/slider-img.png"),
      caption: {
        btn: "FASHION DESIGN",
        title: "Our New Fashion Lifestyle For This Summer",
        date: "April 18, 2019",
        p:
          "Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores consectetuer, nulla aptent est pede. Scelerisque euismod varius…",
      },
    },
    {
      id: 1,
      img: require("../../../../assets/img/blogs/slider-img.png"),
      caption: {
        btn: "FASHION DESIGN",
        title: "Our New Fashion Lifestyle For This Summer",
        date: "April 18, 2019",
        p:
          "Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores consectetuer, nulla aptent est pede. Scelerisque euismod varius…",
      },
    },
    {
      id: 2,
      img: require("../../../../assets/img/blogs/slider-img.png"),
      caption: {
        btn: "FASHION DESIGN",
        title: "Our New Fashion Lifestyle For This Summer",
        date: "April 18, 2019",
        p:
          "Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores consectetuer, nulla aptent est pede. Scelerisque euismod varius…",
      },
    },
  ];
  return (
    <CarouselProvider
      className="blog-slider"
      naturalSlideWidth={100}
      naturalSlideHeight={45}
      totalSlides={3}
    >
      <Slider className="blog-slide">
        {data.map((item) => {
          const { id, img, caption } = item;
          const { btn, title, p, date } = caption;
          return (
            <Slide className="blog-slide-item" key={id} index={id}>
              <img src={img} alt="" />
              <div className="blog-caption">
                <span className="blog-caption-btn">{btn}</span>
                <div className="blog-caption-title">
                  <h3>{title}</h3>
                  <p>
                    <i className="far fa-calendar-alt"></i> {date}
                  </p>
                </div>
                <p className="blog-caption-desc">{p}</p>
              </div>
            </Slide>
          );
        })}
      </Slider>
      <ButtonBack className="blog-slider-btn back">
        <i className="fas fa-arrow-left"></i> <p>Back</p>
      </ButtonBack>
      <ButtonNext className="blog-slider-btn next">
        <p>Next</p>
        <i className="fas fa-arrow-right"></i>
      </ButtonNext>
    </CarouselProvider>
  );
};

export default BlogBanner;
