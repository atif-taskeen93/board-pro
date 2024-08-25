import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.landing}>
        <div className={`container ${styles.sectionWrapper}`}>
          <div>
            <h1>Introduction</h1>
            <p>
              {`In an increasingly complex and regulated environment, a well-crafted constitution is more than just a legal necessity. It's the foundation upon which effective governance is built. For not-for-profit organizations, the constitution is vital in aligning the organization's mission with its operational and legal framework, ensuring both compliance and agility in the face of change. This eBook is designed to guide board members, CEOs, governance and professionals, and legal advisors through the intricacies of maintaining and updating their constitution. By approaching the constitution as a living documents that underpins every aspect of governance, this guide will provide you with the insights and particular tools necessary to ensure your organization's container is truly fit for purpose, supporting its long-term success and resilience.`}
            </p>
          </div>
          <div>
            <Image src="/banner.jpg" alt="banner" width={533} height={533} />
          </div>
        </div>
      </section>
      <section>
        <div className={`container ${styles.teamWrapper}`}>
          <h1>Our Team</h1>
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <div className={styles.teamImage}></div>
              <h2>Stephen Bowman</h2>
              <p>
                {`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer`}
              </p>
            </div>
            <div className={styles.imageWrapper}>
              <div className={styles.teamImage}></div>
              <h2>Anna Fitzgibbon</h2>
              <p>
                {`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer`}
              </p>
            </div>
            <div className={styles.imageWrapper}>
              <div className={styles.teamImage}></div>
              <h2>Gordon Shaw</h2>
              <p>
                {`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer`}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
