import userContext from "./UserContext";
import {useContext} from "react";
export default function Profile() {
    const user = useContext(userContext);   
  return (
    
    <div>
      <h2>Profile Page</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Year: {user.year}</p>
    </div>
  );
}

