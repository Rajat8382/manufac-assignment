import './styles.css';

const Table = ({ data = {}, type="" }) => {
	const { classes, row1, row2, row3 } = data;
	return (
			<table>
				<thead>
					<tr>
						<th>Measure</th>
						{classes?.map((item, index) => <th key={index}>{item}</th>)}
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>{type} Mean</th>
						{row1?.map((item, index) => <td key={index}>{item}</td>)}
					</tr>
					<tr>
						<th>{type} Median</th>
						{row2?.map((item, index) => <td key={index}>{item}</td>)}
					</tr>
					<tr>
						<th>{type} Mode</th>
						{row3?.map((item, index) => <td key={index}>{item}</td>)}
					</tr>
				</tbody>
			</table>
	);
};

export default Table;
