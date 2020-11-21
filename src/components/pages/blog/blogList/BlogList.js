import React from "react";
import { Link } from "react-router-dom";
import "./scss/main.css";
const BlogList = () => {
  const data = [
    {
      id: 1,
      span: "FASHION DESIGN",
      h4: "Our New Fashion Lifestyle For 2019",
      date: "April 18, 2019",
      p:
        "Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores consectetuer, nulla aptent est pede. Scelerisque euismod varius…",
      link: "CONTINUE READING",
      img: require("../../../../assets/img/blogs/blog-img-1.png"),
    },
    {
      id: 2,
      span: "FASHION DESIGN",
      h4: "Our New Fashion Lifestyle For 2019",
      date: "April 18, 2019",
      p:
        "Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores consectetuer, nulla aptent est pede. Scelerisque euismod varius…",
      link: "CONTINUE READING",
      img: require("../../../../assets/img/blogs/blog-img-2.png"),
    },
    {
      id: 3,
      span: "FASHION DESIGN",
      h4: "Our New Fashion Lifestyle For 2019",
      date: "April 18, 2019",
      p:
        "Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores consectetuer, nulla aptent est pede. Scelerisque euismod varius…",
      link: "CONTINUE READING",
      img: require("../../../../assets/img/blogs/blog-img-1.png"),
    },
    {
      id: 4,
      span: "FASHION DESIGN",
      h4: "Our New Fashion Lifestyle For 2019",
      date: "April 18, 2019",
      p:
        "Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores consectetuer, nulla aptent est pede. Scelerisque euismod varius…",
      link: "CONTINUE READING",
      img: require("../../../../assets/img/blogs/blog-img-2.png"),
    },
  ];
  return (
    <div className="blog-list">
      <h3 className="blog-list-title">Latest Articles</h3>
      <div className="blog-list-flex">
        {data.map((item) => {
          const { id, span, h4, date, p, link, img } = item;
          return (
            <figure className="blog-list-flex-item" key={id}>
              <img src={img} alt="" />
              <figcaption>
                <span>{span}</span>
                <h4>{h4}</h4>
                <p className="blog-list-flex-item-date">
                  <i class="far fa-calendar-alt"></i> {date}
                </p>
                <p className="blog-list-flex-item-desc">{p}</p>
                <Link to={`/blog/${id}`} className="blog-list-flex-item-btn">
                  {link}
                </Link>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
