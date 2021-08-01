import { Button, Col, List, Row } from "antd";
import { getSingleUser } from "../../../users/redux/user.slice";
import { AppIcons, msgActButtons } from "../../AppIcons";
import styles from "../../layout.module.scss";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import moment from "moment";
import { RootState } from "../../../../app/store";
import { IMessageRecieve } from "../types/groput-chat.types";
import { ILoggedInUse } from "../../../auth/types/auth.types";
import { IAllUserRecieved } from "../../../users/type/user.types";

interface IMessageBLock {
  messages: IMessageRecieve[];
  userData: ILoggedInUse;
}

export default function MessageBlock({ messages, userData }: IMessageBLock) {
  const users = useAppSelector((state: RootState) => state.user);
  const getSenderData = (senderId: string) =>
    users.filter((usr: IAllUserRecieved) => usr._id === senderId);
  return (
    <div>
      {messages?.map((message: IMessageRecieve) =>
        message.sender_id === userData.user_id ? (
          <Col
            span={24}
            className={styles.chatMessage + " " + styles.chatMessageReceiver}
          >
            <Row className={styles.chatMessageName}>
              You
              <Col className={styles.chatMessageTime}>
                <span>{moment(message.sent_at).format("h:m:s")}</span>
                <span>{moment(message.sent_at).format("MMMM Do YYYY")}</span>
              </Col>
            </Row>

            <Row className={styles.chatMessageTextPanel}>
              <Col className={styles.chatMessageText}>{message.message}</Col>

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
        ) : (
          <Col span={24} className={styles.chatMessage}>
            <Row className={styles.chatMessageName}>
              {getSenderData(message.sender_id)[0].name}
              <Col className={styles.chatMessageTime}>
                <span>{moment(message.sent_at).format("h:m:s")}</span>
                <span>{moment(message.sent_at).format("MMMM Do YYYY")}</span>
              </Col>
            </Row>
            <Row className={styles.chatMessageTextPanel}>
              <Col className={styles.chatMessageText}>{message.message}</Col>
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
        )
      )}
    </div>
  );
}
