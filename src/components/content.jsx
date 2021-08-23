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

const Content = (props) => {
  const { data } = props
  const size = getSize()
  const isLastRowNeedToCenter = (data.length % size) === 2
  const span = 24 / size

  if (isLastRowNeedToCenter) {
    return (
      <>
        <Row gutter={16}>
          {data.slice(0, data.length - 2).map((item) => (
            <Col span={span} className={styles.marginBottom} key={item.name}>
              <Card
                hoverable
                cover={<Image alt={item.name} src={item.owner.avatar_url} placeholder={false} preview={false} />}
              >
                <Meta
                  title={item.name}
                  description={(
                    <div>
                      <div className={styles.item}>
                        <FontAwesomeIcon icon={faStar} />
                        <span className={styles.text}>{item.stargazers_count}</span>
                      </div>
                      <div className={styles.item}>
                        <FontAwesomeIcon icon={faShareSquare} />
                        <span className={styles.text}>{item.forks_count}</span>
                      </div>
                      <div className={styles.item}>
                        <FontAwesomeIcon icon={faDotCircle} />
                        <span className={styles.text}>{item.open_issues_count}</span>
                      </div>
                    </div>
                  )}
                />
              </Card>
            </Col>
          ))}
        </Row>
        <Row justify="space-around" gutter={16}>
          {data.slice(data.length - 2).map((item) => (
            <Col span={span} className={styles.marginBottom} key={item.name}>
              <Card
                hoverable
                cover={<Image alt={item.name} src={item.owner.avatar_url} placeholder={false} preview={false} />}
              >
                <Meta
                  title={item.name}
                  description={(
                    <div>
                      <div className={styles.item}>
                        <FontAwesomeIcon icon={faStar} />
                        <span className={styles.text}>{item.stargazers_count}</span>
                      </div>
                      <div className={styles.item}>
                        <FontAwesomeIcon icon={faShareSquare} />
                        <span className={styles.text}>{item.forks_count}</span>
                      </div>
                      <div className={styles.item}>
                        <FontAwesomeIcon icon={faDotCircle} />
                        <span className={styles.text}>{item.open_issues_count}</span>
                      </div>
                    </div>
                  )}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </>
    )
  }

  return (
    <Row gutter={16}>
      {data.map((item) => (
        <Col span={span} className={styles.marginBottom} key={item.name}>
          <Card
            hoverable
            cover={<Image alt={item.name} src={item.owner.avatar_url} placeholder={false} preview={false} />}
          >
            <Meta
              title={item.name}
              description={(
                <div>
                  <div className={styles.item}>
                    <FontAwesomeIcon icon={faStar} />
                    <span className={styles.text}>{item.stargazers_count}</span>
                  </div>
                  <div className={styles.item}>
                    <FontAwesomeIcon icon={faShareSquare} />
                    <span className={styles.text}>{item.forks_count}</span>
                  </div>
                  <div className={styles.item}>
                    <FontAwesomeIcon icon={faDotCircle} />
                    <span className={styles.text}>{item.open_issues_count}</span>
                  </div>
                </div>
              )}
            />
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default Content
