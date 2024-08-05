import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #111111;
  align-items: center;
  margin-top: 20px;
`; //As a function create

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  background: #002984;
  width: 160px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-decoration: none;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: #4dabf5;
    transform: scale(1.05);
  }
`;

const NavBar = () => {
  return (
    // Note:- Material UI ko used karane ka ye fayada hai ki components me Predefind css hote hai
    // Note:- p Tag to replace Typography same work.
    // Note:- Ab bat hai styling ka to TailWindcss,BootStrap,css,MUI bhi deta hai , Aap kisi se kar sakate hai
    <Header position="static">
      <Toolbar>
        <Tabs to="/">Home</Tabs>
        <Tabs to="/all">All Users</Tabs>
        <Tabs to="/add">Add User</Tabs>
      </Toolbar>
    </Header>
  );
};

export default NavBar;
