import { useState } from "react";

export default function SignUp({setUser}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    const response = await fetch("http://localhost:3001/user", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(user),
    });
    if (response) {
        console.log(response.status);
        const data = await response.json()
      setUser(await JSON.parse(data.body))
      setEmail("");
      setPassword("");
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          onChange={handleEmailChange}
          value={email}
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          onChange={handlePasswordChange}
          value={password}
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}
