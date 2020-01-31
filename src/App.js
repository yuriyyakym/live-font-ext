import React from 'react';
import { useAppState } from './state';
import FontConfiguration from './modules/font-configuration';
import PageFonts from './modules/page-fonts';

function App() {
  const { selectedFont } = useAppState();

  return (
    <div className="App">
      {!selectedFont && <PageFonts />}
      {selectedFont && <FontConfiguration />}
    </div>
  );
}

export default App;
