import React from "react";
import "./scss/main.css";
const BlogContent = () => {
  const data = {
    img1: require("../../../../../../assets/img/blogs/blog-img-1.png"),
    img2: require("../../../../../../assets/img/blogs/blog-img-2.png"),
    first:
      "Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores consectetuer, nulla aptent est pede. Scelerisque euismod varius mi, congue eget sed vestibulum, ornare cras sed nec. At sed laoreet metus pellentesque, at dolor laoreet tempor magna. Ut nullam sed blandit, vel orci quam et, nunc dictum viverra bibendum ac, erat hymenaeos tempor enim pretium.",
    second:
      "Sed velit mattis ipsum mi, quam turpis porttitor duis, ipsum fusce congue at, etiam sit nec erat. Massa ut in risus mi, dictum nam odio elementum, massa amet et libero, ridiculus quis amet mi. A ut aliquam impedit, sed ad excepteur pellentesque. Posuere posuere dignissim wisi ligula, rutrum magna a congue, lobortis et lacus vel, congue pede donec lorem. Nisl augue gravida in, sed tortor maecenas dui gravida.",
    list: [
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet, ut odio.",
      },
      {
        id: 2,
        text: "Nec ac diam, venenatis eget sed.",
      },
      {
        id: 3,
        text: "Tempor non, placeat integer.",
      },
      {
        id: 4,
        text: "Lectus tortor ac diam, venenatis eget sed.",
      },
    ],
    third:
      "Bibendum wisi, nullam lacinia nam. Nulla aenean. Vestibulum lectus. Sit fames. Placerat lectus vel, sit aliquet. Pretium nisl non, nonummy lorem odio, ac at nonummy. Dictum ac maecenas, diam lobortis. Sodales ullamcorper, vestibulum magna nulla. Pretium quis montes, odio magna, est magna neque. Felis ligula, adipiscing cursus diam, enim morbi dolor. Donec ullamcorper, mi maecenas vestibulum.",
    fourth:
      "Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores consectetuer, nulla aptent est pede. Scelerisque euismod varius mi, congue eget sed vestibulum, ornare cras sed nec. At sed laoreet metus pellentesque, at dolor laoreet tempor magna. Ut nullam sed blandit, vel orci quam et, nunc dictum viverra bibendum ac, erat hymenaeos tempor enim pretium.",
    fifth:
      "Sed velit mattis ipsum mi, quam turpis porttitor duis, ipsum fusce congue at, etiam sit nec erat. Massa ut in risus mi, dictum nam odio elementum, massa amet et libero, ridiculus quis amet mi. A ut aliquam impedit, sed ad excepteur pellentesque. Posuere posuere dignissim wisi ligula, rutrum magna a congue, lobortis et lacus vel, congue pede donec lorem. Nisl augue gravida in, sed tortor maecenas dui gravida.",
  };
  return (
    <div className="blog-content">
      <div className="blog-content-title">
        <span>FASHION DESIGN</span>
        <h2>Our New Fashion Lifestyle For 2019</h2>
        <p>
          <i class="far fa-calendar-alt"></i> April 18, 2019
        </p>
      </div>
      <div className="blog-content-body">
        <img src={data.img1} alt="" className="blog-content-body-banner" />
        <p>{data.first}</p>
        <p>{data.second}</p>
        <ul>
          {data.list.map((item) => {
            return (
              <li key={item.id}>
                <p>{item.text}</p>
              </li>
            );
          })}
        </ul>
        <p>{data.third}</p>
        <div className="blog-content-body-grid">
          <figure>
            <img src={data.img1} alt="" />
          </figure>
          <figure>
            <img src={data.img1} alt="" />
          </figure>
          <figure>
            <img src={data.img1} alt="" />
          </figure>{" "}
          <figure>
            <img src={data.img1} alt="" />
          </figure>
        </div>
        <p>{data.fourth}</p>
        <p>{data.fifth}</p>
      </div>
    </div>
  );
};

export default BlogContent;
