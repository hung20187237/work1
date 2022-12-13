import React from "react";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Container,
  Box,
  Button,
  Typography,
  InputBase,
  Stack,
  Paper,
  TextField,
} from "@mui/material";
import "./Test3.css";

const rows = [];

const columns = [
  { field: "id", headerName: "ID", minWidth: 70, flex: 1 },
  { field: "name", headerName: "Name", minWidth: 130, flex: 4 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    minWidth: 90,
    flex: 1,
  },
  {
    field: "address",
    headerName: "Address",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    minWidth: 160,
    flex: 4,
  },
];

export default function Test3() {
  const [user, setUsers] = useState(rows);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const nameadd = useRef();
  const ageadd = useRef();
  const addressadd = useRef();
  const idadd = useRef();

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(
        "https://63624b0c7521369cd069c711.mockapi.io/users"
      );
      setUsers(
        res.data.sort((p1, p2) => {
          return p2.id - p1.id;
        })
      );
    };
    fetchUsers();
  }, []);
  console.log(user);

  const handleShow = () => {
    setShow(!show);
    setShow1(false);
  };
  const handleShow1 = () => {
    setShow1(!show1);
    setShow(false);
  };
  const handleShow2 = () => {
    setShow2(!show2);
    setShow(false);
    setShow1(false);
  };

  const handleUserSubmit = async (e) => {
    console.log(nameadd.current);
    const newUser = {
      name: nameadd.current.value,
      age: ageadd.current.value,
      address: addressadd.current.value,
    };
    console.log(newUser);
    try {
      await axios.post(
        "https://63624b0c7521369cd069c711.mockapi.io/users",
        newUser
      );
      window.location.reload();
    } catch (err) {}
  };

  const handleEditSubmit = async (e) => {
    const newUser = {
      name: nameadd.current.value,
      age: ageadd.current.value,
      address: addressadd.current.value,
    };
    const iduser = idadd.current.value;
    console.log(newUser);
    try {
      await axios.put(
        `https://63624b0c7521369cd069c711.mockapi.io/users/${iduser}`,
        newUser
      );
      window.location.reload();
    } catch (err) {}
  };

  const handleDeleteSubmit = async (e) => {
    const iduser = idadd.current.value;
    try {
      await axios.delete(
        `https://63624b0c7521369cd069c711.mockapi.io/users/${iduser}`
      );
      window.location.reload();
    } catch (err) {}
  };

  const AddUser = () => {
    return (
      <Container style={{ width: "50%", padding: "4vh 0" }}>
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{ display: "flex", justifyContent: "center", marginTop: "8px" }}
        >
          Add user
        </Typography>

        <Stack spacing={2} margin="auto">
          <Box display="flex" alignItems="center">
            <Typography sx={{ width: "15%" }}>Name:</Typography>
            <TextField
              id="outlined-required"
              placeholder="Name"
              size="small"
              sx={{ width: "85%" }}
              inputRef={nameadd}
            />
          </Box>
          <Box display="flex" alignItems="center">
            <Typography sx={{ width: "15%" }}>Age:</Typography>
            <TextField
              id="outlined-required"
              placeholder="age"
              size="small"
              sx={{ width: "85%" }}
              inputRef={ageadd}
            />
          </Box>
          <Box display="flex" alignItems="center">
            <Typography sx={{ width: "15%" }}>Address:</Typography>
            <TextField
              id="outlined-required"
              placeholder="Address"
              size="small"
              sx={{ width: "85%" }}
              inputRef={addressadd}
            />
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            className="buttonsub"
          >
            <Button variant="contained" onClick={handleUserSubmit}>
              Submit
            </Button>
          </Box>
        </Stack>
      </Container>
    );
  };

  const EditUser = () => {
    return (
      <Container style={{ width: "50%", padding: "4vh 0" }}>
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{ display: "flex", justifyContent: "center", marginTop: "8px" }}
        >
          Edit user
        </Typography>

        <Stack spacing={2} margin="auto">
          <Box display="flex" alignItems="center">
            <Typography sx={{ width: "15%" }}>ID:</Typography>
            <TextField
              id="outlined-required"
              placeholder="Name"
              size="small"
              sx={{ width: "85%" }}
              inputRef={idadd}
            />
          </Box>
          <Box display="flex" alignItems="center">
            <Typography sx={{ width: "15%" }}>Name:</Typography>
            <TextField
              id="outlined-required"
              placeholder="Name"
              size="small"
              sx={{ width: "85%" }}
              inputRef={nameadd}
            />
          </Box>
          <Box display="flex" alignItems="center">
            <Typography sx={{ width: "15%" }}>Age:</Typography>
            <TextField
              id="outlined-required"
              placeholder="age"
              size="small"
              sx={{ width: "85%" }}
              inputRef={ageadd}
            />
          </Box>
          <Box display="flex" alignItems="center">
            <Typography sx={{ width: "15%" }}>Address:</Typography>
            <TextField
              id="outlined-required"
              placeholder="Address"
              size="small"
              sx={{ width: "85%" }}
              inputRef={addressadd}
            />
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            className="buttonsub"
          >
            <Button variant="contained" onClick={handleEditSubmit}>
              Submit
            </Button>
          </Box>
        </Stack>
      </Container>
    );
  };

  const DeleteUser = () => {
    return (
      <Container style={{ width: "50%", padding: "4vh 0" }}>
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{ display: "flex", justifyContent: "center", marginTop: "8px" }}
        >
          Delete user
        </Typography>

        <Stack spacing={2} margin="auto">
          <Box display="flex" alignItems="center">
            <Typography sx={{ width: "15%" }}>ID:</Typography>
            <TextField
              id="outlined-required"
              placeholder="Name"
              size="small"
              sx={{ width: "85%" }}
              inputRef={idadd}
            />
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            className="buttonsub"
          >
            <Button variant="contained" onClick={handleDeleteSubmit}>
              Submit
            </Button>
          </Box>
        </Stack>
      </Container>
    );
  };

  return (
    <Container style={{ height: 500, width: "100%", paddingTop: "8vh" }}>
      <DataGrid
        rows={user}
        columns={columns}
        autoPageSize={true}
        rowsPerPageOptions={[7]}
      />
      <Box
        display="flex"
        width="50%"
        justifyContent="space-between"
        margin="auto"
      >
        <Button variant="contained" onClick={handleShow}>
          Add
        </Button>
        <Button variant="outlined" onClick={handleShow1}>
          Edit
        </Button>
        <Button variant="contained" color="error" onClick={handleShow2}>
          Delete
        </Button>
      </Box>
      {show ? <AddUser /> : null}
      {show1 ? <EditUser /> : null}
      {show2 ? <DeleteUser /> : null}
    </Container>
  );
}
