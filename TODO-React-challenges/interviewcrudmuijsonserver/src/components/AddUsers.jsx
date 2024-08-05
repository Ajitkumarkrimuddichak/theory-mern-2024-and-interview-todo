import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  Button,
  styled,
} from "@mui/material";
import { useState } from "react";
import { addUser } from "../service/Api.jsx";
import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 10px;
  }
`;

const initialValues = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const AddUsers = () => {
  const [user, setUser] = useState(initialValues);
  const navigate = useNavigate(); // Jaise hi user ADD USER pe click kare to re-direct next page pe ho to used karate hai useNavigate

  const onvalueChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name, e.target.value);

    setUser({ ...user, [e.target.name]: e.target.value });
    //console.log(user);
  };

  const addUserDetails = async () => {
    await addUser(user);
    navigate("/all");
  };

  return (
    <Container>
      <Typography variant="h4">User Form</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onvalueChange(e)} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e) => onvalueChange(e)} name="username" />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onvalueChange(e)} name="email" />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onvalueChange(e)} name="phone" />
      </FormControl>

      <FormControl>
        <Button onClick={() => addUserDetails()} variant="contained">
          ADD USER
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddUsers;
