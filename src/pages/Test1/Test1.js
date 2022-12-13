import "./Test1.css";
import { Container, } from "@mui/material";
import Cardmem from "../../component/Cardmem/Cardmem";
import Headerh from "../../component/Header/Headerh";
import {Data} from '../../Data'


function Test1() {
  return (
    <div className="main">
      <Headerh />
      <Container className="bodytable">
        {Data.map((data) => (
          <Cardmem a = {data}/>
        ))}
        
      </Container>
    </div>
  );
}

export default Test1;
