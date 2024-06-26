/* eslint-disable */
import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../hoc';
import style from './styles/service.module.css';
import { services } from '../constants';

const Service = () => (
  <div className={style.container}>
    <motion.h1 variants={textVariant()} className={style.title}>
      Deliverables
    </motion.h1>
    <motion.p variants={fadeIn('', '', 0.15, 1)} className={style.subtitle}>What I can do for you -</motion.p>
    <div className={style.card_container}>
        {/* Services card */}
        {services.map((service, index) => (
          <Tilt key={service.id} className={style.tilt}>
            <motion.div
                variants={fadeIn('right', 'tween', index * 0.8, 0.5)}
                className={style.card_shadow}
            >
                <div className={style.card_overlay}>
                  <p className={style.text}>{service.text}</p>
                </div>
                <div className={style.card}>
                    <div className={style.img_container}>
                      <img className={`${style.img}`} src={service.icon} alt={service.title} loading="lazy" />
                    </div>
                    <p className={style.name}>{service.title}</p>
                    {/* <p className={style.text}>{service.text}</p> */}
                </div>
            </motion.div>
          </Tilt>
        ))}
    </div>
  </div>
);

export default SectionWrapper(Service, 'service', 'my-0');
