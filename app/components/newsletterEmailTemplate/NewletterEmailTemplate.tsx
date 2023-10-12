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
    <h1 className="text-xl font-normal">Atlas Chania newsletter!</h1>
    <p className="font-bold">{blog.title}</p>
    <img src={blog.image} alt={blog.title} className="w-40 h-40" />
    <a href={`https://www.atlaschania.gr/posts/${blog.id}`}>
      {`https://www.atlaschania.gr/posts/${blog.id}`}
    </a>
  </div>
);

export default NewsletterEmailTemplate;
