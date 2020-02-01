import React, { useState } from 'react';
import { useAppState } from '../../state';
import Tabs from '../../components/tabs';
import CustomFont from './custom-font';
import SearchFont from './search-font';
import styles from './styles.module.css';

const SEARCH_TAB_ID = 'search';
const FAVORITES_TAB_ID = 'favorites';
const CUSTOM_FONT_TAB_ID = 'custom';

const tabs = [
  {
    title: 'Search',
    id: SEARCH_TAB_ID,
    children: <SearchFont />
  },
  {
    title: 'Favorites',
    id: FAVORITES_TAB_ID
  },
  {
    title: 'Custom',
    id: CUSTOM_FONT_TAB_ID,
    children: <CustomFont />
  }
];

const FontConfiguration = () => {
  const { selectedFont, setSelectedFont } = useAppState();
  const [activeTabId, setActiveTabId] = useState(SEARCH_TAB_ID);

  return (
    <div>
      <div className={styles.header}>
        <h4>{selectedFont}</h4>
        <button onClick={() => setSelectedFont(null)}>Back</button>
      </div>
      <Tabs tabs={tabs} activeTabId={activeTabId} onChange={setActiveTabId} />
    </div>
  );
};

export default FontConfiguration;
