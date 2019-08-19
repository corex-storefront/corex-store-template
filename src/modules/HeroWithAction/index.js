import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.sass';
import Button from '../Button';

const cssObject = {
  'Esquina superior izquierda': ['flex-start', 'flex-start', 'flex-start'],
  'Esquina inferior izquierda': ['flex-start', 'flex-end', 'flex-start'],
  'Centrado y a la izquierda': ['flex-start', 'center', 'flex-start'],
  'Esquina superior derecha': ['flex-end', 'flex-start', 'flex-end'],
  'Esquina inferior derecha': ['flex-end', 'flex-end', 'flex-end'],
  'Centrado y a la derecha': ['flex-end', 'center', 'flex-end'],
  Centrado: ['center', 'center', 'center'],
};

const HeroWithAction = (props) => {
  const device = props.device;
  const screenSize = device.screenSize;
  const isPhone = screenSize === 'phone';
  if (!props.cube) return null;
  const cube = props.cube;
  const blocks = cube.blocks;

  if (!blocks || !blocks.length) return null;

  const [block] = blocks;
  const [
    desktopImage,
    mobileImage,
    backgroundColor,
    textColor,
    title,
    text,
    link,
    callToAction,
    align,
  ] = block.props;

  const alignData = cssObject[align.value];

  return (
    <section id={styles.component} className={styles[screenSize]}>
      <div className={styles.container}>
        {(title.value && (
          <>
            <div
              className={`${styles.imageContainer} ${isPhone &&
                !mobileImage.value &&
                styles.sameImage}`}>
              <img
                width={window.innerWidth}
                height={460}
                src={isPhone && mobileImage.value ? mobileImage.value : desktopImage.value}
                alt='Hero'
              />
            </div>
            <div
              className={styles.textContent}
              style={{
                justifyContent: alignData[0],
                alignItems: alignData[1],
                backgroundColor: screenSize === 'phone' ? backgroundColor.value : '',
              }}>
              <div
                className={styles.textContainer}
                style={{
                  alignItems: screenSize === 'phone' ? 'center' : alignData[2],
                  color: textColor.value,
                }}>
                <h2 className={styles.title}>{title.value}</h2>
                <h3 className={styles.subtitle}>{text.value}</h3>
                <Link className={styles.link} to={link.value}>
                  <Button>
                    <span>{callToAction.value}</span>
                  </Button>
                </Link>
              </div>
            </div>
          </>
        )) || (
          <Link to={link.value}>
            <div
              className={`${styles.imageContainer} ${isPhone &&
                !mobileImage.value &&
                styles.sameImage}`}>
              <img
                src={isPhone && mobileImage.value ? mobileImage.value : desktopImage.value}
                alt='Hero'
              />
            </div>
          </Link>
        )}
      </div>
    </section>
  );
};

export default HeroWithAction;
