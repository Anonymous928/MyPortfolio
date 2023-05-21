/*import React from 'react';
import './Intro.css'
export default function Intro() {
    return (
        <>
        {/* <div className="intro-container" id='intro'>
        <div className="intro-content">
          <p id="Description">
            Welcome to my portfolio! My name is Pranjul Shikhar Verma and I am excited to show my assignment to you. Throughout this portfolio, you will find a collection of my work that demonstrates my interests and involvements in various activities. I hope you will like my portfolio. Thank you for taking the time to review my work.
          </p>
        </div>
      </div> }
      <main>
        <section className='firstSection'>
          <div className="leftSection">
            Hi, My name is <span className='purple'>Pranjul</span> 
            <div>and I am a passionate</div>
            <div>Web Developer</div>
            <span id="element"></span>
          </div>
          <div className="rightSection">
            <img src="https://static-00.iconduck.com/assets.00/web-developer-illustration-503x512-mega3xxj.png" alt="" />
          </div>
        </section>
      </main>
      <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>

        </>
    );
}
*/

import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './Intro.css';

export default function Intro() {
  const elementRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Web Developer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: false,
      onComplete: (self) => {
        self.cursor.remove();
      },
    };

    const typed = new Typed(elementRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <main id='intro'>
        <section className='firstSection'>
          <div className="leftSection">
            Hi, My name is <span className='purple'>Pranjul</span> 
            <div>and I am a passionate</div>
            <div ref={elementRef} className='typed-text'></div>
          </div>
          <div className="rightSection">
            <img src="https://static-00.iconduck.com/assets.00/web-developer-illustration-503x512-mega3xxj.png" alt="" />
          </div>
        </section>
      </main>
    </>
  );
}
