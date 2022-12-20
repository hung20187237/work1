import React from "react";

import { useState, useEffect, useRef } from "react";
import Logo from "../../asset/img/logo.png";
import { Layout, Input, theme } from "antd";
import {
  Avatar,
  Box,
  BoxIcon,
  BoxMenu,
  BoxScroll,
  Button,
  CardUser,
  ContentStyled,
  Flex,
  Footerstyled,
  HeaderStyled,
  Li,
  List,
  MenuIcon,
  MenuItem,
  PropsBox,
  ScrollBar,
  SiderAdmin,
  Sidercus,
  SiderHeader,
  SiderStyled,
  SpanAvatar,
  SpanName,
  Text,
} from "./Styled";
import {
  DashboardOutlined,
  DownOutlined,
  SearchOutlined,
  BellOutlined,
  CommentOutlined,
  UnorderedListOutlined,
  MailOutlined,
  CheckSquareOutlined,
  MessageOutlined,
  ShoppingCartOutlined,
  PlusOutlined,
  StarTwoTone,
  MenuUnfoldOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { BsCurrencyBitcoin, BsListUl } from "react-icons/bs";
import { TiFlowMerge, TiContacts } from "react-icons/ti";
import { MdWidgets } from "react-icons/md";
import { IoAppsSharp } from "react-icons/io5";
import { GoCreditCard } from "react-icons/go";
import { TbIcons, TbRefreshDot } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { IoPersonCircle } from "react-icons/io5";
import { GiUsaFlag } from "react-icons/gi";
import Checkboxcontent from "../../component/Checkbox/Checkbox";
import Language from "../../component/Language/Language";


function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(
    "Main",
    "grp1",
    null,
    [
      getItem("Dashboard", "sub1", <DashboardOutlined />, [
        getItem("Crypto", "1", <BsCurrencyBitcoin />),
        getItem("Crm", "2", <TiFlowMerge />),
        getItem("Listing", "3", <UnorderedListOutlined />),
      ]),
      getItem("Widgets", "sub2", <MdWidgets />),
      getItem("Metrics", "sub3", <IoAppsSharp />),
      getItem("Layouts", "sub4", <GoCreditCard />),
    ],
    "group"
  ),
  getItem(
    "In-built Apps",
    "grp2",
    null,
    [
      getItem("Mail App", "sub5", <MailOutlined />),
      getItem("Todo App", "sub6", <CheckSquareOutlined />),
      getItem("Contacts App", "sub7", <TiContacts />),
      getItem("Chat App", "sub9", <MessageOutlined />),
      getItem("Algolia", "sub10", <ShoppingCartOutlined />),
      getItem("Firebase CRUD", "sub11", <TbIcons />),
    ],
    "group"
  ),
  getItem(
    "Social Apps",
    "grp3",
    null,
    [
      getItem("Profile", "13", <IoPersonCircle />),
      getItem("Wall App", "14", <CgProfile />),
    ],
    "group"
  ),
];

const Iconitems = [BellOutlined, SearchOutlined, CommentOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
  })
);



