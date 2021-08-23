import React from 'react'
import {
  Spin, Button, message,
} from 'antd'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroller'
import Content from './components/content'

import styles from './hot.less'

function appendParamToUrl(name, value) {
  const url = new URL(window.location.href)
  const [base, urlParam] = window.location.hash.split('?')
  if (!urlParam) {
    url.hash = `${base}?${name}=${value}`
    window.location.href = url.href
    return
  }
  const urlParams = urlParam.split(/\\&/g).map((str) => {
    if (str.indexOf(name) !== -1) {
      return `${name}=${value}`
    }
    return str
  })
  url.hash = `${base}?${urlParams.join('&')}`
  window.location.href = url.href
}

function getLanguageFromUrlParams() {
  const [base, urlParam] = window.location.hash.split('?')
  if (!urlParam) {
    return 'All'
  }
  let language = ''
  urlParam.split(/\\&/g).map((str) => {
    if (str.indexOf('language') !== -1) {
      [, language] = str.split('=')
    }
    return str
  })
  return language
}

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.map = [
      { language: 'All', url: 'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories&per_page=10' },
      { language: 'Javascript', url: 'https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&sort=stars&order=desc&type=Repositories&per_page=10' },
      { language: 'Ruby', url: 'https://api.github.com/search/repositories?q=stars:%3E1+language:ruby&sort=stars&order=desc&type=Repositories&per_page=10' },
      { language: 'Java', url: 'https://api.github.com/search/repositories?q=stars:%3E1+language:java&sort=stars&order=desc&type=Repositories&per_page=10' },
      { language: 'CSS', url: 'https://api.github.com/search/repositories?q=stars:%3E1+language:css&sort=stars&order=desc&type=Repositories&per_page=10' },
    ]

    const initLanguage = getLanguageFromUrlParams()

    let target = 0

    this.map.find((v, index) => {
      if (v.language === initLanguage) {
        target = index
        return true
      }
      return false
    })

    this.state = {
      data: [],
      target,
      loading: true,
      page: 1,
    }

    getLanguageFromUrlParams()

    this.getGithubData = this.getGithubData.bind(this)
    this.handleInfiniteOnLoad = this.handleInfiniteOnLoad.bind(this)

    this.source = null
  }

  componentDidMount() {
    const { target } = this.state
    // did mount, init data
    this.getGithubData(target)
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
  }

  handleInfiniteOnLoad(page) {
    const { target, loading } = this.state
    console.log(page)
    if (loading) return
    this.getGithubData(target, page)
  }

  getGithubData(index, pageIndex) {
    const { page, data } = this.state

    this.setState({ loading: true })
    const { CancelToken } = axios
    this.source = CancelToken.source()
    axios.get(`${this.map[index].url}&page=${pageIndex || 1}`, {
      cancelToken: this.source.token,
    }).then((res) => {
      const { items } = res.data
      if (pageIndex > 1) {
        this.setState({ loading: false, data: data.concat(items), target: index })
        appendParamToUrl('language', this.map[index].language)
        return
      }
      this.setState({ loading: false, data: items, target: index })
      appendParamToUrl('language', this.map[index].language)
      this.source = null
    }).catch((thrown) => {
      if (axios.isCancel(thrown)) {
        console.log('Request canceled', thrown.message)
        this.source = null
        return
      }
      message.error(thrown.response.data.message, 3)
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
        <InfiniteScroll
          initialLoad={false}
          pageStart={1}
          loadMore={this.handleInfiniteOnLoad}
          hasMore={!loading}
          useWindow={false}
        >
          <Content data={data} />
        </InfiniteScroll>
        </div>
      </div>
    )
  }
}
