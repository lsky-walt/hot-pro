/* eslint-disable camelcase */
import React from 'react'
import {
  Card, Image, Row, Col,
} from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faShareSquare, faDotCircle } from '@fortawesome/free-regular-svg-icons'

import styles from './style.less'

const { Meta } = Card

const lgSize = (size) => size >= 992 && 4

const mdSize = (size) => size >= 720 && size < 992 && 3

const smSize = (size) => size < 720 && 2

const getSize = () => {
  const width = document.body.clientWidth
  return lgSize(width) || mdSize(width) || smSize(width)
}

const Item = ({name, owner, stargazers_count, forks_count, open_issues_count, span}) => (
    <Col span={span} className={styles.marginBottom} key={name}>
        <Card
          hoverable
          cover={<Image alt={name} src={owner.avatar_url} placeholder={false} preview={false} />}
        >
          <Meta
            title={name}
            description={(
              <div>
                <div className={styles.item}>
                  <FontAwesomeIcon icon={faStar} />
                  <span className={styles.text}>{stargazers_count}</span>
                </div>
                <div className={styles.item}>
                  <FontAwesomeIcon icon={faShareSquare} />
                  <span className={styles.text}>{forks_count}</span>
                </div>
                <div className={styles.item}>
                  <FontAwesomeIcon icon={faDotCircle} />
                  <span className={styles.text}>{open_issues_count}</span>
                </div>
              </div>
            )}
          />
        </Card>
      </Col>
  )

const Content = (props) => {
  const { data } = props
  const size = getSize()
  const isLastRowNeedToCenter = (data.length % size) === 2
  const span = 24 / size

  if (isLastRowNeedToCenter) {
    return (
      <>
        <Row gutter={16}>
          {data.slice(0, data.length - 2).map((item) => (<Item key={item.id} span={span} {...item} />))}
        </Row>
        <Row justify="space-around" gutter={16}>
          {data.slice(data.length - 2).map((item) => (<Item key={item.id} span={span} {...item} />))}
        </Row>
      </>
    )
  }

  return (
    <Row gutter={16}>
      {data.map((item) => (<Item key={item.id} span={span} {...item} />))}
    </Row>
  )
}

export default Content
