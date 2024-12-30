import Form from "next/form";

export default function contactForm() {
  return (
    <Form>
      <input name="name" type="name" placeholder="Name" />
      <input name="surname" type="name" placeholder="Surname" />
      <input name="email" type="email" placeholder="Email" />
      <textarea placeholder="Message"></textarea>
      <button type="submit">
        Send <span>➔</span>
      </button>
    </Form>
  );
}
