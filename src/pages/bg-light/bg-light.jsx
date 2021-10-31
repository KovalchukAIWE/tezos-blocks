import React from 'react';
import { LogoDark } from '../../components/Logo/Logo';
import MarketTraction from '../../components/Svg/MarketTraction';
import ProvenTeam from '../../components/Svg/ProvenTeam';
import UniqueTech from '../../components/Svg/UniqueTech';

import styles from './bg-light.module.scss';

const BgLight = () => {
  return (
    <div className={styles.background}>
      <div className={styles.logo}>
        <LogoDark />
      </div>
      <h1 className={styles.background__text}>What makes us different?</h1>
      <div className={styles.cards}>
        <div className={styles.card}>
          <ProvenTeam />
          <h1 className={styles.card__title}>Proven team</h1>
          <h2 className={styles.card__subtitle}>
            Founding team with multiple exits.
          </h2>
        </div>
        <div className={styles.card}>
          <MarketTraction />
          <h1 className={styles.card__title}>Market traction</h1>
          <h2 className={styles.card__subtitle}>
            Profitable, growing userbase.
          </h2>
        </div>
        <div className={styles.card}>
          <UniqueTech />
          <h1 className={styles.card__title}>Unique tech</h1>
          <h2 className={styles.card__subtitle}>Innovative technology.</h2>
        </div>
      </div>
    </div>
  );
};

export default BgLight;
