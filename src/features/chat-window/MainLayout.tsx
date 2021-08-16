import React, { useCallback, useEffect, useState } from "react";

import { Link, useHistory } from "react-router-dom";

import { Avatar, Button, List, Row, Col, Popover, Select } from "antd";

import cookie from "react-cookies";

import styles from "./layout.module.scss";
import { AppIcons } from "./AppIcons";
import Modal from "./group/screens/Modal";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getSingleGroup } from "./group/redux/get-single-group.slice";
import Title from "antd/lib/typography/Title";
import {
  chatClient,
  exClientChat,
  exClientChatTh,
} from "../chat-window/redux/chat-client.slice";
import { AUTH_ACCESS_TOKEN } from "../auth/constants/auth.keys";
import Chats from "./group/screens/Chats";
import { IGroupResponse } from "./group/types/groput-chat.types";
import { getMyGroup } from "./group/redux/getMy-groups";
import { singleGroupSlice } from "./group/redux/get-single-group.slice";

const { Option } = Select;

// const newData = [
//   "Frontend Discussion",
//   "Backend Discussion",
//   "Official Documents",
//   "Chitchat Group",
//   "Financial Documents",
// ];

export default function MainLayout({ children }: any) {
  const dispatch = useAppDispatch();
  let history = useHistory();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [myGroups, setMyGroups] = useState([]);
  const [visible, setVisible] = useState(false);
  const [groupItem] = useState({});

  const allUsers = useAppSelector((state) => state.user);

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
    res.payload && history.push(`app/room/${id}`);
  };

  const handleVisibleChange = (visible: any) => {
    setVisible(true);
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
    const res = await dispatch(getMyGroup(data));
    const groups = res.payload?.filter((d: any) => d.meta !== null);
    setMyGroups(groups);
    const { initChat } = chatClient.actions;
    dispatch(exClientChatTh());
    dispatch(initChat());

    console.log(res.payload?.filter((d: any) => d.meta !== null));
  }, [dispatch]);

  useEffect(() => {
    getGroups();
    exClientChat();
  }, [getGroups]);

  return (
    <Row className={styles.chatMain}>
      <Col span={8} className={styles.chatLeft}>
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

        <Row className={styles.chatLeftDetails}>
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
                  <Link to="/app">
                    {item}
                    <span className={styles.chatMessageCount}>5</span>
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
            <Link to="/app">
              {AppIcons.MessageOutlined}
              <span className={styles.chatLeftDetailsHeaderText}>Threads</span>
            </Link>
          </Row>

          <Row
            className={
              styles.chatLeftDetailsHeader +
              " " +
              styles.chatLeftDetailsHeaderLink
            }
          >
            <Link to="/app">
              {AppIcons.EditOutlined}
              <span className={styles.chatLeftDetailsHeaderText}>Draft</span>
            </Link>
          </Row>

          <Row
            className={
              styles.chatLeftDetailsHeader +
              " " +
              styles.chatLeftDetailsHeaderLink
            }
          >
            <Link to="/app">
              {AppIcons.CaretDownOutlined}
              <span className={styles.chatLeftDetailsHeaderText}>Groups</span>
              <Button
                type="link"
                icon={AppIcons.PlusOutlined}
                onClick={() => openModal()}
              ></Button>
            </Link>
          </Row>

          <Row className={styles.chatGroupList}>
            <List
              dataSource={myGroups}
              renderItem={(item: IGroupResponse) => (
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

      <Col span={16} className={styles.chatRight}>
        {/* <Row className={styles.chatClose}>
          <Button type="link">{AppIcons.MinusOutlined}</Button>
          <Button
            type="link"
           
            icon={
              fullScreen
                ? AppIcons.FullscreenExitOutlined
                : AppIcons.FullscreenOutlined
            }
          ></Button>
          <Button type="link">{AppIcons.CloseOutlined}</Button>
        </Row> */}
        {/* <Row className={styles.chatRightHeader}>
          <Col className={styles.chatRightHeaderTitle}>
            <div>
              <Avatar
                size={40}
                icon="user"
                className={styles.chatRightAvatar}
              />
            </div>

            <Col className={styles.chatRightHeaderTitleText}>
              John Carrey
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
                  {allUsers?.map((user) => (
                    <Option value={user._id}>{user.name}</Option>
                  ))}
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option> 
                </Select>
              }
              title="Title"
              trigger="click"
              visible={visible}
              onVisibleChange={handleVisibleChange}
            >
              <Button
                type="link"
                onClick={() => console.log("add member")}
                icon={AppIcons.UserAddOutlined}
              ></Button>
              {/* <Button type="primary">Click me</Button> 
            </Popover>
            <Button type="link" href="" icon={AppIcons.InfoCircleFilled}></Button>
          </Col>
        </Row> */}
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

const data = [
  "Michael Jackson",
  "Rupert Mardoc",
  "Cameron Diaz",
  "Jim Carrey",
  "Jennifer Anniston",
];
