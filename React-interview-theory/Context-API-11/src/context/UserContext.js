import React from "react";
//step one context create kiya or yah yek provider hai
const UserContext = React.createContext(); //method hai

export default UserContext;

/*Ex:- Last me rapper lagayenge
<userContext>
    <Login />
    <Card>  ye pura component ko access mil jayeega  global context ka 
        <Data />
    </Card>
</userContext>*/ // to yah one provider hai
