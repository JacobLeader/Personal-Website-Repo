'use client';
import Typed from 'typed.js';
import React, { useState, useEffect, useRef } from 'react';

export default function TypedText() {
  const el = useRef(null);
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    const hasAnimationRun = sessionStorage.getItem('hasRunTypedAnimation');
    if (hasAnimationRun) {
      setHasRun(true);
      return; // Skip typing if already run
    }

    // only run if hasnt run in session
    const typed = new Typed(el.current, {
      strings: [
        "<span class='text-darkGray'>Jacob Leader</span><br><span class='text-coral '>Web Dev &amp; AI Enthusiast</span>^2000"
      ],
      typeSpeed: 95,
      backSpeed: 110,
      backDelay: 700,
      contentType: 'html',
      onComplete: function(self) {
        self.cursor.remove();
        setHasRun(true);
        sessionStorage.setItem('hasRunTypedAnimation', 'true');
      },
    });

    return () => {
      typed.destroy();
    };
  }, []); 

  if (!hasRun) {
    return (
      <div className="font-JetBrains leading-tight tracking-tight text-7xl">
        <span ref={el} />
      </div>
    );
  } else {
    return (
      <div className='font-JetBrains tracking-tight text-7xl space-y-4'>
        <div className="text-darkGray text-7xl pb-">Jacob Leader</div>
        <div className="text-coral text-6xl">Web Dev & AI Enthusiast</div>
      </div>
    );
  }
}
