import React from "react";
import "./blog.scss";
import Cards from "../Cards/Cards";
import Button from "../../components/Button/Button";

function Blog({ content }) {
  return (
    <section>
      <div className="blog">
        <div className="blog_information">
          <p className="blog_title">Our Blog</p>
          <h1 className="blog_desc">
            Value proposition accelerator product management venture
          </h1>
        </div>
        <div className="blog_cards">
          {content.blogContent?.map((card) => {
            return (
              <Cards
                title={card.title}
                desc={card.desc}
                img={card.img}
                date={card.date}
                profileImg={card.profileImg}
                profileName={card.profileName}
              />
            );
          })}
        </div>
        <div className="blog_btn">
          <Button children={"Load More"} className={"primary-transparent"} />
        </div>
      </div>
    </section>
  );
}

export default Blog;
