import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import stripes from '../assets/images/stripes.svg';

const LogoStyles = styled.div`
  /* This value controls the entire size of the logo*/
  font-size: 6px;
  font-size: clamp(1px, 0.65vw, 8px);
  width: 24em;
  height: 24em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  margin: 0;
  --borderSize: 0.75em;
  background: white url(${stripes});
  background-size: 120em;
  border: var(--borderSize) solid white;
  display: flex;
  .inner {
    margin: var(--borderSize);
    flex: 1;
    background: white;
    display: grid;
    grid-template-rows: 20% 1fr 1fr;
    align-content: center;
  }
  h1 {
    display: grid;
    grid-template-rows: 8fr 2fr;
    align-items: center;
    margin: 0;
    grid-row: 2 / span 2;
    grid-gap: 2.5em;
    transform: translateY(-1.6em);
  }

  .slices {
    font-size: 4.8em;
    letter-spacing: 0.2em;
    transform: translateY(-0.15em);
  }
  .slicks {
    transform: scale(1.4);
    display: block;
    text-shadow: 0.18em 0.18em 0 rgba(0, 0, 0, 0.05);
    perspective: 100px;
  }
  .letter {
    font-size: 7.5em;
    color: var(--red);
    --scale: 1;
    --rotate: -10deg;
    --translateX: 0;
    --translateY: 0;
    --rotateX: 0deg;
    transform: scale(var(--scale)) rotate(var(--rotate))
      translateX(var(--translateX)) translateY(var(--translateY))
      rotateX(var(--rotateX));
    display: inline-block;
    line-height: 1.15;
    transition: transform 0.3s;
    &.S {
      --translateX: -0.05;
    }
    &.l {
      --rotate: 2deg;
      --scale: 1.4;
      --translateX: 0.05em;
      --translateY: -0.05em;
    }
    &.i {
      --scale: 0.9;
      --translateY: -0.1em;
      --translateX: 0.1em;
    }
    &.c {
      --rotate: 3deg;
      --scale: 0.9;
      --translateX: 0.1em;
      --translateY: 0.23em;
    }
    &.k {
      --rotate: -12deg;
      --scale: 1.2;
      --translateX: 0.06em;
    }
    &.apos {
      --translateX: 0.1em;
    }
    &.s {
      --rotate: 12deg;
      --scale: 0.9;
      --translateY: -0.14em;
    }
  }
`;

export default function Logo() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      scale: [1, 1.5, 1],
      initial: {
        scale: 1,
      },
    },
  };

  return (
    <LogoStyles className="logo">
      <div className="inner">
        <span className="self-center text-xxs">EST 1994</span>
        <h1>
          <motion.span
            className="slicks leading-default"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.span key="letterS" className="letter S" variants={item}>
              S
            </motion.span>
            <motion.span key="letterL" className="letter l" variants={item}>
              l
            </motion.span>
            <motion.span key="letterI" className="letter i" variants={item}>
              i
            </motion.span>
            <motion.span key="letterC" className="letter c" variants={item}>
              c
            </motion.span>
            <motion.span key="letterK" className="letter k" variants={item}>
              k
            </motion.span>
            <motion.span
              key="letterAPOS"
              className="letter apos"
              variants={item}
            >
              '
            </motion.span>
            <motion.span key="letterSS" className="letter s" variants={item}>
              s
            </motion.span>
          </motion.span>
          <span className="slices">slices</span>
        </h1>
      </div>
    </LogoStyles>
  );
}
