import React from 'react';

const WaveSVG = () => {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
<svg className='absolute w-full ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#171717"
        fillOpacity="1"
        d="M0,160L48,181.3C96,203,192,245,288,240C384,235,480,181,576,181.3C672,181,768,235,864,234.7C960,235,1056,181,1152,181.3C1248,181,1344,235,1392,261.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      />
    </svg>
  );
};

export default WaveSVG;