const Test4_2 = () => {

  const [show, setShow] = useState(false)


  const handleShow = () => {
    setShow(!show)
  }

  return (
    <Layout hasSider style={{ width: "100%", height: "100vh" }}>
      <SiderStyled
        style={{
          overflow: "auto",
          height: "100vh",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <SiderHeader>
          <img src={Logo} style={{ display: "flex", margin: "17px 0" }} />
        </SiderHeader>
        <SiderAdmin>
          <CardUser>
            <SpanAvatar>
              <Avatar src="https://wieldy.g-axon.work/assets/images/avatar/domnic-harris.png" />
            </SpanAvatar>
            <SpanName>
              Rob Farnandies
              <DownOutlined style={{ fontSize: 8, marginLeft: "0.5rem" }} />
            </SpanName>
          </CardUser>
          <MenuIcon theme="dark" mode="horizontal" items={Iconitems} />
        </SiderAdmin>
        <BoxScroll>
          <BoxMenu>
            <MenuItem theme="dark" mode="inline" items={items} />
          </BoxMenu>
          <ScrollBar />
        </BoxScroll>
      </SiderStyled>
      <Layout className="site-layout">
        <HeaderStyled>
          {show?<Language/>:null}
          <Flex wid="100%">
            <PropsBox wid="350px" display="block">
              <PropsBox wid="100%" heg="100%" display="flex">
                <SearchOutlined
                  style={{
                    height: "46px",
                    alignItems: "center",
                    display: "flex",
                  }}
                />
                <Input
                  placeholder="Search in app..."
                  bordered={false}
                  style={{ height: "46px", padding: "10px 18px 10px 18px" }}
                />
              </PropsBox>
            </PropsBox>
            <Flex wid="100px" style={{ alignItems: "center" }} onClick={handleShow}>
              <GiUsaFlag style={{ width: "24px", height: " 24px" }} />
              <Text>English</Text>
              <DownOutlined />
            </Flex>
          </Flex>
        </HeaderStyled>
        <Layout>
          <Sidercus className="sidercontent">
            <Box className="boxheader">
              <Box className="boxcard">
                <TiContacts
                  style={{
                    fontSize: "40px",
                    lineHeight: "28px",
                    marginRight: "1rem",
                  }}
                />
                <Text className="textcard">Contacts</Text>
              </Box>
            </Box>
            <Box className="boxcontent">
              <Box className="contentmain">
                <Box className="contentscroll">
                  <Box className="boxadd">
                    <Button className="buttonadd">
                      <PlusOutlined style={{ marginRight: "0.5rem" }} />
                      <Text className="buttontext">Add New Contact</Text>
                    </Button>
                  </Box>
                  <Box className="boxnav">
                    <List className="listsider">
                      <Li>
                        <Text className="textli blue">
                          <BsListUl
                            style={{ marginRight: "16px", fontSize: "16px" }}
                          />
                          <Text className="blue">All contacts</Text>
                        </Text>
                      </Li>
                      <Li>
                        <Text className="textli">
                          <TbRefreshDot
                            style={{ marginRight: "16px", fontSize: "16px" }}
                          />
                          <Text>Frequently contacted</Text>
                        </Text>
                      </Li>
                      <Li>
                        <Text className="textli">
                          <StarOutlined
                            style={{ marginRight: "16px", fontSize: "16px" }}
                          />
                          <Text>Starred contacts</Text>
                        </Text>
                      </Li>
                    </List>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Sidercus>
          <ContentStyled>
            <Box className="flex headercontent">
              <Flex direction="row">
                <Box className="menumedia">
                  <MenuUnfoldOutlined
                    style={{
                      fontSize: "20px",
                      alignItems: "center",
                      cursor: "pointer",
                      display: "flex",
                      width: '40px',
                      height: '40px',
                      borderRadius: '2px'
                    }}
                  />
                </Box>
                <Box className="searchbarcontent">
                  <PropsBox wid="100%" heg="100%" display="flex">
                    <SearchOutlined
                      style={{
                        height: "46px",
                        alignItems: "center",
                        display: "flex",
                      }}
                    />
                    <Input
                      placeholder="Search cont..."
                      bordered={false}
                      style={{ height: "46px", padding: "10px 18px 10px 18px" }}
                    />
                  </PropsBox>
                </Box>
                <Flex direction="row" className="marginauto">
                  <BoxIcon>
                    <IoAppsSharp className="iconapp" style={{ fontSize: "24px"}} />
                  </BoxIcon>
                  <BoxIcon>
                    <BellOutlined
                      style={{ fontSize: "22px" }}
                    />
                  </BoxIcon>
                </Flex>
              </Flex>
            </Box>

            <Box className="flex modulebox">
              <Checkboxcontent/>
            </Box>
          </ContentStyled>
        </Layout>

        <Footerstyled
        >Copyright Company Name © 201
        </Footerstyled>
      </Layout>
    </Layout>
  );
};
export default Test4_2;
