/** @format */

import { z } from "zod";

export default function ValidateContactForm(name, surname, email, message) {
  const schemea = z.object({
    name: z
      .string()
      .trim()
      .min(1, { message: "Name field is required" })
      .max(10, { message: "Too many characters" }),
    surname: z
      .string()
      .trim()
      .min(1, { message: "Surname field is required" })
      .max(10, { message: "Too many characters" }),
    email: z
      .string()
      .email()
      .trim()
      .min(1, { message: "Email field is required" })
      .max(15, { message: "Too many characters" }),
    message: z
      .string()
      .trim()
      .min(1, { message: "Message field is required" })
      .max(200, { message: "Too many characters" }),
  });

  const validationResult = schemea.safeParse({
    name: name,
    surname: surname,
    email: email,
    message: message,
  });

  return validationResult;
}
