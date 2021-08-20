import React, { Component } from 'react'
import { Row, Col, Spin } from 'antd'
import axios from 'axios'
import Intro from './components/intro'
import IntroForm from './components/intro-form'
import IntroResult from './components/intro-result'
import styles from './battle.less'

function getGithubData(user) {
  return axios.get(`https://api.github.com/users/${user}`)
}

export default class Battle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      mode: '1',
      one: {},
      two: {},
    }
    this.submit = this.submit.bind(this)
    this.reset = this.reset.bind(this)
  }

  submit(target) {
    this.setState({ loading: true })
    Promise.all(Object.keys(target).map((v) => getGithubData(target[v]))).then((value) => {
      const [one, two] = value
      this.setState({
        loading: false, mode: '2', one: one.data, two: two.data,
      })
    })
  }

  reset() {
    this.setState({ mode: '1' })
  }

  render() {
    const {
      mode, one, two, loading,
    } = this.state
    if (mode === '1') {
      return (
        <div className={styles.battle}>
          <Spin size="large" spinning={loading} />
          <Intro />
          <Row justify="center">
            <Col span={10}>
              <IntroForm onSubmit={this.submit} />
            </Col>
          </Row>
        </div>
      )
    }
    return <IntroResult one={one} two={two} onReset={this.reset} />
  }
}
