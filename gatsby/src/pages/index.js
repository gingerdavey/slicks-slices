import React from 'react';
import useLatestData from '../utils/useLatestData';
import LoadingGrid from '../components/LoadingGrid';
import ItemGrid from '../components/ItemGrid';

import { HomePageGrid } from '../styles/Grids';

function CurrentlySlicing({ slicemasters }) {
  return (
    <div>
      <h2 className="text-center leading-1">
        <span className="mark relative inline-block -rotate-2 text-3xl leading-0">
          Slicemasters On
        </span>
      </h2>
      <p className="my-5 text-xl leading-0">
        Standing by, ready to slice you up!
      </p>
      {!slicemasters && <LoadingGrid count={8} />}
      {slicemasters && !slicemasters?.length && (
        <p className="my-5 text-xl leading-0">No one is working right now!</p>
      )}
      {slicemasters?.length && <ItemGrid items={slicemasters} />}
    </div>
  );
}

function HotSlices({ hotSlices }) {
  return (
    <div>
      <h2 className="text-center leading-1">
        <span className="mark relative inline-block -rotate-2 text-3xl leading-0">
          Hot Slices!
        </span>
      </h2>
      <p className="my-5 text-xl leading-0">Come on by, buy the slice!</p>
      {!hotSlices && <LoadingGrid count={8} />}
      {hotSlices && !hotSlices?.length && (
        <p className="my-5 text-xl leading-0">No one is working right now!</p>
      )}
      {hotSlices?.length && <ItemGrid items={hotSlices} />}
    </div>
  );
}

const HomePage = () => {
  const { slicemasters, hotSlices } = useLatestData();
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4.25xl">The Best Pizza Downtown!</h1>
        <p className="text-xl my-5 leading-0">
          Open 11am to 11pm Every Single Day
        </p>
        <HomePageGrid>
          <CurrentlySlicing slicemasters={slicemasters} />
          <HotSlices hotSlices={hotSlices} />
        </HomePageGrid>
      </div>
    </div>
  );
};

export default HomePage;
