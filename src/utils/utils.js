import { ASH, HUE, MAGNESIUM } from "./constants";

export const getMean = (arr, key) => {
    let sum = arr?.reduce((acc, curr) => acc + Number(curr[key]), 0);
    return parseFloat((sum / arr.length).toFixed(3));
};

export const getMedian = (arr, key) => {
    const sorted = [...arr].sort((a, b) => a[key] - b[key]);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return parseFloat(((Number(sorted[middle - 1][key]) + Number(sorted[middle][key])) / 2).toFixed(3));
    } else {
        return parseFloat(sorted[middle][key].toFixed(3));
    }
};

export const getMode = (arr, key) => {	
    const valueCount = {};
    let maxCount = 0;
    let mode = null;

    arr.forEach((item) => {
        const value = Number(item[key]);
        if (!isNaN(value)) {
            if (!valueCount[value]) {
                valueCount[value] = 1;
            } else {
                valueCount[value]++;
            }

            if (valueCount[value] > maxCount) {
                maxCount = valueCount[value];
                mode = value;
            }
        }
    });

    return parseFloat(mode.toFixed(3));
};

const gamma = (item) => {
    return (item[ASH] * item[HUE]) / item[MAGNESIUM] 
}

/**
 * Add the key `Gamma` to the list
 * 
 * @param {Array} arr - gets the original array.
 * @returns Modified Array with key `Gamma`.
 */
export const addGammaToList = (arr) => {
    for(let values of arr ) {
        values['Gamma'] = gamma(values)
    }
    return arr;
}