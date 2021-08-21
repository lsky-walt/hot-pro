import React, { useState } from 'react'
import {
  Layout, Menu,
} from 'antd'
import { Link } from 'react-router-dom'
import {
  FireOutlined,
  CrownOutlined,
  SketchOutlined,
} from '@ant-design/icons'

import styles from './side.less'

const { Sider } = Layout

// Nav Type
export const Popular = 'popular'
export const Battle = 'battle'

export default function SideComponent(props) {
  const { collapsed } = props

  const [current, setCur] = useState(
    window.location.hash === '#/'
      ? Popular
      : window.location.hash.replace('#/', ''),
  )

  function menuOnClick(e) {
    setCur(e.key)
  }
  return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className={styles.logo}><SketchOutlined style={{ fontSize: 20 }} /></div>
            <Menu
              theme="dark"
              mode="inline"
              selectedKeys={[current]}
              onClick={menuOnClick}
              defaultSelectedKeys={[Popular]}
            >
                <Menu.Item key={Popular} icon={<FireOutlined />}>
                    <Link to={`/${Popular}`}>Popular</Link>
                </Menu.Item>
                <Menu.Item key={Battle} icon={<CrownOutlined />}>
                    <Link to={`/${Battle}`}>Battle</Link>
                </Menu.Item>
            </Menu>
        </Sider>
  )
}
