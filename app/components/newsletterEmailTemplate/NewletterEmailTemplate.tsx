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
  <div>
    <div className="flex flex-col  gap-6 items-center justify-center">
      <h1 style={{ fontSize: "22px", fontWeight: "normal" }}>
        Atlas Chania newsletter!
      </h1>
      <p style={{ fontWeight: "bold", fontSize: "20px" }}>{blog.title}</p>
      <img
        src={blog.image}
        alt={blog.title}
        style={{ width: "340px", height: "280px", display: "block" }}
      />
      <a
        href={`https://www.atlaschania.gr/posts/${blog.id}`}
        style={{ display: "block" }}
      >
        {`https://www.atlaschania.gr/posts/${blog.id}`}
      </a>
    </div>
  </div>
);

export default NewsletterEmailTemplate;
