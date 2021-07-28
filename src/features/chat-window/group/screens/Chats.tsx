import { Button, Col, List, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useEffect, useState } from "react";
import cookie from "react-cookies";
import { AppIcons, msgActButtons } from "../../AppIcons";
import styles from "../../layout.module.scss";
import { IGetSingleGroup, ISentMessage } from "../types/groput-chat.types";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { AUTH_ACCESS_TOKEN } from "../../../auth/constants/auth.keys";
import { sendMessage } from "../redux/send-message.slice";
import { getGroupMessages } from "../redux/get.group.messages.slice";
import MessageBlock from "./MessageBlock";

export default function Chats({ groupItem }: any) {
  const dispatch = useAppDispatch();
  const singleGroup: any = useAppSelector((state: any) => state.singleGroup);
  const userData = useAppSelector((state: any) => state.auth.data);
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const handleMessageChange = (e: any) => {
    setMessage(e.target.value);
  };
  const token = cookie.load(AUTH_ACCESS_TOKEN);

  const handleSentMessage = () => {
    // console.log(singleGroup);
    const data: ISentMessage = {
      group_id: singleGroup.id,
      message: message,
      token: token,
    };
    dispatch(sendMessage(data));
  };

  const getMessages = async () => {
    const data: IGetSingleGroup = {
      group_id: singleGroup.id,
      token: token,
    };
    const response = await dispatch(getGroupMessages(data));
    setMessageList(response.payload);
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <>
      <Row className={styles.chatWindow}>
        <MessageBlock messages={messageList} userData={userData} />

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
