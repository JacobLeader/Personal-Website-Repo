'use client';
import Typed from 'typed.js';
import React from 'react';

export default function TypedText() {
    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: [
          "<span class='text-darkGray'>Jacob Leader</span><br><span class='text-lightGray'>Web Dev &amp; AI</span>"
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

    return (
        <div className="font-JetBrains font-grey text-7xl leading-snug pl-[15%]">
            <span ref={el} />
        </div>
    );
    
}