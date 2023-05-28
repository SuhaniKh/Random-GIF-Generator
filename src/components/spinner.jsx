import React from "react";
import {CirclesWithBar} from 'react-loader-spinner'

const Spinner = () => {
  return (
    <div className=" min-h-[200px] flex flex-col items-center justify-center">
        <CirclesWithBar
        height="100"
        width="100"
        color="#ffffff"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
        />
    </div>
  );
};

export default Spinner;
