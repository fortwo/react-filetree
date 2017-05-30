import React from 'react';
import ReactDOM from 'react-dom';

// Components
import FileTree from '../src/FileTree';

// Data
import sampleData from './sampleData.js';

ReactDOM.render(
	<FileTree data={sampleData} />,
	document.getElementById('root')
);