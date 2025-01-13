/** @format */
"use server";

import { sendMail } from "@/lib/send-mail";

export async function ContactUs(_, formData) {

    // const message = formData.get("message");
    const name = formData.get("name");
    const surname = formData.get("surname");
    const email = formData.get("email");


    // console.log(message);
    console.log(name);
    console.log(surname);
    console.log(email);


      // const response = await sendMail({
  //   email: "ajkirwan1gmail.com",
  //   subject: "A test email",
  //   message: "Hello Jimmy",
  //   text: message,
  // });

}