import { Button, Col, List, Row } from "antd";
import { getSingleUser } from "../../../users/redux/user.slice";
import { AppIcons, msgActButtons } from "../../AppIcons";
import styles from "../../layout.module.scss";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import moment from "moment";

export default function MessageBlock({ messages, userData }: any) {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state: any) => state.user);
  const getSenderData = (senderId: string) =>
    users.filter((usr: any) => usr._id === senderId);
  // console.log(users);

  return (
    <div>
      {console.log(messages)}
      {messages?.map((message: any) =>
        message.sender_id === userData.user_id ? (
          <Col
            span={24}
            className={styles.chatMessage + " " + styles.chatMessageReceiver}
          >
            <Row className={styles.chatMessageName}>
              You
              <Col className={styles.chatMessageTime}>
                <span>{messages.updated_at}</span>
                <span>January 1, 2020</span>
              </Col>
            </Row>
            {console.log(message.sender_id)}

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
                <span>{moment(message.updated_at).format("h:m:s")}</span>
                <span>{moment(message.updated_at).format("MMMM Do YYYY")}</span>
              </Col>
            </Row>
            <Row className={styles.chatMessageTextPanel}>
              <Col className={styles.chatMessageText}>{message.message}</Col>
              {console.log(message.updated_at)}

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
