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
    <h1 className="text-xl">Atlas Chania newsletter!</h1>
    <p>{blog.title}</p>
    <a href={`https://www.atlaschania.gr/confirm/${blog.id}`}>
      {`https://www.atlaschania.gr/confirm/${blog.id}`}
    </a>
  </div>
);

export default NewsletterEmailTemplate;
