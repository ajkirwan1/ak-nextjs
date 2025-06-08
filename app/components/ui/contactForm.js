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

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  return (
    <>
      {success && (
        <p className={classes.success}>
          Thanks! We will get back to you within 24 hours.
        </p>
      )}
      {error && <p className={classes.error}>{error}</p>}

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
        <form
          className={classes.contactForm}
          onSubmit={(e) => {
            e.preventDefault();

            fetch("https://formsubmit.co/akdevelopmentstudio@gmail.com", {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              body: new URLSearchParams(data).toString(),
            })
              .then((res) => {
                if (res.ok) {
                  setSuccess(true);
                  setData({ name: "", surname: "", email: "", message: "" });
                }
              })
              .catch(() => {
                setError("There was a problem submitting your form.");
              });
          }}
        >
          <div className={classes.inputWrapper}>
            <input
              name="name"
              type="text"
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
              type="text"
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
            <input
              type="hidden"
              name="_next"
              value="http://localhost:3000/thank-you"
            />
          </div>
          <div className={classes.inputWrapper}>
            <textarea
              placeholder="Message"
              name="message"
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
        </form>
      )}
    </>
  );
}
