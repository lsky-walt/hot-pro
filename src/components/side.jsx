import React, { useState, useEffect } from 'react'
import {
  Layout, Menu,
} from 'antd'
import { Link, useHistory } from 'react-router-dom'
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

function getUrlHash() {
  const arr = window.location.hash.replace('#/', '').split('?')
  return arr[0]
}

export default function SideComponent(props) {
  const { collapsed } = props

  const [current, setCur] = useState(
    window.location.hash === '#/'
      ? Popular
      : getUrlHash(),
  )

  const [locationKeys, setLocationKeys] = useState([])

  function menuOnClick(e) {
    setCur(e.key)
  }

  const history = useHistory()

  useEffect(() => history.listen((location) => {
    if (history.action === 'PUSH') {
      setLocationKeys([location.pathname])
    }

    if (history.action === 'POP') {
      if (locationKeys[1] === location.pathname) {
        setLocationKeys(([_, ...keys]) => keys)
        // Handle forward event
        menuOnClick({ key: location.pathname.replace('/', '') })
      } else {
        setLocationKeys((keys) => [location.pathname, ...keys])
        // Handle back event
        menuOnClick({ key: location.pathname.replace('/', '') })
      }
    }
  }), [locationKeys])

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
