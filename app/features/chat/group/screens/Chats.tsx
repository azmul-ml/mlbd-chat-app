import React from "react";
import { Button, Col, List, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useState } from "react";
import cookie from "react-cookies";
import { AppIcons, msgActButtons } from "../../screens/AppICons";
import styles from "../../../../../styles/layout.module.scss";
import { ISentMessage } from "../types/group-chat.types";

import { AUTH_ACCESS_TOKEN } from "../../../auth/constants/auth.keys";
import { sendMessage } from "../redux/send-message.slice";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import classNames from "classnames/bind";

export default function Chats({ groupItem }: any) {
  const dispatch = useAppDispatch();
  const cx = classNames.bind(styles);
  const singleGroup: any = useAppSelector((state) => state.singleGroup);
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

  return (
    <>
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
              Hello what&apos;s up? jolkjl lal oasfladsfj alsdf adsf ads
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
              Hello what&apos;s up? jolkjl lal oasfladsfj alsdf adsf ads
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
              Hey what&apos;s up? How&apos;s your life going? Can you see this
              text message that&apos;s coming from me?
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

      <Row className={cx("chatComposePanel", "chBlock")}>
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
    </>
  );
}
