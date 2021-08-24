import React from 'react'
import {
  Form, Input, Button, message, Image,
} from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'

import axios from 'axios'

import styles from './intro-form.less'

function getGithubData(user) {
  return axios.get(`https://api.github.com/users/${user}`)
}

class IntroForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      search: false,
      errMsg: '',
      name: '',
      loading: false,
    }

    this.onFinish = this.onFinish.bind(this)
    this.handleIconClick = this.handleIconClick.bind(this)
  }

  handleIconClick() {
    this.setState({
      search: false,
      errMsg: '',
      name: '',
    })
  }

  onFinish(value) {
    const { onSubmit } = this.props
    this.setState({ loading: true })
    getGithubData(value.item).then((res) => {
      onSubmit(res.data)
      this.setState({ search: true, name: value.item, loading: false })
    }).catch((error) => {
      message.error(error.response.data.message, 3)
      this.setState({
        search: true, name: value.item, loading: false, errMsg: error.response.data.message,
      })
    })
  }

  render() {
    const { label } = this.props
    const {
      search, name, errMsg, loading,
    } = this.state
    if (search) {
      return (
        <div className={styles.result}>
          {errMsg ? (<span className={styles.err}>{errMsg}</span>) : (
            <div className={styles.image}>
              <Image width={32} alt={name} src={`https://github.com/${name}.png?size=200`} placeholder={false} preview={false} />
              <span>{name}</span>
            </div>
          )}
          <CloseCircleOutlined
            style={{ fontSize: 24 }}
            onClick={this.handleIconClick}
          />
        </div>
      )
    }
    return (
      <Form
        key="form"
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={this.onFinish}
        layout="inline"
      >
      <Form.Item
        label={label}
        name="item"
        rules={[{ required: true, message: 'Please input Github name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
      </Form>
    )
  }
}

export default IntroForm
