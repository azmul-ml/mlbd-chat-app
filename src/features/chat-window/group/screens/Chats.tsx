import React from "react";
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

// const arr: Messages[] = []

interface IMessage {
  group_id: string;
  id: string;
  mentions: [];
  message: string;
  // parent_message: {attachments: Array(0), id: "", message: "", sender_id: ""}
  // parent_message_id: ""
  // recipients: (3) [{…}, {…}, {…}]
  // reply_count: 0
  sender_id: string;
  sent_at: string;
  updated_at: string;
}

export default function Chats({ groupItem }: any) {
  const dispatch = useAppDispatch();
  const singleGroup: any = useAppSelector((state: any) => state.singleGroup);
  const userData = useAppSelector((state: any) => state.auth.data);
  const instantText: any | null = useAppSelector(
    (state: any) => state.onMessageRecieve
  );
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState<IMessage[]>([]);
  const [newMessages, setNewMessages] = useState<object>([]);
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
    console.log(response.payload);
    response.payload && setMessageList([...response.payload].reverse());
  };

  useEffect(() => {
    getMessages();
  }, []);

  useEffect(() => {
    let allMessages = [...messageList];
    if (instantText) {
      // console.log([instantText, ...allMessages]);

      setNewMessages([...allMessages, instantText]);
    }
  }, [instantText]);

  return (
    <>
      <Row className={styles.chatWindow}>
        <MessageBlock
          messages={instantText ? newMessages : messageList}
          userData={userData}
        />

        {/* <Col span={24} className={styles.chatMessageDate}>
          <span>10 September</span>
        </Col> */}
      </Row>
      {console.log("dddddd", newMessages)}
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
