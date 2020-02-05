import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';

const TextSymbolButton = ({ text, activeText, isActive, onClick }) => {
  return (
    <span
      className={classNames(styles.button, {
        [styles.isActive]: isActive
      })}
      onClick={onClick}>
      <span className={styles.text}>{text}</span>
      <span className={styles.activeText}>{activeText}</span>
    </span>
  );
};

export default TextSymbolButton;
