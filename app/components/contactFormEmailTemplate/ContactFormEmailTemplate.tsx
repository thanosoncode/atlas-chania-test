import * as React from "react";

interface ContactFormEmailTemplateProps {
  email: string;
  message: string;
}

const ContactFormEmailTemplate: React.FC<
  Readonly<ContactFormEmailTemplateProps>
> = ({ email, message }) => (
  <div>
    <p>
      <span className="font-bold">Νεο μήνυμα!</span>
    </p>
    <div>
      To <span className="text-bold mb-4">{email}</span> έστειλε το παρακάτω
      μήνυμα:
    </div>
    <div>{message}</div>
  </div>
);

export default ContactFormEmailTemplate;
