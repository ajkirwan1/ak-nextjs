'use client'
import Form from "next/form";
import { ContactUs } from "@/server/actions/contact-us-action";
import { useActionState } from "react";

export default function ContactForm() {


  const [state, formAction] = useActionState(ContactUs);
  return (
    <Form action={formAction}>
      <input name="name" type="name" placeholder="Name" />
      <input name="surname" type="name" placeholder="Surname" />
      <input name="email" type="email" placeholder="Email" />
      <textarea placeholder="Message" name="message" type="text"></textarea>
      <button type="submit">
        Send <span>➔</span>
      </button>
    </Form>
  );
}
