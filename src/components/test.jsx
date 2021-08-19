import React from 'react'
import styles from './style.less'
import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";

export default function Test() {
  return (
    <div className={styles['test']}>
      Webpack test
      <div className="App">
        <h1>antd version: {version}</h1>
        <DatePicker />
        <Button type="primary" style={{ marginLeft: 8 }}>
          Primary Button
        </Button>
      </div>
    </div>
  )
}
