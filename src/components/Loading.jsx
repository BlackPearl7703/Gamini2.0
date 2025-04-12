import React, { useState } from "react";

const Loading = () => (
  <div className="text-center py-4">
    <img  src="./assets/loading.png" alt="Loading animation" className="w-16 h-16 mx-auto animate-spin" />
    {/* <p className="text-green-600 text-2xl animate-pulse text-center">Loading...</p> */}

  </div>
);

export default Loading;