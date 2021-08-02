import React from "react";
import { Button, Col, List, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useEffect, useState } from "react";
import cookie from "react-cookies";
import { AppIcons, msgActButtons } from "../../AppIcons";
import styles from "../../layout.module.scss";
import {
  IMessageRecieve,
  ISentMessage,
  ISignleGroup,
} from "../types/groput-chat.types";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { AUTH_ACCESS_TOKEN } from "../../../auth/constants/auth.keys";
import { sendMessage } from "../redux/send-message.slice";
import MessageBlock from "./MessageBlock";
import { RootState } from "../../../../app/store";
import { useGetMessages, useSyncRealtipeMessage } from "../../helpers/hooks";

export default function Chats() {
  const dispatch = useAppDispatch();
  const singleGroup: ISignleGroup = useAppSelector(
    (state: RootState) => state.singleGroup
  );
  const userData = useAppSelector((state: RootState) => state.auth.data);
  const messageList = useGetMessages();
  const syncMessages = useSyncRealtipeMessage(messageList);
  const [message, setMessage] = useState("");

  const handleMessageChange = (e: any) => {
    setMessage(e.target.value);
  };
  const token = cookie.load(AUTH_ACCESS_TOKEN);
  const handleSentMessage = () => {
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
        <MessageBlock
          messages={
            syncMessages?.length > messageList?.length
              ? syncMessages
              : messageList
          }
          userData={userData}
        />
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
