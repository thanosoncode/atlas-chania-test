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
      Hello John! To <span className="text-bold">{email}</span> sou esteile to
      parakatw minima
    </p>
    <div>{message}</div>
  </div>
);

export default EmailTemplate;
