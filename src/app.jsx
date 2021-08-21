import React from 'react'
import {
  Layout,
} from 'antd'
import {
  HashRouter, Switch, Route,
} from 'react-router-dom'
import Header from './components/header'
import Sider, { Popular, Battle as Ba } from './components/side'

import Hot from './hot'
import Battle from './battle'

import styles from './app.less'

const { Content } = Layout

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      collapsed: false,
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    const { collapsed } = this.state
    this.setState({
      collapsed: !collapsed,
    })
  }

  render() {
    const {
      collapsed,
    } = this.state
    return (
      <HashRouter>
        <Layout className={styles.container}>
          <Sider collapsed={collapsed} />
          <Layout className={styles['site-layout']}>
            <Header
              collapsed={this.state.collapsed}
              onToggle={this.toggle}
            />
            <Content
              className={`${styles['site-layout-background']} ${styles.content}`}
            >
              <Switch>
                <Route exact path="/"><Hot /></Route>
                <Route path={`/${Popular}`}><Hot /></Route>
                <Route path={`/${Ba}`}><Battle /></Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </HashRouter>
    )
  }
}
