import data from "./data.json";

const alcoholClasses: string[] = [];
// separate data on the basis of alcohol
export const alcoholData: any[] = Object.values(
  data.products.reduce((acc: Record<string, any[]>, cur: any) => {
    const { Alcohol } = cur;
    if (!acc[Alcohol]) {
      acc[Alcohol] = [];
      alcoholClasses.push(Alcohol);
    }
    acc[Alcohol].push(cur);
    return acc;
  }, {})
);

export { alcoholClasses };

// Array traversal
const flavanoidsByAlcoholClass: number[][] = [];
export const gammaTypeOfAlcohol: number[][] = [];
for (let i = 0; i < alcoholData.length; i++) {
  const alcoholDataSet = alcoholData[i];
  const AlcoholFlavanoids: number[] = [];
  const AlcoholGamma: number[] = [];
  alcoholDataSet.forEach((item: any) => {
    AlcoholFlavanoids.push(item.Flavanoids);
    let Gamma = (item.Ash * item.Hue) / item.Magnesium;
    AlcoholGamma.push(Gamma);
  });
  flavanoidsByAlcoholClass.push(AlcoholFlavanoids);
  gammaTypeOfAlcohol.push(AlcoholGamma);
}

export { flavanoidsByAlcoholClass };

// utility method to calculate Mean
export const calculateMean = (item: number[]): string => {
  const sum = item.reduce((acc, cur) => acc + cur, 0);
  const mean = sum / item.length;
  return mean.toFixed(3);
};

// utility method to calculate Median
export const calculateMedian = (item: number[]): string => {
  const sorted = item.slice().sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? ((sorted[mid - 1] + sorted[mid]) / 2).toFixed(3)
    : sorted[mid].toFixed(3);
};

// utility method to calculate Mode
export const calculateMode = (item: number[]): string => {
  let mode = 0;
  let maxCount = 0;
  for (let i = 0; i < item.length; i++) {
    const count = item.filter((value) => value === item[i]).length;
    if (count > maxCount) {
      mode = item[i];
      maxCount = count;
    }
  }
  return mode.toFixed(3);
};
