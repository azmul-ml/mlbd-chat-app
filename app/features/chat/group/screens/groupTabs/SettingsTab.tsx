import React from 'react'
import { Card, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import Image from 'next/image'
import styles from "../GroupSettings.module.scss";

const MembersTab = () => {
  return (
    <>
      <Card className={styles.commonCard}>
        <Button type="link" className={styles.longButton}>
          <h4 className={styles.commonCardSubTitle}>Slack connect</h4>
          <span>Work with other companies and organizations in this channel. <a href="javascript:void(0);">Learn more</a></span>
        </Button>

        <Button type="link" className={styles.longButton}>
          <h4 className={styles.commonCardSubTitle}>Huddles</h4>
          <span>Members can start and join huddles in this channel. <a href="javascript:void(0);">Learn more</a></span>
        </Button>

        <Button type="link" className={styles.longButton}>
          <h4 className={styles.commonCardSubTitle}>Message retention</h4>
          <span>Keep all messages, except for revisions</span>
        </Button>

        <Button danger className={styles.longButton} icon={<DeleteOutlined />}>
          Archive group for everyone
        </Button>
      </Card>
    </>
  )
}

export default MembersTab;
