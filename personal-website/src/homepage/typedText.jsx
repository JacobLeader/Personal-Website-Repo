'use client';
import Typed from 'typed.js';
import React from 'react';

export default function TypedText() {
    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: [
          "<span class='text-darkGray '>Jacob Leader</span><br><span class='text-coral'>Web Dev &amp; AI Enthusiast</span>"
        ],
        typeSpeed: 95,
        backSpeed: 110,
        backDelay: 700,
        contentType: 'html',
        onComplete: function(self) { self.cursor.remove() }
      });
  
      return () => {
        typed.destroy();
      };
    }, []);
//  h-screen justify-center pt-[30vh]
    return (
        <div className="font-JetBrains text-7xl leading-tight tracking-tight">
            <span ref={el} />
        </div>
    );
    
}