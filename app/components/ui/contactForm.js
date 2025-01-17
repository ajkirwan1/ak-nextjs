/** @format */

"use client";
import { useState } from "react";
import Form from "next/form";
import { ContactUs } from "@/server/actions/contact-us-action";
import { useActionState } from "react";

export default function ContactForm() {
  const initialState = {
    success: "",
    validationErrors: {
      name: "",
      surname: "",
      email: "",
      message: "",
    },
    dbError: "",
  };
  const [state, formAction, isPending] = useActionState(
    ContactUs,
    initialState
  );

  const [data, setData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const handleReset = () => {
    setData({ name: "", surname: "", email: "", message: "" });
    state.dbError = "";
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <>
      {state.dbError ? (
        <>
          <p>{state.dbError}</p>
          <button onClick={handleReset}>
            Try again <span>➔</span>
          </button>
        </>
      ) : (
        <Form action={formAction}>
          <input
            name="name"
            type="name"
            placeholder="Name"
            value={data.name}
            onChange={handleChange}
          />
          {state.validationErrors?.name && <p>{state.validationErrors.name}</p>}
          <input
            name="surname"
            type="name"
            placeholder="Surname"
            value={data.surname}
            onChange={handleChange}
          />
          {state.validationErrors?.surname && (
            <p>{state.validationErrors.surname}</p>
          )}
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
          />
          {state.validationErrors?.email && (
            <p>{state.validationErrors.email}</p>
          )}
          <textarea
            placeholder="Message"
            name="message"
            type="text"
            value={data.message}
            onChange={handleChange}
          />
          {state.validationErrors?.message && (
            <p>{state.validationErrors.message}</p>
          )}
          {isPending ? (
            <p>Your message is pending......</p>
          ) : (
            <button disabled={isPending} type="submit">
              Send <span>⇨</span>
            </button>
          )}
        </Form>
      )}
    </>
  );
}
