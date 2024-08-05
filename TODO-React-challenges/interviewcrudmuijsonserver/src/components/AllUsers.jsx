import { useState, useEffect } from "react";

import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
  styled,
} from "@mui/material";
import { getUsers, deleteUser } from "../service/Api";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
  & > th {
    font-size: 18px;
    background: #00bcd4;
    color: #ffffff;
  }
`;

const TRow = styled(TableRow)`
  & > td {
    font-size: 16px;
  }
`;

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUsers();
    // console.log(response);
    setUsers(response?.data);
  };

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {users?.map((user) => (
          <TRow key={user.id}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button
                color="primary"
                variant="contained"
                style={{ marginRight: 5 }}
                component={Link}
                to={`/edit/${user.id}`}
              >
                Edit
              </Button>
              <Button
                color="secondary"
                variant="contained"
                onClick={() => deleteUserData(user.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default AllUsers;
