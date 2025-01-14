/** @format */
"use server";

import { sendMail } from "@/lib/send-mail";
import ValidateContactForm from "@/lib/validation/contact-form-validate";

export async function ContactUs(_, formData) {
  let errors = [];

  try {
    const name = formData.get("name");
    const surname = formData.get("surname");
    const email = formData.get("email");
    const message = formData.get("message");

    const validateResult = ValidateContactForm(name, surname, email, message);

    if (!validateResult.success) {
      // console.log(validateResult.error.issues)

      for (var i = 0; i < validateResult.error.issues.length; i++) {
        // errArr.push({ for: err[i].path[0], message: err[i].message });
        console.log(validateResult.error.issues[i].message, "JDAJKDJDAJKD")
      }

    }

  } catch (error) {
    console.log(error);
  }

  // const response = await sendMail({
  //   email: "ajkirwan1gmail.com",
  //   subject: "A test email",
  //   message: "Hello Jimmy",
  //   text: message,
  // });
}
