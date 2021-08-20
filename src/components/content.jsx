import React from 'react'
import { List, Card, Image } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faShareSquare, faDotCircle } from '@fortawesome/free-regular-svg-icons'

import styles from './style.less'

const { Meta } = Card

const GridConfig = {
  gutter: 16,
  xs: 1,
  sm: 2,
  md: 4,
  lg: 4,
  xl: 6,
  xxl: 3,
}

const Content = (props) => {
  const { data } = props
  return (
    <List
      grid={GridConfig}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Card
            hoverable
            cover={<Image alt={item.name} src={item.owner.avatar_url} placeholder preview={false} />}
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
        </List.Item>
      )}
    />
  )
}

export default Content
