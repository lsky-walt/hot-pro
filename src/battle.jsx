import React, { Component } from 'react'
import {
  Row, Col, Spin, Button,
} from 'antd'
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
      battle: false,
    }
    this.reset = this.reset.bind(this)
    this.handleBattle = this.handleBattle.bind(this)
  }

  handleBattle() {
    this.setState({ mode: '2' })
  }

  submit(target, value) {
    this[target] = value
    if (this.one && this.two) {
      this.setState({ battle: true })
    }
  }

  reset() {
    this.one = null
    this.two = null
    this.setState({ mode: '1', battle: false })
  }

  render() {
    const {
      mode, loading, battle,
    } = this.state
    if (mode === '1') {
      return (
        <div className={styles.battle}>
          <Spin size="large" spinning={loading} />
          <Intro />
          <Row justify="center">
            <Col span={8}>
              <IntroForm label="one" onSubmit={this.submit.bind(this, 'one')} />
            </Col>
            <Col span={8}>
              <IntroForm label="two" onSubmit={this.submit.bind(this, 'two')} />
            </Col>
          </Row>
          {
            battle ? (
              <div className={styles['battle-button']}>
                <Button type="primary" onClick={this.handleBattle}>Battle</Button>
              </div>
            )
              : null
          }
        </div>
      )
    }
    return <IntroResult one={this.one} two={this.two} onReset={this.reset} />
  }
}
