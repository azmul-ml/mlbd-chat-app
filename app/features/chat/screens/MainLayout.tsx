import React, { useCallback, useEffect, useState } from "react";
import classNames from "classnames/bind";

import { useRouter } from "next/router";
import Link from "next/link";

import { Avatar, Button, List, Row, Col, Popover, Select, Dropdown, Menu, Modal as SettingModal } from "antd";

import cookie from "react-cookies";
import { DownOutlined, PhoneOutlined, StarOutlined, BellOutlined } from '@ant-design/icons';

import styles from "../../../../styles/layout.module.scss";
import { AppIcons } from "./AppICons";
import Modal from "../group/screens/Modal";
import GroupSettings from "../group/screens/GroupSettings";

import { getSingleGroup } from "../group/redux/get-single-group.slice";
import Title from "antd/lib/typography/Title";
import {
  chatClient,
  exClientChat,
  exClientChatTh,
} from "../redux/chat-client.slice";
import { AUTH_ACCESS_TOKEN } from "../../auth/constants/auth.keys";
import Chats from "../group/screens/Chats";
import { IGroupResponse } from "../group/types/group-chat.types";
import { getMyGroup } from "../group/redux/getMy-group";
import { singleGroupSlice } from "../group/redux/get-single-group.slice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

const { Option } = Select;

// const newData = [
//   "Frontend Discussion",
//   "Backend Discussion",
//   "Official Documents",
//   "Chitchat Group",
//   "Financial Documents",
// ];

const data = [
  "Michael Jackson",
  "Rupert Mardoc",
  "Cameron Diaz",
  "Jim Carrey",
  "Jennifer Anniston",
];

const newData = [
  "Frontend Discussion",
  "Backend Discussion",
  "Official Documents",
  "Chitchat Group",
  "Financial Documents",
];

const menu = (
  <Menu>
    <Menu.Item key="1">
      <small>Move to...</small>
    </Menu.Item>
    <Menu.Item key="2" icon={<StarOutlined />}>
      Starred
    </Menu.Item>
    <Menu.Item key="3">
      Move to new section
    </Menu.Item>
  </Menu>
);

