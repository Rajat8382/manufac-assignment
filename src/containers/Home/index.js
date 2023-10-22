import React from 'react';
import FlavanoidsTable from '../../components/FlavanoidsTable';
import GammaTable from '../../components/GammaTable';
import { addGammaToList } from '../../utils/utils';
import wineData from '../../assets/wineDataSet.json';
import { ALCOHOL } from '../../utils/constants';
import './styles.css';

function Home() {

	/**
	 * Transform the list to object according to Alchol key
	 * 
	 * @param {Array} list - wine data from JSON
	 * @returns {Object} An Object with keys as Class-1, Class-2 ...so on
	 */
	const getClassSpecificData = (list) => {
		let classByAlcohol = {};
		for (const item of list) {
			if (!classByAlcohol[item[ALCOHOL]]) {
				classByAlcohol[item[ALCOHOL]] = {
					entries: [],
					title: `Class-${item[ALCOHOL]}`
				};
			}
			classByAlcohol[item[ALCOHOL]].entries.push(item);
		}

		return classByAlcohol;
	};

	const gammaAddedList = addGammaToList(wineData);

	return (
		<div className='container'>
			<div>
				<h2>Flavanoids Table</h2>
				<FlavanoidsTable data={getClassSpecificData(wineData)} />
			</div>
			<div>
				<h2>Gamma Table</h2>
				<GammaTable data={getClassSpecificData(gammaAddedList)} />
			</div>
		</div>
	);
}

export default Home;
