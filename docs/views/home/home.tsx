import React, { memo } from 'react';
import type { ReactNode } from 'react';

const Home: React.FC = () => {
  return (
    <div className='Home'>
      <h2>views/Home</h2>
    </div>
  );
};

export default memo(Home);
