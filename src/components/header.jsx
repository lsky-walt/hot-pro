import React, { Component } from 'react'
import { Layout } from 'antd'

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'
import styles from './header.less'

const { Header } = Layout

function HeaderComponent(props) {
  const { collapsed, onToggle } = props
  return (
            <Header className={styles.header}>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: styles.trigger,
                  onClick: onToggle,
                })}
            </Header>
  )
}

export default HeaderComponent
