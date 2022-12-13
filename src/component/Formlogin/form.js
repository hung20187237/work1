import React from "react";

import "antd/dist/reset.css";
import { GoogleCircleFilled, FacebookOutlined, TwitterCircleFilled, GithubOutlined } from "@ant-design/icons";
import { Checkbox, Form, Input, Typography } from "antd";
import { ButtonStyled, Flex, H1, Li, Link, Ring, Span } from "./Styled";
const App = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Flex>
            <Checkbox />
            <H1>by signing up, I accept</H1>
            <Link>Term & Condition</Link>
          </Flex>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <ButtonStyled type="primary" htmlType="submit" className="login-form-button">
          Log in
        </ButtonStyled>
        <Span color="#565656">or</Span>
        <Link>Sign up</Link>
      </Form.Item>

      <Flex>
        <Span color="#565656">or connect with</Span>
        <Flex>
          <Li>
          <GoogleCircleFilled style={{color: "Highlight", fontSize: 24}}/>
          </Li>
          <Li>
          <FacebookOutlined style={{color: "Highlight", fontSize: 24}}/>
          </Li>
          <Li>
          <TwitterCircleFilled style={{color: "Highlight", fontSize: 24}}/>
          </Li>
          <Li>
          <GithubOutlined style={{color: "Highlight", fontSize: 24}}/>
          </Li>
        </Flex>
      </Flex>

      <Span color="#ababab" size ='12px'>demo user email: 'demo@example.com' and password: 'demo#123'</Span>
    </Form>
  );
};
export default App;
