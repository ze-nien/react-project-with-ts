import React, { useRef, useState, type FormEvent } from "react";

type formData = {
  name: string;
  email: string;
  password: string;
};

const From = () => {
  const [submittedData, setSubmittedData] = useState<formData>({
    name: "",
    email: "",
    password: "",
  });

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nameValue = name.current!.value;
    const emailValue = email.current!.value;
    const passwordValue = password.current!.value;

    setSubmittedData({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    });
  };
  return (
    <form onSubmit={handleSumbit}>
      <input type="text" placeholder="enter your name" ref={name} />
      <input type="email" placeholder="enter your email" ref={email} />
      <input type="password" placeholder="enter your password" ref={password} />
      <button type="submit">sumbit</button>

      <section>
        <h1>name: {submittedData.name}</h1>
        <h1>email: {submittedData.email}</h1>
        <h1>password: {submittedData.password}</h1>
      </section>
    </form>
  );
};

export default From;
