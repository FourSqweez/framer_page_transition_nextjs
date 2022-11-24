import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';


type Props = {
  children: JSX.Element,
}

const variants = {
  inactive: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeIn'
    },
  },
  out: {
    opacity: 0,
    // opacity: 1,

    y: '-100%',
    transition: {
      duration: 1,
      ease: 'easeOut'
    }
  },
  in: {
    // y: 10,
    opacity: 0,
    // opacity: 1,
    transition: {
    ease: 'easeIn'
    }
  },
}

const Transition = ({ children }: Props) => {
  const { asPath } = useRouter()


  return (
    <div>
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          key={asPath}
          variants={variants}
          animate='inactive'
          initial='in'
          exit='out'>
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Transition