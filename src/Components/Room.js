import { useState } from "react";

export default function Room(props) {
  const [status, setStatus] = useState();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();

  async function bookRoom() {
    const response = await fetch("http://localhost:3001/room/" + props.id, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        roomId: props.id,
        userId: props.userId,
        from: from,
        to: to,
      }),
    });
    if (response) {
      const { statusText } = response;
      setStatus(statusText);
    }
  }

  function handleFromChange(event) {
    setFrom(event.target.value);
  }

  function handleToChange(event) {
    setTo(event.target.value);
  }

  return (
    <div>
      <p>{props.name}</p>
      <p>{props.address}</p>
      <p>{props.floor}</p>
      <p>{props.number}</p>
      <p>{props.people}</p>
      {props.gear.map((gear) => (
        <p>{gear}</p>
      ))}
      <p>{props.bookings}</p>
      <p>{props.userRights}</p>
      <hl />
      <label htmlFor="from"></label>
      <input
        type={"date"}
        name="from"
        value={from}
        onChange={handleFromChange}
      />
      <label htmlFor="to"></label>
      <input type={"date"} name="to" value={to} onChange={handleToChange} />
      <button onClick={bookRoom}>Book room</button>
      {status && <h4>status</h4>}
    </div>
  );
}
