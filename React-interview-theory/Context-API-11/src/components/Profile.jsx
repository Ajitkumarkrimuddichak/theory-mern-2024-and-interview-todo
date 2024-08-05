import { useContext } from "react";
import UserContext from "../context/UserContext";
const Profile = () => {
  //user yek Object hai / user kaha se aaya hai to vah UserContextProvider se aaya hai
  const { user } = useContext(UserContext); // Yaha  Data le rahe hai

  if (!user) return <div className="text-center">Please Login</div>;

  return <div className="text-center">Welcome {user.username}</div>;
};

export default Profile;
