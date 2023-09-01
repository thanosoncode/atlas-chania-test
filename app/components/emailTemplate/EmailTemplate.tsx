import * as React from "react";

interface EmailTemplateProps {
  email: string;
  message: string;
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  message,
}) => (
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

export default EmailTemplate;
