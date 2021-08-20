import React from 'react'
import {
  Form, Input, Button,
} from 'antd'

const IntroForm = ({ onSubmit }) => {
  const onFinish = (values) => {
    onSubmit(values)
  }

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
    >
      <Form.Item
        label="One"
        name="One"
        rules={[{ required: true, message: 'Please input Github name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Two"
        name="Two"
        rules={[{ required: true, message: 'Please input Github name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          battle ?
        </Button>
      </Form.Item>
    </Form>
  )
}

export default IntroForm
