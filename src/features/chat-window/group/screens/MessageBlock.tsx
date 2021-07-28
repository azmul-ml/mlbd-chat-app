import { Button, Col, List, Row } from "antd";
import { AppIcons, msgActButtons } from "../../AppIcons";
import styles from "../../layout.module.scss";

export default function MessageBlock({ messages, userData }: any) {
  return (
    <div>
      {console.log(messages, userData)}
      {messages?.map((message: any) =>
        message.sender_id === userData.user_id ? (
          <Col
            span={24}
            className={styles.chatMessage + " " + styles.chatMessageReceiver}
          >
            {console.log(message.sender_id, userData.user_id)}
            <Row className={styles.chatMessageName}>
              You
              <Col className={styles.chatMessageTime}>
                <span>10:20pm</span>
                <span>January 1, 2020</span>
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
              John Carrey
              <Col className={styles.chatMessageTime}>
                <span>10:20pm</span>
                <span>January 1, 2020</span>
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
