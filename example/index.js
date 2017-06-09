import React from 'react';
import ReactDOM from 'react-dom';

// Components
import { FileTree } from '../src/FileTree';

// Sample Data
const action = (event) => {
	const file = event.name;
	alert(`action: ${file}`);
}

const sampleData = [
	{
		id: '0',
		name: 'Folder 1',
		children: [
			{
				id: '1',
				name: 'File 1 in Folder 1',
				action,
			}, {
				id: '2',
				name: 'File 2 in Folder 2',
				action,
			},
		],
	}, {
		id: '3',
		name: 'Empty Folder',
		children: [],
	}, {
		id: '4',
		name: 'Folder 2',
		children: [
			{
				id: '5',
				name: 'File 1 in Folder 2',
			}, {
				id: '6',
				name: 'File 2 in Folder 2',
				action,
			}, {
				id: '7',
				name: 'File 3 in Folder 2',
			},
		],
	}, {
		id: '8',
		name: 'File in root',
	},
];

ReactDOM.render(
  <FileTree data={sampleData} />,
  document.getElementById('root')
);