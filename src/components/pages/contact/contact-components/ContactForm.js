import React from "react";

const ContactForm = () => {
  const data = {
    form: [
      {
        _id: 1,
        type: "text",
        name: "name",
        id: "name",
        forElement: "name",
        placeholder: "Type Your Name",
        label: "Your Name",
      },
      {
        _id: 2,
        type: "email",
        name: "email",
        id: "email",
        forElement: "email",
        placeholder: "Type Your email",
        label: "Your Email",
      },
      {
        _id: 3,
        type: "password",
        name: "password",
        id: "password",
        forElement: "password",
        placeholder: "Type Your password",
        label: "Your Password",
      },
    ],
    office: {
      title: "Our Office",
      items: [
        {
          id: 1,
          title: "Address",
          desc: "105 Street,New City,United State.",
          icon: "fas fa-map-marker-alt",
        },
        {
          id: 2,
          title: "Phone",
          desc: "(815)043-7769",
          icon: "fas fa-phone",
        },
        {
          id: 3,
          title: "Email",
          desc: "Mail@Example.Com",
          icon: "fas fa-at",
        },
      ],
    },
  };

  return (
    <div className="contact-form">
      <div className="container">
        <div className="office">
          <h4 className="heading-4">{data.office.title} </h4>
          <div className="office-info">
            {data.office.items.map((item) => {
              const { id, title, desc, icon } = item;
              return (
                <div className="office-info-wrapper" key={id}>
                  <i className={icon}></i>
                  <div className="content">
                    <span>{title}</span>
                    <p>{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <form action="" className="form">
          {data.form.map((item) => {
            const {
              _id,
              type,
              name,
              id,
              forElement,
              placeholder,
              label,
            } = item;
            return (
              <div className="form-group" key={_id}>
                <label htmlFor={forElement}>{label} </label>
                <input
                  type={type}
                  id={id}
                  name={name}
                  placeholder={placeholder}
                />
              </div>
            );
          })}
          <div className="form-group">
            <label htmlFor="textarea">Your Message </label>
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="10"
              placeholder="Type Message"
            ></textarea>
          </div>
          <button className="btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
