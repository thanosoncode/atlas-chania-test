import * as React from "react";

interface NewsletterEmailTemplateProps {
  blog: {
    id: string;
    title: string;
    image: string;
  };
  subId: string;
}

const NewsletterEmailTemplate: React.FC<
  Readonly<NewsletterEmailTemplateProps>
> = ({ blog, subId }) => (
  <div>
    <h1 style={{ fontSize: "22px", fontWeight: "normal" }}>
      Atlas Chania newsletter!
    </h1>
    <div>
      <p style={{ fontWeight: "bold", fontSize: "20px" }}>{blog.title}</p>
      <a
        href={`https://www.atlaschania.gr/posts/${blog.id}`}
        style={{ display: "block" }}
      >
        {`https://www.atlaschania.gr/posts/${blog.id}`}
      </a>
    </div>
    <img
      src={blog.image}
      alt={blog.title}
      style={{ width: "340px", height: "280px", display: "block" }}
    />
    <div style={{ fontSize: "12px" }}>
      If you dont want to receive these emails you can{" "}
      <a
        href={`https://www.atlaschania.gr/unsubscribe/${subId}`}
        style={{ display: "block" }}
      >
        unsubscribe
      </a>
    </div>
  </div>
);

export default NewsletterEmailTemplate;
