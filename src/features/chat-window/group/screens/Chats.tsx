import React from "react";
import { Button, Col, List, Row, Avatar, Popover, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useState } from "react";
import { useParams } from "react-router-dom";
import cookie from "react-cookies";
import { AppIcons, msgActButtons } from "../../AppIcons";
import styles from "../../layout.module.scss";
import { ISentMessage } from "../types/groput-chat.types";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { AUTH_ACCESS_TOKEN } from "../../../auth/constants/auth.keys";
import { sendMessage } from "../redux/send-message.slice";

const { Option } = Select;

export default function Chats({ groupItem }: any) {
  const { id } = useParams<{ id: string }>();
  const allUsers = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const singleGroup: any = useAppSelector((state) => state.singleGroup);

  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  const handleMessageChange = (e: any) => {
    setMessage(e.target.value);
  };

  const handleSentMessage = () => {
    console.log(singleGroup);
    const token = cookie.load(AUTH_ACCESS_TOKEN);
    const data: ISentMessage = {
      group_id: singleGroup.id,
      message: message,
      token: token,
    };
    dispatch(sendMessage(data));
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

  return (
    <>
      <Row className={styles.chatRightHeader}>
        <Col className={styles.chatRightHeaderTitle}>
          <div>
            <Avatar size={40} icon="user" className={styles.chatRightAvatar} />
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
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {allUsers?.map((user) => (
                  <Option value={user._id}>{user.name}</Option>
                ))}
                {/* <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option> */}
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
            {/* <Button type="primary">Click me</Button> */}
          </Popover>
          <Button
            type="link"
            href={`/app/room/${id}/settings`}
            icon={AppIcons.InfoCircleFilled}
          ></Button>
        </Col>
      </Row>
      <Row className={styles.chatWindow}>
        <Col span={24} className={styles.chatMessage}>
          <Row className={styles.chatMessageName}>
            John Carrey
            <Col className={styles.chatMessageTime}>
              <span>10:20pm</span>
              <span>January 1, 2020</span>
            </Col>
          </Row>

          <Row className={styles.chatMessageTextPanel}>
            <Col className={styles.chatMessageText}>
              Hello what's up? jolkjl lal oasfladsfj alsdf adsf ads adsfjadlsfj
              adsfj adslf adsf ads
            </Col>

            <Col className={styles.chatMessageAction}>
              {AppIcons.MoreOutlined}

              <List
                className={styles.chatMessageActionItems}
                dataSource={msgActButtons}
                renderItem={(item: any) => (
                  <List.Item>
                    <Button type="link" icon={item.ico}></Button>
                  </List.Item>
                )}
              />
            </Col>
          </Row>
        </Col>

        <Col
          span={24}
          className={styles.chatMessage + " " + styles.chatMessageReceiver}
        >
          <Row className={styles.chatMessageName}>
            You
            <Col className={styles.chatMessageTime}>
              <span>10:20pm</span>
              <span>January 1, 2020</span>
            </Col>
          </Row>

          <Row className={styles.chatMessageTextPanel}>
            <Col className={styles.chatMessageText}>
              Hello what's up? jolkjl lal oasfladsfj alsdf adsf ads adsfjadlsfj
              adsfj adslf adsf ads
            </Col>

            <Col className={styles.chatMessageAction}>
              {AppIcons.MoreOutlined}

              <List
                className={styles.chatMessageActionItems}
                dataSource={msgActButtons}
                renderItem={(item) => (
                  <List.Item>
                    <Button type="link" icon={item.ico}></Button>
                  </List.Item>
                )}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24} className={styles.chatMessageDate}>
          <span>10 September</span>
        </Col>
        <Col
          span={24}
          className={styles.chatMessage + " " + styles.chatMessageReceiver}
        >
          <Row className={styles.chatMessageName}>
            You
            <Col className={styles.chatMessageTime}>
              <span>3:34pm</span>
              <span>June 7, 2020</span>
            </Col>
          </Row>

          <Row className={styles.chatMessageTextPanel}>
            <Col className={styles.chatMessageText}>
              This is a sample message to show how does it look.
            </Col>

            <Col className={styles.chatMessageAction}>
              {AppIcons.MoreOutlined}

              <List
                className={styles.chatMessageActionItems}
                dataSource={msgActButtons}
                renderItem={(item) => (
                  <List.Item>
                    <Button type="link" icon={item.ico}></Button>
                  </List.Item>
                )}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24} className={styles.chatMessage}>
          <Row className={styles.chatMessageName}>
            John Carrey
            <Col className={styles.chatMessageTime}>
              <span>4:12pm</span>
              <span>June 8, 2021</span>
            </Col>
          </Row>

          <Row className={styles.chatMessageTextPanel}>
            <Col className={styles.chatMessageText}>
              This is the message that I received
            </Col>

            <Col className={styles.chatMessageAction}>
              {AppIcons.MoreOutlined}

              <List
                className={styles.chatMessageActionItems}
                dataSource={msgActButtons}
                renderItem={(item) => (
                  <List.Item>
                    <Button type="link" icon={item.ico}></Button>
                  </List.Item>
                )}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24} className={styles.chatMessage}>
          <Row className={styles.chatMessageName}>
            John Carrey
            <Col className={styles.chatMessageTime}>
              <span>4:12pm</span>
              <span>June 8, 2021</span>
            </Col>
          </Row>

          <Row className={styles.chatMessageTextPanel}>
            <Col className={styles.chatMessageText}>
              Another message that I received here will be shown here. This is a
              test message that shows if my construction of this chat is good
              enough for production.
            </Col>

            <Col className={styles.chatMessageAction}>
              {AppIcons.MoreOutlined}

              <List
                className={styles.chatMessageActionItems}
                dataSource={msgActButtons}
                renderItem={(item) => (
                  <List.Item>
                    <Button type="link" icon={item.ico}></Button>
                  </List.Item>
                )}
              />
            </Col>
          </Row>
        </Col>

        <Col
          span={24}
          className={styles.chatMessage + " " + styles.chatMessageReceiver}
        >
          <Row className={styles.chatMessageName}>
            You
            <Col className={styles.chatMessageTime}>
              <span>3:34pm</span>
              <span>June 7, 2020</span>
            </Col>
          </Row>

          <Row className={styles.chatMessageTextPanel}>
            <Col className={styles.chatMessageText}>
              Hey what's up? How's your life going? Can you see this text
              message that's coming from me?
            </Col>

            <Col className={styles.chatMessageAction}>
              {AppIcons.MoreOutlined}

              <List
                className={styles.chatMessageActionItems}
                dataSource={msgActButtons}
                renderItem={(item) => (
                  <List.Item>
                    <Button type="link" icon={item.ico}></Button>
                  </List.Item>
                )}
              />
            </Col>
          </Row>
        </Col>

        <Col
          span={24}
          className={styles.chatMessage + " " + styles.chatMessageReceiver}
        >
          <Row className={styles.chatMessageName}>
            You
            <Col className={styles.chatMessageTime}>
              <span>3:34pm</span>
              <span>June 7, 2020</span>
            </Col>
          </Row>

          <Row className={styles.chatMessageTextPanel}>
            <Col className={styles.chatMessageText}>
              Or you want me to send it again?
            </Col>

            <Col className={styles.chatMessageAction}>
              {AppIcons.MoreOutlined}

              <List
                className={styles.chatMessageActionItems}
                dataSource={msgActButtons}
                renderItem={(item) => (
                  <List.Item>
                    <Button type="link" icon={item.ico}></Button>
                  </List.Item>
                )}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24} className={styles.chatMessage}>
          <Row className={styles.chatMessageName}>
            John Carrey
            <Col className={styles.chatMessageTime}>
              <span>4:12pm</span>
              <span>June 8, 2021</span>
            </Col>
          </Row>

          <Row className={styles.chatMessageTextPanel}>
            <Col className={styles.chatMessageText}>
              Yes I can see your text
            </Col>

            <Col className={styles.chatMessageAction}>
              {AppIcons.MoreOutlined}

              <List
                className={styles.chatMessageActionItems}
                dataSource={msgActButtons}
                renderItem={(item) => (
                  <List.Item>
                    <Button type="link" icon={item.ico}></Button>
                  </List.Item>
                )}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24} className={styles.chatMessage}>
          <Row className={styles.chatMessageName}>
            John Carrey
            <Col className={styles.chatMessageTime}>
              <span>4:12pm</span>
              <span>June 8, 2021</span>
            </Col>
          </Row>

          <Row className={styles.chatMessageTextPanel}>
            <Col className={styles.chatMessageText}>
              Maybe the connection is troubling.
            </Col>

            <Col className={styles.chatMessageAction}>
              {AppIcons.MoreOutlined}

              <List
                className={styles.chatMessageActionItems}
                dataSource={msgActButtons}
                renderItem={(item) => (
                  <List.Item>
                    <Button type="link" icon={item.ico}></Button>
                  </List.Item>
                )}
              />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className={styles.chatComposePanel}>
        <form>
          <Col className={styles.chatCompose}>
            <TextArea
              onChange={handleMessageChange}
              className={styles.textArea}
              rows={4}
            />
            <Button onClick={handleSentMessage}>Send</Button>
          </Col>

          <Col className={styles.chatComposeActions}>
            <Col className={styles.chatComposeActionsEditor}>
              Editor buttons
            </Col>

            <Col className={styles.chatComposeActionsAttachments}>
              <Button type="link" icon={AppIcons.LinkOutlined}></Button>

              <Button type="link" icon={AppIcons.LikeFilled}></Button>

              <Button type="link" icon={AppIcons.CameraFilled}></Button>

              <Button type="link" icon={AppIcons.UploadOutlined}></Button>
            </Col>
          </Col>
        </form>
      </Row>
    </>
  );
}
