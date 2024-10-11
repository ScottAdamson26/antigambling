import React, { useEffect, useRef } from 'react';

function Feature() {
  const splineViewerRef = useRef(null);

  useEffect(() => {
    // Dynamically add the Spline Viewer script to the document
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer/build/spline-viewer.js';
    document.head.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className='w-full h-[75vh] rounded-3xl mb-10 overflow-hidden'>
      {/* Spline Viewer element */}
      <spline-viewer
        ref={splineViewerRef}
        url="https://prod.spline.design/NTqWUC0GRzdCtTPN/scene.splinecode"
        style={{ 
          width: '100%', 
          height: '100%', 
          borderRadius: '10rem' // Adds the border radius directly to the spline-viewer
        }}
      ></spline-viewer>
    </div>
  );
}

export default Feature;
