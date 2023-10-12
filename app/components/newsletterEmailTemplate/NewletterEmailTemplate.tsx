import * as React from "react";

interface NewsletterEmailTemplateProps {
  blog: {
    id: string;
    title: string;
    image: string;
  };
}

const NewsletterEmailTemplate: React.FC<
  Readonly<NewsletterEmailTemplateProps>
> = ({ blog }) => (
  <div className="flex flex-col  gap-6 items-center justify-center">
    <h1 style={{ fontSize: "22px", fontWeight: "normal" }}>
      Atlas Chania newsletter!
    </h1>
    <p style={{ fontWeight: "bold" }}>{blog.title}</p>
    <img
      src={blog.image}
      alt={blog.title}
      style={{ width: "200px", height: "120px" }}
    />
    <a href={`https://www.atlaschania.gr/posts/${blog.id}`}>
      {`https://www.atlaschania.gr/posts/${blog.id}`}
    </a>
  </div>
);

export default NewsletterEmailTemplate;
