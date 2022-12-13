import React from "react";

import "antd/dist/reset.css";
import { PropsBox, Title, Wrapper, H1, BgBox, BoxText } from "./style";
import img from "../../asset/img/imager_45009.jpg";
import logo from "../../asset/img/logo.png";
import Formlg from "../../component/Formlogin/form";

export default function Test4_1() {
  return (
    <Wrapper>
      <PropsBox flex="4" left="15px" right="0">
        <BgBox background="rgba(3,143,222,0.7)" image = {img} opa = '0.5'/>
        <BoxText zindx = '2'>
          <Title>Sign in</Title>
          <H1>By Signing Up, you can avail full features of our services.</H1>
          <H1>Get an account !!!</H1>
        </BoxText>
        <BoxText zindx = '2'><img src={logo}/></BoxText>
      </PropsBox>
      <PropsBox background="white" flex="6" radius="0" right="15px">
        <Formlg/>
      </PropsBox>
    </Wrapper>
  );
}
