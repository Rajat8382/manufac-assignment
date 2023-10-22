import React, { useEffect, useState } from 'react';
import Table from '../Table';
import { GAMMA } from '../../utils/constants';
import { getMean, getMedian, getMode } from '../../utils/utils';

const GammaTable = ({ data }) => {
	const [ statisticsData, setStatisticsData ] = useState({
		classes: [],
		row1: [],
		row2: [],
		row3: []
	});

	/**
 * 
 * @returns Modifies the object by adding mean, mode and median by using `Flavanoids` key.
 */
	const getDataWithStatistics = () => {
		for (const alcoholKey in data) {
			const entries = data[alcoholKey]?.entries;
			data[alcoholKey].mean = getMean(entries, GAMMA);
			data[alcoholKey].median = getMedian(entries, GAMMA);
			data[alcoholKey].mode = getMode(entries, GAMMA);
		}

		return data;
	};

	useEffect(() => {
		const alcoholData = getDataWithStatistics();
		let classesArr = [],
		meanArr = [],
		medianArr = [],
		modeArr = [];

		// separating mean, median and mode data and putting in different Array.
		for (let key in alcoholData) {
			classesArr.push(alcoholData[key].title);
			meanArr.push(alcoholData[key].mean);
			medianArr.push(alcoholData[key].median);
			modeArr.push(alcoholData[key].mode);
		}
		setStatisticsData({ classes: classesArr, row1: meanArr, row2: medianArr, row3: modeArr });
	},[getDataWithStatistics()]);

	return (
		<div>
			<Table type={GAMMA} data={statisticsData} />
		</div>
	);
};

export default GammaTable;
