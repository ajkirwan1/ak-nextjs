/** @format */

"use client";
import { useState } from "react";
import Form from "next/form";
import { ContactUs } from "@/server/actions/contact-us-action";
import { useActionState } from "react";
import classes from "./contact-form.module.css";
import { motion } from "motion/react";

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
        <div className={classes.dbErrorWrapper}>
          <p>{state.dbError}</p>
          <div className={classes.buttonWrapper}>
            <motion.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
              onClick={handleReset}
            >
              TRY AGAIN <span></span>
            </motion.button>
          </div>
        </div>
      ) : (
        <Form className={classes.contactForm} action={formAction}>
          <div className={classes.inputWrapper}>
            <input
              name="name"
              type="name"
              placeholder="Name"
              value={data.name}
              onChange={handleChange}
            />
            {state.validationErrors?.name && (
              <p>{state.validationErrors.name}</p>
            )}
          </div>

          <div className={classes.inputWrapper}>
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
          </div>

          <div className={classes.inputWrapper}>
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
          </div>

          <div className={classes.inputWrapper}>
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
          </div>

          {isPending ? (
            <p>Your message is pending...</p>
          ) : (
            <div className={classes.buttonWrapper}>
              <motion.button
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
                disabled={isPending}
                type="submit"
              >
                SEND <span></span>
              </motion.button>
            </div>
          )}
        </Form>
      )}
    </>
  );
}
