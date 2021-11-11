import { FunctionComponent } from "react";
import styles from "../../styles/Home.module.css";

import { Container, Button } from "reactstrap";

const Home: FunctionComponent = () => {
  return (
    <div>
      <section>
        <Container>
          <div className={styles.hero}>
            <div className={styles.heroContent}>
              <div>
                <h1 className={styles.heroTitle}>
                  Your One Stop Thai ERP Solution
                </h1>
                <p className={styles.heroSubtitle}>
                  BRID Systems proudly presents our very own PlanetOne ERP
                </p>
                <Button className={styles.btnGreen}>Let's Get Started!</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
