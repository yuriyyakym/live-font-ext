import React from "react";
import classNames from "classnames";
import styles from "./styles.module.css";

const Tabs = ({ tabs, activeTabId, onChange }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId);
  return (
    <div className={styles.tabsComponent}>
      <div className={styles.tabs}>
        {tabs.map(tab => (
          <div
            key={tab.id}
            className={classNames(styles.tab, {
              [styles.active]: tab.id === activeTabId
            })}
            onClick={() => onChange(tab.id)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <main>{activeTab && activeTab.children}</main>
    </div>
  );
};
export default Tabs;
