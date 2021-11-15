import React from 'react';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import AboutTab from './groupTabs/AboutTab';
import MembersTab from './groupTabs/MembersTab';
import SettingsTab from './groupTabs/SettingsTab';
import styles from "./GroupSettings.module.scss";

const GroupSettings = () => {
  return (
    <div className={styles.groupSettings}>
      <Tabs defaultActiveKey="1">
        <TabPane tab="About" key="1">
          <AboutTab />
        </TabPane>
        
        <TabPane tab="Members" key="2">
          <MembersTab />
        </TabPane>
        
        <TabPane tab="Settings" key="3">
          <SettingsTab />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default GroupSettings;


