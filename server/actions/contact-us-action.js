/** @format */
"use server";

import { sendMail } from "@/lib/send-mail";
import ValidateContactForm from "@/lib/validation/contact-form-validate";

export async function ContactUs(_, formData) {
  // let validationErrors = [];
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const name = formData.get("name");
  const surname = formData.get("surname");
  const email = formData.get("email");
  const message = formData.get("message");

  const validateResult = ValidateContactForm(name, surname, email, message);

  if (!validateResult.success) {
    const formFieldErrors = validateResult.error.flatten().fieldErrors;

    return {
      validationErrors: {
        name: formFieldErrors?.name,
        surname: formFieldErrors?.surname,
        email: formFieldErrors?.email,
        message: formFieldErrors?.message,
      },
    };
  }

  try {
    throw Error;
    // for (var i = 0; i < validateResult.error.issues.length; i++) {
    //   validationErrors.push({ fields: err[i].path[0], message: err[i].message });
    //   console.log(validateResult.error.issues[i], "JDAJKDJDAJKD")
    // }

    // const response = await sendMail({
    //   email: "ajkirwan1gmail.com",
    //   subject: "A test email",
    //   message: "Hello Jimmy",
    //   text: message,
    // });
    return {
      success: "Your message was sent successfully!",
    };
  } catch (error) {
    return { dbError: "An error occured submitting your message" };
  }
}
