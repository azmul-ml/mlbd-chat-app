import React, {useState} from "react";
import { Form, Input, Button, Row, Col } from 'antd';
import { useHistory, Link } from "react-router-dom";

import { useAppDispatch } from "../../../app/hooks";
import { loginUser } from "../redux/auth.slice";
import { LoginCredentials } from "../types/auth.types";

export default function Login() {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  let history = useHistory();
  const [isSubmit, setisSubmit] = useState(false);

  const handleSubmit = async (values: LoginCredentials) => {
    try {
      const response = await dispatch(loginUser(values));
      if (response.payload.data) {
        history.push("/app");
      }
    } finally {
      setisSubmit(false);
    }
  };

  return (
    <div>
      <Row justify="center">
         <Col md={10} sm={24}>
             <h1>Login!</h1>
         </Col>
      </Row>

      <Form
          name="login"
          form={form}
          onFinish={handleSubmit}
          layout="vertical"
          initialValues={{ email: "", password: "" }}
        >
       <Row justify="center">
         <Col md={10} sm={24}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input type="email" />
          </Form.Item>
        </Col>
        </Row>
        <Row justify="center">
         <Col md={10} sm={24}>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          </Col>
        </Row>

        <Row justify="center">
         <Col md={10} sm={24}>
          <Form.Item>
            <Button type="primary" loading={isSubmit} htmlType="submit">
              Login
            </Button>
          </Form.Item>
          </Col>
        </Row>
          
      </Form>
      <Row justify="center">
         <Col md={10} sm={24}>
           <p>Don't have an account? <Link to="/register">Signup</Link> Here</p>
      </Col>
        </Row>
    </div>
  );
}
