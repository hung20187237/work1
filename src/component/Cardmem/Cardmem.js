import React, { useState, useEffect } from "react";
import {
  Button,
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
  Avatar,
  CardMedia,
} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import'./Card.css';



export default function Cardmem(a) {
  console.log(a)
  const img = a.a.image
  console.log(img)
  return (
    <div className="cardmem">
      <Card variant="outlined" sx={{ maxWidth: 350 }} elevation={6}>
        <CardMedia className="cardmedia">
          <Avatar alt="Remy Sharp" src={img} sx={{ width: 80, height: 80 }}/>
        </CardMedia>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            {a.a.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            CEO, Co-founder
          </Typography>
          <Typography variant="body2" textAlign='center'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum ab eum magni nobis autem dolorum!
          </Typography>
        </CardContent>
        <CardActions className="cardaction">
          <FacebookIcon fontSize="large"/>
          <TwitterIcon fontSize="large"/>
          <LinkedInIcon fontSize="large"/>
        </CardActions>
      </Card>
    </div>
  );
}
