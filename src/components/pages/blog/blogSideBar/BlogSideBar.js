import React from "react";
import "./scss/main.css";
const BlogSideBar = () => {
  const data = {
    viewed: [
      {
        id: 1,
        title: "Our New Fashion Lifestyle For Summer",
        date: " April 18, 2019",
        img: require("../../../../assets/img/blogs/most-viewed-img.png"),
      },
      {
        id: 2,
        title: "Our New Fashion Lifestyle For Summer",
        date: " April 18, 2019",
        img: require("../../../../assets/img/blogs/most-viewed-img.png"),
      },
      {
        id: 3,
        title: "Our New Fashion Lifestyle For Summer",
        date: " April 18, 2019",
        img: require("../../../../assets/img/blogs/most-viewed-img.png"),
      },
      {
        id: 4,
        title: "Our New Fashion Lifestyle For Summer",
        date: " April 18, 2019",
        img: require("../../../../assets/img/blogs/most-viewed-img.png"),
      },
      {
        id: 5,
        title: "Our New Fashion Lifestyle For Summer",
        date: " April 18, 2019",
        img: require("../../../../assets/img/blogs/most-viewed-img.png"),
      },
    ],

    category: [
      {
        id: 1,
        title: "Women Fashion",
        date: "(21)",
      },
      {
        id: 2,
        title: "Fashion Wear",
        date: "(21)",
      },
      {
        id: 3,
        title: "Men",
        date: "(21)",
      },
      {
        id: 4,
        title: "Appliances",
        date: "(21)",
      },
      {
        id: 5,
        title: "Smart Home",
        date: "(21)",
      },
      {
        id: 6,
        title: "Home & Kitchen",
        date: "(21)",
      },
      {
        id: 7,
        title: "Furniture",
        date: "(21)",
      },
    ],

    tag: [
      { id: 1, title: "Fashion Wear" },
      {
        id: 2,
        title: "Appliances",
      },
      {
        id: 3,
        title: "Furniture",
      },
      {
        id: 4,
        title: "Men",
      },
      {
        id: 5,
        title: "Smart Home",
      },
      {
        id: 6,
        title: "Fashion Wear",
      },
      {
        id: 7,
        title: "Furniture",
      },
      {
        id: 8,
        title: "Men",
      },
      {
        id: 9,
        title: "Smart Home",
      },
      {
        id: 10,
        title: "Appliances",
      },
    ],
  };
  return (
    <div className="blog-bar">
      <div className="blog-bar-viewed">
        <h6 className="blog-bar-viewed-title">Most Viewed</h6>
        <div className="blog-bar-viewed-wrapper">
          {data.viewed.map((item) => {
            const { id, title, date, img } = item;
            return (
              <figure key={id}>
                <img src={img} alt="" />
                <figcaption>
                  <span>{title}</span>
                  <p>
                    <i className="far fa-calendar-alt"></i>
                    {date}
                  </p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
      <div className="blog-bar-category">
        <h6 className="blog-bar-category-title">Categories</h6>
        <div className="blog-bar-category-wrapper">
          {data.category.map((item) => {
            const { id, title, date } = item;
            return (
              <div className="blog-bar-category-wrapper-block" key={id}>
                <span>{title}</span> <p>{date}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="blog-bar-tag">
        <h6 className="blog-bar-tag-title">Tags</h6>
        <div className="blog-bar-tag-wrapper">
          {data.tag.map((item) => {
            const { id, title } = item;
            return (
              <p className="blog-bar-tag-wrapper-block" key={id}>
                {title}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogSideBar;
