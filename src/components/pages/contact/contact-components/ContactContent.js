import React from "react";

const ContactContent = () => {
  const data = [
    {
      id: 1,
      title: "Get In Touch",
      desc:
        "Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores consectetuer, nulla aptent est pede. Scelerisque euismod varius mi, congue eget sed vestibulum, ornare cras sed nec. At sed laoreet metus pellentesque, at dolor laoreet tempor magna",
    },
    {
      id: 2,
      title: "Why Choose Us",
      desc:
        "Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores consectetuer, nulla aptent est pede. Scelerisque euismod varius mi, congue eget sed vestibulum, ornare cras sed nec. At sed laoreet metus pellentesque, at dolor laoreet tempor magna",
    },
  ];
  return (
    <div className="contact-content">
      <div className="container">
        {data.map((item) => {
          const { id, title, desc } = item;
          return (
            <div className="contact-content-block" key={id}>
              <h4 className="heading-4">{title} </h4>
              <p>{desc} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactContent;
