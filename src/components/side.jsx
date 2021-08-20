import React, { useState } from 'react'
import {
  Layout, Menu,
} from 'antd'
import {
  FireOutlined,
  CrownOutlined,
  SketchOutlined,
} from '@ant-design/icons'

import styles from './side.less'

const { Sider } = Layout

export default function SideComponent(props) {
  const { collapsed } = props
  const [current, setCur] = useState(window.location.hash.replace('#/', ''))

  function menuOnClick(e) {
    setCur(e.key)
    window.location.href = `/#/${e.key}`
  }
  return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className={styles.logo}><SketchOutlined style={{ fontSize: 20 }} /></div>
            <Menu theme="dark" mode="inline" selectedKeys={[current]} onClick={menuOnClick} defaultSelectedKeys={['hot']}>
                <Menu.Item key="hot" icon={<FireOutlined />}>
                    Popular
                </Menu.Item>
                <Menu.Item key="battle" icon={<CrownOutlined />}>
                    Battle
                </Menu.Item>
            </Menu>
        </Sider>
  )
}