export default function MainLayout({ children }: any) {
  const dispatch = useAppDispatch();
  let router = useRouter();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [myGroups, setMyGroups] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [visible, setVisible] = useState(false);
  const [groupItem] = useState({});

  const allUsers = useAppSelector((state) => state.user);
  const cx = classNames.bind(styles);

  const [fullScreen] = useState(false);

  const titleContainer = [
    <h3 key="one">Group / Person name</h3>,
    <div key="two">
      <Dropdown overlay={menu}>
        <Button>
          <StarOutlined /><DownOutlined />
        </Button>
      </Dropdown>
      <Button icon={<BellOutlined />}>Get notification</Button>
      <Button icon={<PhoneOutlined />}>Start a call</Button>
    </div>
  ]

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleGroupLink = async (id: string) => {
    const { addSingleGroup } = singleGroupSlice.actions;
    const token = cookie.load(AUTH_ACCESS_TOKEN);
    const data = {
      group_id: id,
      token,
    };
    const res = await dispatch(getSingleGroup(data));
    await dispatch(addSingleGroup(res.payload));
    console.log("signlegroupres", res.payload);
    // await setGroupItem(res.payload);
    res.payload && router.push(`app/room/${id}`);
  };

  const handleVisibleChange = (visible: any) => {
    setShowPopup(true);
  };
  function onChange(value: any) {
    console.log(`selected ${value}`);
  }
  function onSearch(val: any) {
    console.log("search:", val);
  }

  const getGroups = useCallback(async () => {
    const token = cookie.load(AUTH_ACCESS_TOKEN);

    const data: any = {
      token,
    };
    const res: any = await dispatch(getMyGroup(data));
    const groups = res.payload?.filter((d: any) => d.meta !== null);
    setMyGroups(groups);

    console.log(res.payload?.filter((d: any) => d.meta !== null));
  }, [dispatch]);

  useEffect(() => {
    getGroups();
    // exClientChat();
  }, [getGroups]);

  return (
    <Row
      className={
        fullScreen
          ? styles.chatMain + " " + styles.chatMainFullscreen
          : styles.chatMain
      }
    >
      <Col
        xs={0}
        sm={0}
        md={6}
        lg={6}
        xl={6}
        xxl={6}
        className={styles.chatLeft}
      >
        <Row className={styles.chatLeftHeader}>
          <Avatar size={50} icon="user" className={styles.chatLeftAvatar} />

          <Col className={styles.chatLeftName}>
            <Title level={4} className={styles.chatLeftTitle}>
              Mamun Khandaker
            </Title>
            <Col span={24} className={styles.chatStatus}>
              <span
                className={
                  styles.chatStatusDot + " " + styles.chatStatusDotBusy
                }
              ></span>
              <span className={styles.chatStatusText}>
                Busy
                {AppIcons.CaretDownOutlined}
              </span>
            </Col>
          </Col>
        </Row>

        <Row className={cx("chatLeftDetails", "chBlock")}>
          <Title level={4} className={styles.chatLeftDetailsHeader}>
            {AppIcons.CaretDownOutlined}
            <span className={styles.chatLeftDetailsHeaderText}>
              Direct Messages
            </span>
            <Button type="link" icon={AppIcons.PlusOutlined}></Button>
          </Title>

          <Row className={styles.chatNameList}>
            <List
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <Link href="/">
                    <a>
                      {item}
                      <span className={styles.chatMessageCount}>5</span>
                    </a>
                  </Link>
                </List.Item>
              )}
            />
          </Row>

          <Row
            className={
              styles.chatLeftDetailsHeader +
              " " +
              styles.chatLeftDetailsHeaderLink
            }
          >
            <Link href="/">
              <a>
                {AppIcons.MessageOutlined}
                <span className={styles.chatLeftDetailsHeaderText}>
                  Threads
                </span>
              </a>
            </Link>
          </Row>

          <Row
            className={
              styles.chatLeftDetailsHeader +
              " " +
              styles.chatLeftDetailsHeaderLink
            }
          >
            <Link href="/">
              <a>
                {AppIcons.EditOutlined}
                <span className={styles.chatLeftDetailsHeaderText}>Draft</span>
              </a>
            </Link>
          </Row>

          <Row
            className={
              styles.chatLeftDetailsHeader +
              " " +
              styles.chatLeftDetailsHeaderLink
            }
          >
            <Link href="/app">
              <a>
                {AppIcons.CaretDownOutlined}
                <span className={styles.chatLeftDetailsHeaderText}>Groups</span>
                <Button
                  type="link"
                  icon={AppIcons.PlusOutlined}
                  onClick={() => openModal()}
                ></Button>
              </a>
            </Link>
          </Row>

          <Row className={styles.chatGroupList}>
            <List
              dataSource={myGroups}
              renderItem={(item: any) => (
                <List.Item>
                  <div>
                    {AppIcons.LockOutlined}
                    <span onClick={() => handleGroupLink(item.id)}>
                      {item.meta.name}
                    </span>
                    <span className={styles.chatMessageCount}>18</span>
                  </div>
                </List.Item>
              )}
            />
          </Row>
        </Row>
      </Col>

      <Col
        xs={24}
        sm={24}
        md={18}
        lg={18}
        xl={18}
        xxl={18}
        className={styles.chatRight}
      >
        <Row className={styles.chatRightHeader}>
          <Col className={styles.chatRightHeaderTitle}>
            <Avatar size={40} icon="user" className={styles.chatRightAvatar} />

            <Col className={styles.chatRightHeaderTitleText}>
              <a href="javascript:void(0);" onClick={() => setVisible(true)}>Mamun Khandaker</a>

              <SettingModal
                title={titleContainer}
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={1000}
              >
                <GroupSettings />
              </SettingModal>

              <Col className={styles.chatStatus}>
                <span
                  className={
                    styles.chatStatusDot + " " + styles.chatStatusDotOnline
                  }
                ></span>
                <span className={styles.chatStatusText}>Online</span>
              </Col>
            </Col>
          </Col>

          {/* <Col className={styles.chatRightHeaderAction}>
            <Button type="link" icon={AppIcons.SearchOutlined}></Button>
            <Button type="link" icon={AppIcons.PhoneFilled}></Button>
            <Button type="link" icon={AppIcons.UserAddOutlined}></Button>
            <Button type="link" icon={AppIcons.InfoCircleFilled}></Button>
          </Col> */}

          <Col className={styles.chatRightHeaderAction}>
            <Button type="link" icon={AppIcons.SearchOutlined}></Button>
            <Button type="link" icon={AppIcons.PhoneFilled}></Button>
            <Popover
              content={
                <Select
                  showSearch
                  mode="multiple"
                  style={{ width: 200 }}
                  placeholder="Select a person"
                  optionFilterProp="children"
                  onChange={onChange}
                  // onFocus={onFocus}
                  // onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option: any) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {allUsers?.map((user: any) => (
                    <Option key={user} value={user._id}>
                      {user.name}
                    </Option>
                  ))}
                  {/* <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option> */}
                </Select>
              }
              title="Title"
              trigger="click"
              // showPopup={showPopup}
              onVisibleChange={handleVisibleChange}
            >
              <Button
                type="link"
                onClick={() => console.log("add member")}
                icon={AppIcons.UserAddOutlined}
              ></Button>
              {/* <Button type="primary">Click me</Button> */}
            </Popover>
            <Button type="link" icon={AppIcons.InfoCircleFilled}></Button>
          </Col>
        </Row>
        {console.log("dddddddddd", groupItem)}
        <Chats groupItem={groupItem} />

        <Modal
          style={styles}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          handleGroupModal={setIsOpen}
        />
      </Col>
    </Row>
  );
}
