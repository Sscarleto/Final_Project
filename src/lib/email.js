import emailjs from "emailjs-com";

export const sendEmail = (email, name, twitter, github, linkedin) => {
  const templateParams = {
    email,
    name,
    twitter,
    github,
    linkedin,
  };

  emailjs
    .sendForm(
      "service_qbw6bvl",
      "template_8wdh4uc",
      templateParams,
      "N6e_mWCMxRfHtSYwB"
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("Email successfully sent!");
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send email.");
      }
    );
};
