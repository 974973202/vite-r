import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence, useCycle } from 'framer-motion';

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

const Ball = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #007bff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const variants = {
  open: {
    opacity: 1,
    // width: 100,
    // height: 100,
    // transform: {
    //   scale: 1.2,
    // },
    transition: {
      duration: 0.5,
    },
  },
  closed: {
    opacity: 0,
    // width: 50,
    // height: 50,
    // transform: {
    //   scale: 1,
    // },
    transition: {
      duration: 0.3,
    },
  },
};

const positions = {
  top: { x: 0, y: -75 },
  right: { x: 75, y: 0 },
  bottom: { x: 0, y: 75 },
  left: { x: -75, y: 0 },
};

const App = () => {
  const [isOpen, setIsOpen] = useCycle(false, true);

  return (
    <Container>
      <AnimatePresence>
        {isOpen && (
          <div>
            {Object.entries(positions).map(([key, value]) => (
              <Ball
                key={key}
                variants={variants}
                initial="closed"
                animate="open"
                exit="closed"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',

                  transform: `translate(-50%, -50%) translate(${value.x}px, ${value.y}px)`,
                }}
              >
                {key}
              </Ball>
            ))}
          </div>
        )}
      </AnimatePresence>
      <Ball
        // variants={variants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        onClick={setIsOpen}
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        // whileHover={{ scale: 1.2, rotate: 90 }}
        // whileTap={{
        //   scale: 0.8,
        //   rotate: -90,
        //   borderRadius: '100%',
        // }}
      >
        Click me
      </Ball>
    </Container>
  );
};

export default App;
