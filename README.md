# react-filetree
Simple filetree built with ReactJS

Currently work in progress...more functionalities and customizations will arrive soon!

# Getting Started
## Installing
```
npm install --save react-filetree
```

## Usage

![Example]
(/assets/example.gif)

### data.js
```
const action = (event) => {
	console.log('action', event)
}

const data = [
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

export default data;
```

### index.html
```
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>React File Tree</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

### index.js
```
import React from 'react';
import ReactDOM from 'react-dom';
import { FileTree } from 'react-filetree';

import data from './data.js';

ReactDOM.render(
	<FileTree 
		data={data}
	/>,
  	document.getElementById('root'),
);
```

## License
This project is licensed under the MIT License - see the [LICENSE.md](/LICENSE) file for details
