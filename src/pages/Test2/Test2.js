import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  Box,
  Typography,
  Container,
  Stack,
  Divider,
  InputBase,
  Paper,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import "./Test2.css";

const liststext = [
  "Learn Javascript",
  "Learn React",
  "Build a React App",
  "abc",
];

export default function Test2() {
  const [checked, setChecked] = useState([0]);
  const [show, setShow] = useState(false)
  const [messages, setMessages] = useState(liststext);
  let listadd = []


  const handleToggle = (index) => () => {
    const currentIndex = checked.indexOf(index);
    const newChecked = [...checked];
    

    if (currentIndex === -1) {
      newChecked.push(index);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const handleShow = () => {
    setShow(!show)
  }

  const newList = (text) => {
    listadd = messages.concat(text)
  }
  const pushList = () => {
    setMessages(listadd)
  }


  console.log(messages)
  const AddNewList = () => {
    
    return(
      <Paper
        component="form"
        sx={{
          m: "0px 24px",
          display: "flex",
          alignItems: "center",
          width: "auto",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Add New"
          inputProps={{ "aria-label": "Add New" }}
          onChange = {(e) => {
            console.log(e.target.value)
            newList(e.target.value)
          }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Button color="primary" sx={{ p: "10px" }} aria-label="directions" onClick={pushList}>
          Add
        </Button>
      </Paper>
    )
  }


  return (
    <Container className="maintest2">
      <Typography
        variant="h4"
        component="div"
        gutterBottom
        sx={{ display: "flex", justifyContent: "center", marginTop: "8px" }}
      >
        THINGS TO DO
      </Typography>
      {show?<AddNewList/>:null}
      <Box sx={{ pb: 7 }} className="boxmain">
        <CssBaseline />
        <List className="listtest2">
          {messages.map((list, index) => {
            const labelId = `checkbox-list-label-${index}`;
            return (
              <ListItem className="listitem" key={index} disablePadding>
                <ListItemButton
                  role={undefined}
                  onClick={handleToggle(index)}
                  dense
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(index) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    id={labelId}
                    primary={
                      checked.indexOf(index) !== -1 ? (
                        <Typography
                          sx={{
                            display: "inline",
                            textDecoration: "line-through",
                          }}
                          component="span"
                          variant="body2"
                          color="text.secondary"
                        >
                          {list}
                        </Typography>
                      ) : (
                        <Typography
                          sx={{
                            display: "inline",
                          }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {list}
                        </Typography>
                      )
                    }
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
      <Stack className="stackbottom" direction="row">
        <Box className="boxicon" >
          <div onClick={handleShow}><AddIcon fontSize="large"/></div>
          <div><SearchIcon fontSize="large" /></div>
        </Box>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {`${messages.length} items left`}
        </Typography>
      </Stack>
    </Container>
  );
}
