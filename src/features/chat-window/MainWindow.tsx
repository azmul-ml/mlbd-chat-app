import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./chat.module.scss";
import { Row, Col, Avatar, Typography, Button, List, Input } from "antd";
import { AppIcons, msgActButtons } from "./AppIcons";

const { Title } = Typography;
const { TextArea } = Input;

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

const AntDesignScreen = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const [chat, setChat] = useState(false);

  return (
    <>
      {chat ? (
        <Row
          className={
            fullScreen
              ? styles.chatMain + " " + styles.chatMainFullscreen
              : styles.chatMain
          }
        >
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
                      <Link to="/">
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
                <Link to="/">
                  {AppIcons.MessageOutlined}
                  <span className={styles.chatLeftDetailsHeaderText}>
                    Threads
                  </span>
                </Link>
              </Row>

              <Row
                className={
                  styles.chatLeftDetailsHeader +
                  " " +
                  styles.chatLeftDetailsHeaderLink
                }
              >
                <Link to="/">
                  {AppIcons.EditOutlined}
                  <span className={styles.chatLeftDetailsHeaderText}>
                    Draft
                  </span>
                </Link>
              </Row>

              <Row
                className={
                  styles.chatLeftDetailsHeader +
                  " " +
                  styles.chatLeftDetailsHeaderLink
                }
              >
                <Link to="/">
                  {AppIcons.CaretDownOutlined}
                  <span className={styles.chatLeftDetailsHeaderText}>
                    Groups
                  </span>
                  <Button type="link" icon={AppIcons.PlusOutlined}></Button>
                </Link>
              </Row>

              <Row className={styles.chatGroupList}>
                <List
                  dataSource={newData}
                  renderItem={(item) => (
                    <List.Item>
                      <Link to="/">
                        {AppIcons.LockOutlined}
                        {item}
                        <span className={styles.chatMessageCount}>18</span>
                      </Link>
                    </List.Item>
                  )}
                />
              </Row>
            </Row>
          </Col>

          <Col span={16} className={styles.chatRight}>
            <Row className={styles.chatClose}>
              <Button type="link" onClick={() => setChat(!chat)}>
                {AppIcons.MinusOutlined}
              </Button>
              <Button
                type="link"
                onClick={() => setFullScreen(!fullScreen)}
                icon={
                  fullScreen
                    ? AppIcons.FullscreenExitOutlined
                    : AppIcons.FullscreenOutlined
                }
              ></Button>
              <Button type="link">{AppIcons.CloseOutlined}</Button>
            </Row>

            <Row className={styles.chatRightHeader}>
              <Col className={styles.chatRightHeaderTitle}>
                <Avatar
                  size={40}
                  icon="user"
                  className={styles.chatRightAvatar}
                />

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
                <Button type="link" icon={AppIcons.UserAddOutlined}></Button>
                <Button type="link" icon={AppIcons.InfoCircleFilled}></Button>
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
                    Hello what's up? jolkjl lal oasfladsfj alsdf adsf ads
                    adsfjadlsfj adsfj adslf adsf ads
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
                className={
                  styles.chatMessage + " " + styles.chatMessageReceiver
                }
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
                    Hello what's up? jolkjl lal oasfladsfj alsdf adsf ads
                    adsfjadlsfj adsfj adslf adsf ads
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
                className={
                  styles.chatMessage + " " + styles.chatMessageReceiver
                }
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
                    Another message that I received here will be shown here.
                    This is a test message that shows if my construction of this
                    chat is good enough for production.
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
                className={
                  styles.chatMessage + " " + styles.chatMessageReceiver
                }
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
                className={
                  styles.chatMessage + " " + styles.chatMessageReceiver
                }
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
                  <TextArea className={styles.textArea} rows={4} />
                  <Button>Send</Button>
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
          </Col>
        </Row>
      ) : (
        <Row className={styles.chatStart}>
          <Button type="link" onClick={() => setChat(!chat)}>
            {AppIcons.MessageFilled}
          </Button>
        </Row>
      )}
    </>
  );
};

export default memo(AntDesignScreen);
