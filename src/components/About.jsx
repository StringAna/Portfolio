import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import style from './styles/about.module.css';
import { textVariant, fadeIn } from '../utils/motion';

const About = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>
      About Me
    </motion.h1>
    <div className={style.para}>
      <motion.p variants={fadeIn('', '', 0.5, 1)} className={style.text}>
        My name is
        {' '}
        <a
          href="https://www.linkedin.com/in/tewaryantara/"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Antara Tewary
        </a>
        {' '}
        and I am just here. Trying.
      </motion.p>
      <motion.p variants={fadeIn('', '', 0.75, 1)} className={style.text}>
        I have been trying. Failing. Trying. Getting back up again, down again.
      </motion.p>
      <motion.p variants={fadeIn('', '', 1, 1)} className={style.text}>
        my whatever it is that I am doing. My attempts are listed as weird
        {' '}
        <a
          href="https://github.com/StringAna"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          {' '}
          generic contributions on GitHub
        </a>
        {' '}
        Hoping that there&apos;s light at thte end of the tunnel
      </motion.p>
      <motion.p variants={fadeIn('', '', 1.25, 1)} className={style.text}>
        Reach out for rant, for really good food, and a lot of wisdom.
        {' '}
        <a
          href="https://github.com/StringAna"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Access my resume
        </a>
        {' '}
        to know only about my profesh life. I am a lot more boring, but with a lot of gravity. No one gives a crap though.
      </motion.p>
    </div>
  </>
);

export default SectionWrapper(About, 'about', '');
