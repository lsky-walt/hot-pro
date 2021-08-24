import React, { Component } from 'react'
import {
  Image, Row, Col, Button, Spin, message,
} from 'antd'

import { Link } from 'react-router-dom'

import axios from 'axios'

import { parseUrl } from './util'

function getGithubData(user) {
  return axios.get(`https://api.github.com/users/${user}`)
}

export default class BattleResult extends Component {
  constructor(props) {
    super(props)

    this.state = {
      winner: null,
      loser: null,
      loading: false,
    }
  }

  componentDidMount() {
    this.setState({ loading: true })
    const [, urlParams] = parseUrl()
    Promise.all(urlParams.map((v) => getGithubData(v.value))).then((arr) => {
      const [first, sec] = arr
      if (first.data.public_repos > sec.data.public_repos) {
        this.setState({
          winner: first.data,
          loser: sec.data,
          loading: false,
        })
        return
      }
      this.setState({
        winner: sec.data,
        loser: first.data,
        loading: false,
      })
    }).catch((err) => {
      message.error(err.response.data.message, 3)
    })
  }

  render() {
    const { winner, loser, loading } = this.state
    if (loading) {
      return <Spin />
    }

    if (!winner || !loser) {
      return null
    }
    return (
      <div>
        <Row justify="center">
          <Col span={4} offset={-1}>
            <div style={{ textAlign: 'center' }}>
              <h2>Winner</h2>
              <h1>{winner.name}</h1>
              <div><Image alt="Winner" src={winner.avatar_url} preview={false} /></div>
              <div>
                Repos:
                {' '}
                {winner.public_repos}
              </div>
            </div>
          </Col>
          <Col span={4} offset={1}>
            <div style={{ textAlign: 'center' }}>
              <h2>Loser</h2>
              <h1>{loser.name}</h1>
              <div><Image alt="Loser" src={loser.avatar_url} preview={false} /></div>
              <div>
                Repos:
                {' '}
                {loser.public_repos}
              </div>
            </div>
          </Col>
        </Row>
        <div style={{ textAlign: 'center' }}><Button><Link to="/battle">Reset</Link></Button></div>
      </div>
    )
  }
}
