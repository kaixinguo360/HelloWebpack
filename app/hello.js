import React, { Component } from 'react';
import styles from './hello.css';
import config from './config.json';

export default class Hello extends Component {
  render() {
    return (
        <div className={styles['hello-text']}>
          Hello, {config.name}
        </div>
    );
  }
}
