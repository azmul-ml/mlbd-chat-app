import React from 'react'
import { Card, Form, Input, Button } from 'antd';
import { SearchOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import Image from 'next/image'
import styles from "../GroupSettings.module.scss";

const MembersTab = () => {
  return (
    <>
      <Card className={styles.commonCard}>
        <div className={styles.cardInner}>
          <Form
            name="basic"
            // labelCol={{ span: 8 }}
            wrapperCol={{ span: 12 }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Form.Item
              name="username"
            >
              <Input className={styles.inputSearch} placeholder="Search members" prefix={<SearchOutlined className={styles.inputSearchIcon} />} />
            </Form.Item>

            <Form.Item>
              <Button type="default" htmlType="submit" icon={<UsergroupAddOutlined />}>
                Add Member
              </Button>
            </Form.Item>
          </Form>

          <div className={styles.groupMemberList}>
            <h3 className={styles.groupMemberListTitle}>
              Existing member list
            </h3>

            <a href="javascript:void(0);" className={styles.groupMember}>
              <div className={styles.groupMemberImage}>
                <Image
                  src="/images/dummy_1.jpeg"
                  alt="files"
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <h4 className={styles.groupMemberName}>Mamun Khandaker</h4>
                <div className={styles.groupMemberDesignation}>Senior Software Engineer</div>
              </div>
              <Button type="link">Remove</Button>
            </a>

            <a href="javascript:void(0);" className={styles.groupMember}>
              <div className={styles.groupMemberImage}>
                <Image
                  src="/images/dummy_2.jpeg"
                  alt="files"
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <h4 className={styles.groupMemberName}>Mamunur Rashid</h4>
                <div className={styles.groupMemberDesignation}>Lead Software Engineer</div>
              </div>
              <Button type="link">Remove</Button>
            </a>

            <a href="javascript:void(0);" className={styles.groupMember}>
              <div className={styles.groupMemberImage}>
                <Image
                  src="/images/dummy_1.jpeg"
                  alt="files"
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <h4 className={styles.groupMemberName}>Mamun Khandaker</h4>
                <div className={styles.groupMemberDesignation}>Senior Software Engineer</div>
              </div>
              <Button type="link">Remove</Button>
            </a>

            <a href="javascript:void(0);" className={styles.groupMember}>
              <div className={styles.groupMemberImage}>
                <Image
                  src="/images/dummy_2.jpeg"
                  alt="files"
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <h4 className={styles.groupMemberName}>Mamunur Rashid</h4>
                <div className={styles.groupMemberDesignation}>Lead Software Engineer</div>
              </div>
              <Button type="link">Remove</Button>
            </a>
          </div>
        </div>
      </Card>
    </>
  )
}

export default MembersTab;
