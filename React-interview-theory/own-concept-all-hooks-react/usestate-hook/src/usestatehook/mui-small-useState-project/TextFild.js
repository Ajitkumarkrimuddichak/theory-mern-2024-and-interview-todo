import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./Text.css";

const TextFild = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };

  return (
    <>
      <div className="container">
        <div className="row text">
          <div className="col-8">
            <Stack spacing={4} direction="row" mt="50px">
              <TextField
                value={name}
                onChange={(event) => setName(event.target.value)}
                id="outlined-basic"
                type="text"
                label="Enter-Name"
                variant="outlined"
              />
              <TextField
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                id="outlined-password-input"
                type="email"
                label="Enter-Email"
                variant="outlined"
              />

              <Button onClick={addData} size="large" variant="contained">
                <AddIcon />
              </Button>
            </Stack>
          </div>
          <div className="col-3">
            <ImageList
              sx={{ width: 400, height: 400, mt: 5 }}
              cols={3}
              rowHeight={124}
            >
              <ImageListItem>
                <img
                  src="https://img.freepik.com/premium-wektory/administratorzy-systemu-lub-administratorzy-systemu-obsluguja-szafy-serwerowe-administracja-systemem-utrzymanie_566886-3190.jpg"
                  alt="img"
                  loading="lazy"
                />
              </ImageListItem>
            </ImageList>
          </div>

          <div className="data">
            <div className="dataval">
              <h4>Name </h4>
              <h4>Email</h4>
              <h4>Remove</h4>
            </div>
            {data.map((element, index) => {
              return (
                <div>
                  <h4 className="dataval" key={index}>
                    {element.name} {element.email}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TextFild;
