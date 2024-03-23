import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, email, subject, message
}) => (
  <>
    <h3>
      {"Thanks for contacting me through my website mzp.dev. I'll get back to you as soon as possible."}'
    </h3>
    <h3>
      If you have any additional questions, please feel free to reach out to me at: matt@mzp.dev
    </h3>
    <br />
    <br />
    <p>message below:</p>
    <h4>
      From {name} : {email}
    </h4>
    <h4>
      RE: {subject}
    </h4>
    <p>
      {message}
    </p>
  </>
);
