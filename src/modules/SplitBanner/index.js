import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.sass';
import Button from '../Button';

const cssObject = {
  'Esquina superior izquierda': ['flex-start', 'flex-start'],
  'Esquina inferior izquierda': ['flex-end', 'flex-start'],
  'Esquina superior derecha': ['flex-start', 'flex-end'],
  'Esquina inferior derecha': ['flex-end', 'flex-end'],
};

const SplitBanner = (props) => {
  const device = props.device;
  const screenSize = device.screenSize;
  const cube = props.cube;
  const blocks = cube.blocks;

  if (!blocks || !blocks.length) return null;

  const [block] = blocks;
  const [
    imageLeft,
    textLeft,
    colorLeft,
    buttonLeft,
    linkLeft,
    positionLeft,
    imageRight,
    textRight,
    colorRight,
    buttonRight,
    linkRight,
    positionRight,
  ] = block.props;

  const alignDataLeft = cssObject[positionLeft.value];
  const alignDataRight = cssObject[positionRight.value];
  return (
    <section className={`${styles.splitBanner} ${styles[screenSize]}`}>
      <div className={styles.content}>
        <Link to={linkLeft.value} className={styles.link}>
          <div className={styles.image}>
            <img src={imageLeft.value} alt="" />
            {textLeft.value && (
              <div
                className={styles.callToAction}
                style={{
                  justifyContent: alignDataLeft[0],
                  alignItems: alignDataLeft[1],
                }}>
                <div
                  className={styles.text}
                  style={{
                    color: colorLeft.value,
                  }}>
                  {textLeft.value}
                </div>
                <Button>
                  <span>{buttonLeft.value}</span>
                </Button>
              </div>
            )}
          </div>
        </Link>
        <Link to={linkRight.value} className={styles.link}>
          <div className={styles.image}>
            <img src={imageRight.value} alt="" />
            {textRight.value && (
              <div
                className={styles.callToAction}
                style={{
                  justifyContent: alignDataRight[0],
                  alignItems: alignDataRight[1],
                }}>
                <div
                  className={styles.text}
                  style={{
                    color: colorRight.value,
                  }}>
                  {textRight.value}
                </div>
                <Button>
                  <span>{buttonRight.value}</span>
                </Button>
              </div>
            )}
          </div>
        </Link>
      </div>
    </section>
  );
};

export default SplitBanner;
