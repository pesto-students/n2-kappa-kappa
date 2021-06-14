import React from 'react';

// local api
import carouselData from './constants/carouselData.constants';

// components
import Carousel from './components/organisms/carousel';

function App() {
  return (
    <div>
      <Carousel data={carouselData} />
    </div>
  );
}

export default App;
