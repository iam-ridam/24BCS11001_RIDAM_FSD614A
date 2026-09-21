import userContext from "./UserContext";
import {useContext} from "react";

export default function Home() {
  const user = useContext(userContext);

  return (
    <>
    <h3>Home Page</h3>
      <div>
      <h2>Profile Page</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Year: {user.year}</p>
    </div>
    </>
    )
}