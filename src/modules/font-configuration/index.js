import React from "react";
import { useAppState } from "../../state";

const FontConfiguration = () => {
  const { selectedFont } = useAppState();

  return (
    <div>
      <h2>{selectedFont}</h2>
    </div>
  );
};

export default FontConfiguration;
