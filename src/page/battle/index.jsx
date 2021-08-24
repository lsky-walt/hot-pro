import React, { Component } from 'react'
import {
  Row, Col, Spin, Button,
} from 'antd'
import { Link } from 'react-router-dom'
import Intro from '@/components/intro'
import IntroForm from '@/components/intro-form'
import styles from './battle.less'

export default class Battle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      battle: false,
    }
    this.reset = this.reset.bind(this)
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
    this.setState({ battle: false })
  }

  render() {
    const {
      loading, battle,
    } = this.state
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
              <Button type="primary"><Link to={`/battle/result?play1=${this.one.login}&play2=${this.two.login}`}>Battle</Link></Button>
            </div>
          )
            : null
        }
      </div>
    )
  }
}
