// App.tsx
import React from 'react';
import DataTable from './components/DataTables';
import "./App.css";

import {
  alcoholClasses,
  flavanoidsByAlcoholClass,
  gammaTypeOfAlcohol,
  calculateMean,
  calculateMedian,
  calculateMode,
} from "./utility";

const App: React.FC = () => {
  return (
    <div className="tables">
      <DataTable
        title="Flavanoids"
        classes={alcoholClasses}
        data={flavanoidsByAlcoholClass}
        calculateMean={calculateMean}
        calculateMedian={calculateMedian}
        calculateMode={calculateMode}
      />
      <DataTable
        title="Gamma"
        classes={alcoholClasses}
        data={gammaTypeOfAlcohol}
        calculateMean={calculateMean}
        calculateMedian={calculateMedian}
        calculateMode={calculateMode}
      />
    </div>
  );
};

export default App;
