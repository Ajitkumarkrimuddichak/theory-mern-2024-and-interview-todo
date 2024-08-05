import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  Button,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getUser, editUser } from "../service/Api.jsx";
import { useNavigate, useParams } from "react-router-dom";

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

const EditUsers = () => {
  const [user, setUser] = useState(initialValues);
  const navigate = useNavigate(); // Jaise hi user ADD USER pe click kare to re-direct next page pe ho to used karate hai useNavigate
  const { id } = useParams();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    let response = await getUser(id);
    //console.log(response);
    setUser(response.data);
  };

  const onvalueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    //console.log(user);
  };

  const addUserDetails = async () => {
    await editUser(user, id);
    navigate("/all");
  };

  return (
    <Container>
      <Typography variant="h4">Edit Form</Typography>
      {/* form ka two part hota hai , controle component banaya hai jo ham karenge controle "value" likhana hoga */}
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input
          onChange={(e) => onvalueChange(e)}
          name="name"
          value={user.name}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input
          onChange={(e) => onvalueChange(e)}
          name="username"
          value={user.username}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input
          onChange={(e) => onvalueChange(e)}
          name="email"
          value={user.email}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input
          onChange={(e) => onvalueChange(e)}
          name="phone"
          value={user.phone}
        />
      </FormControl>

      <FormControl>
        <Button onClick={() => addUserDetails()} variant="contained">
          EDIT USER
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditUsers;
