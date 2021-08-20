import React from 'react'
import {
  Image, Row, Col, Button,
} from 'antd'

function IntroResult(props) {
  const { one, two, onReset } = props
  return (
      <div>
        <Row justify="center">
          <Col span={4} offset={-1}>
            <div style={{ textAlign: 'center' }}>
              <h2>Winner</h2>
              <h1>{one.name}</h1>
              <div><Image alt="Winner" src={one.avatar_url} preview={false} /></div>
              <div>
                Repos:
                {' '}
                {one.public_repos}
              </div>
            </div>
          </Col>
          <Col span={4} offset={1}>
            <div style={{ textAlign: 'center' }}>
              <h2>Loser</h2>
              <h1>{two.name}</h1>
              <div><Image alt="Loser" src={two.avatar_url} preview={false} /></div>
              <div>
                Repos:
                {' '}
                {one.public_repos}
              </div>
            </div>
          </Col>
        </Row>
        <div style={{ textAlign: 'center' }}><Button onClick={onReset}>Reset</Button></div>
      </div>
  )
}

export default IntroResult
