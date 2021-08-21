import React from 'react'
import {
  Spin, Button,
} from 'antd'
import axios from 'axios'
import Content from './components/content'

import styles from './hot.less'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      target: 0,
      loading: true,
    }

    this.map = [
      { language: 'All', url: 'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories' },
      { language: 'Javascript', url: 'https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&sort=stars&order=desc&type=Repositories' },
      { language: 'Ruby', url: 'https://api.github.com/search/repositories?q=stars:%3E1+language:ruby&sort=stars&order=desc&type=Repositories' },
      { language: 'Java', url: 'https://api.github.com/search/repositories?q=stars:%3E1+language:java&sort=stars&order=desc&type=Repositories' },
      { language: 'CSS', url: 'https://api.github.com/search/repositories?q=stars:%3E1+language:css&sort=stars&order=desc&type=Repositories' },
    ]

    this.getGithubData = this.getGithubData.bind(this)

    this.source = null
  }

  componentDidMount() {
    // did mount, init data
    this.getGithubData(0)
  }

  componentWillUnmount() {
    if (this.source) {
      this.source.cancel('Component will unmount, request will be canceled.')
    }
  }

  handleButtonClick(index) {
    const { target, loading } = this.props
    if (target === index || loading) return
    this.getGithubData(index)
    this.setState({ target: index })
  }

  getGithubData(index) {
    this.setState({ loading: true })
    const { CancelToken } = axios
    this.source = CancelToken.source()
    axios.get(this.map[index].url, {
      cancelToken: this.source.token,
    }).then((res) => {
      const { items } = res.data
      this.setState({ loading: false, data: items })
      this.source = null
    }).catch((thrown) => {
      if (axios.isCancel(thrown)) {
        console.log('Request canceled', thrown.message)
      }
      this.source = null
    })
  }

  render() {
    const {
      loading, data, target,
    } = this.state
    return (
      <div className={styles.app}>
        <Spin
          size="large"
          spinning={loading}
        />
        <div>
          {this.map.map((value, index) => {
            const { language } = value
            return (
              <Button
                key={language}
                loading={target === index ? loading : false}
                type={target === index ? 'link' : 'text'}
                onClick={this.handleButtonClick.bind(this, index)}
              >
                {language}
              </Button>
            )
          })}
        </div>
        <div className={styles['items-content']}>
          <Content data={data} />
        </div>
      </div>
    )
  }
}
