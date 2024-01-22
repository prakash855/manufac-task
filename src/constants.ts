import {
  alcoholClasses,
  flavanoidsByAlcoholClass,
  gammaTypeOfAlcohol,
  calculateMean,
  calculateMedian,
  calculateMode,
} from "./utility";

export const dataTables = [
  {
    title: "Flavanoids",
    classes: alcoholClasses,
    data: flavanoidsByAlcoholClass,
    calculateMean,
    calculateMedian,
    calculateMode,
  },
  {
    title: "Gamma",
    classes: alcoholClasses,
    data: gammaTypeOfAlcohol,
    calculateMean,
    calculateMedian,
    calculateMode,
  },
];
