import * as React from "react";

interface ConfirmEmailEmailTemplateProps {
  email: string;
  confirmUrl: string;
}

const ConfirmEmailEmailTemplate: React.FC<
  Readonly<ConfirmEmailEmailTemplateProps>
> = ({ email, confirmUrl }) => (
  <div className="flex flex-col  gap-6 items-center justify-center">
    <h1>
      Επιβεβαιώστε το email σας για να εγγραφείτε στο Atlas Chania newsletter!
    </h1>
    <p>
      Μόλις επιβαιώσετε το {email} είναι δικό σας θα εγγραφείτε στο newsletter
      μας και θα αρχίσετε να λαμβάνετε links με τα τελευταία άρθρα μας, νέα και
      προσφορές.
    </p>
    <a href={confirmUrl} target="_blank" rel="noopener">
      {confirmUrl}
    </a>
    <p>
      Αν δεν κάνατε εσείς αυτό το αίτημα μπορείτε με ασφάλεια να αγνοήσετε αυτό
      το email.
    </p>
  </div>
);

export default ConfirmEmailEmailTemplate;
