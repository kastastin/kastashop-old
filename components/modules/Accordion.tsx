import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { IAccordionProps } from '@/types/modules'

export default function Accordion({
  children,
  title,
  titleClass,
  rotateIconClass,
}: IAccordionProps) {
  const [expanded, setExpanded] = useState(false)

  const toggleAccordion = () => setExpanded(!expanded)

  return (
    <>
      <motion.button
        className={`${titleClass} ${rotateIconClass ? (expanded ? rotateIconClass : '') : ''}`}
        initial={false}
        onClick={toggleAccordion}
      >
        {title}
      </motion.button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            style={{ overflow: 'hidden' }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
