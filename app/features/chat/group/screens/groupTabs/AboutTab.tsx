import React from 'react'
import { Card, Button } from 'antd';
import Image from 'next/image'
import styles from "../GroupSettings.module.scss";

const AboutTab = () => {
  return (
    <>
      <Card className={styles.commonCard}>
        <Button type="link" className={styles.longButton}>
          <h4 className={styles.commonCardSubTitle}>Topic</h4>
          <span>Add a topic</span>
        </Button>

        <Button type="link" className={styles.longButton}>
          <h4 className={styles.commonCardSubTitle}>Description</h4>
          <span>Add a description</span>
        </Button>

        <Button type="link" className={styles.longButton}>
          <h4 className={styles.commonCardSubTitle}>Created by</h4>
          <span>Mamun Khandaker on <em>14th January, 2021</em></span>
        </Button>

        <Button danger className={styles.longButton}>
          Leave Group
        </Button>
      </Card>

      <Card className={styles.commonCard}>
        <div className={styles.cardInner}>
          <h4 className={styles.commonCardSubTitle}>Files</h4>

          <div className={styles.filesHolder}>
            <div className={styles.filesImage}>
              <Image
                src="/images/dummy_1.jpeg"
                alt="files"
                width={40}
                height={40}
              />
            </div>
            <div className={styles.filesName}>flower.png</div>
            <div className={styles.filesUploader}>
              <strong>Somrat Ali</strong> <em>10th February, 2021</em>
            </div>
          </div>

          <div className={styles.filesHolder}>
            <div className={styles.filesImage}>
              <Image
                src="/images/dummy_2.jpeg"
                alt="files"
                width={40}
                height={40}
              />
            </div>
            <div className={styles.filesName}>document.pdf</div>
            <div className={styles.filesUploader}>
              <strong>Mamun Khandaker</strong> <em>20th February, 2021</em>
            </div>
          </div>

          <div className={styles.filesHolder}>
            <div className={styles.filesImage}>
              <Image
                src="/images/dummy_1.jpeg"
                alt="files"
                width={40}
                height={40}
              />
            </div>
            <div className={styles.filesName}>flower.png</div>
            <div className={styles.filesUploader}>
              <strong>Somrat Ali</strong> <em>10th February, 2021</em>
            </div>
          </div>

          <div className={styles.filesHolder}>
            <div className={styles.filesImage}>
              <Image
                src="/images/dummy_2.jpeg"
                alt="files"
                width={40}
                height={40}
              />
            </div>
            <div className={styles.filesName}>document.pdf</div>
            <div className={styles.filesUploader}>
              <strong>Mamun Khandaker</strong> <em>20th February, 2021</em>
            </div>
          </div>
        </div>
      </Card>
    </>
  )
}

export default AboutTab;
