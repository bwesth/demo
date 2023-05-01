import { useEffect, useState } from "react";
import Room from "./Room";

export default function RoomList({user}) {
  const [status, setStatus] = useState();
  const [rooms, setRooms] = useState([]);

  async function getAllRooms() {
    const response = await fetch("http://localhost:3001/room", {
      method: "get",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    });
    if (response) {
      const data = await response.json();
      setRooms(await JSON.parse(data.body));
      setStatus(data.statusText);
    }
  }

  useEffect(() => {
    getAllRooms();
  }, []);

  return (
    <div>
        <h1>Rooms!</h1>
      {rooms.map((room) => (
        <Room {...room} userId={user.id} />
      ))}
      {status && <h4>{status}</h4>}
    </div>
  );
}
