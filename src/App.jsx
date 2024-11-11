import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [activeTabId, setActive] = useState('tab-13');

  const onTabSelected = id => {
    setActive(id);
  };

  return (
    <div className="section">
      <h1 className="title">{`Selected tab is ${(tabs.find(tab => tab.id === activeTabId) && tabs.find(tab => tab.id === activeTabId).title) || tabs[0].title}`}</h1>

      <div data-cy="TabsComponent">
        <Tabs
          tabs={tabs}
          onTabSelected={onTabSelected}
          activeTabId={activeTabId}
          setActive={setActive}
        />
      </div>
    </div>
  );
};
