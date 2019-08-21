import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.sass';
import Button from '../Button';

const FixedImage = (props) => {
  const device = props.device;
  const screenSize = device.screenSize;
  const cube = props.cube;
  const blocks = cube.blocks;

  if (!blocks || !blocks.length) return null;

  const [block] = blocks;
  const [image, title, text, textColor, buttonLink, callToAction] = block.props;

  return (
    <section className={styles[screenSize]}>
      <div className={styles.container}>
        <div
          className={styles.textContent}
          style={{ backgroundImage: `url(${image.value})` }}>
          <div
            className={styles.textContainer}
            style={{ color: textColor.value }}>
            <h2 className={styles.title}>{title.value}</h2>
            <h3 className={styles.subtitle}>{text.value}</h3>
            <Link className={styles.link} to={buttonLink.value}>
              <Button>
                <span>{callToAction.value}</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FixedImage;
