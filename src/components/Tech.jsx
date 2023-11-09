import React from 'react';

import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

// Tech is a functional component that displays the technologies I use
const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap
    justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

// Export the Tech component
export default SectionWrapper(Tech, '');