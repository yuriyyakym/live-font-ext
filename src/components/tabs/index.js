import React from "react";
import classNames from "classnames";
import styles from "./styles.module.css";

const Tabs = ({ tabs, activeTabId }) => (
  <div className={styles.tabs}>
    <div>
      {tabs.map(tab => (
        <div
          className={classNames(styles.tab, {
            [styles.active]: tab.id === activeTabId
          })}
        >
          {tab.title}
        </div>
      ))}
    </div>
  </div>
);

export default Tabs;
