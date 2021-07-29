import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Row, Col } from 'antd';

import { useAppDispatch } from "../../../app/hooks";
import { registerUser } from "../redux/auth.slice";
import { RegistrationCredentials } from "../types/auth.types";

export default function Register() {
  const dispatch = useAppDispatch();
  let history = useHistory();
  const [form] = Form.useForm();

  const [isSubmit, setisSubmit] = useState(false);

  const handleSubmit = async (values: RegistrationCredentials) => {
    try {
      const response = await dispatch(registerUser(values));
      if (response.payload) {
        history.push("/");
      }
    } finally {
      setisSubmit(false);
    }
  };


  return (
    <div>
       <Row justify="center">
         <Col md={10} sm={24}>
             <h1>Register!</h1>
         </Col>
      </Row>
      
      <Form
          name="login"
          form={form}
          onFinish={handleSubmit}
          layout="vertical"
          initialValues={{ name: "", email: "", password: "", roles: ["admin"]}}
        >
       <Row justify="center">
         <Col md={10} sm={24}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>
        </Col>
        </Row>
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
              Register
            </Button>
          </Form.Item>
          </Col>
        </Row>
          
      </Form>
    </div>
  );
}

