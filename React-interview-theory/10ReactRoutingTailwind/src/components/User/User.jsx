import { useParams } from "react-router-dom"; // useParams method hai
const User = () => {
  const { userid } = useParams(); //ise used karane se jo bhi url me denge to vah display hojayega
  return <div className="bg-red-500 text-center text-2xl">User :{userid} </div>;
};

export default User;
