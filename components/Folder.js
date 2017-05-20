import React from 'react';
import PropTypes from 'prop-types';

import CloseFolder from '../assets/close-folder.png';
import OpenFolder from '../assets/open-folder.png';

class Folder extends React.Component {
	render() {
		const icon = this.props.open ? this.props.icons.open : this.props.icons.close;
		console.log('icon', icon, this.props.open)

		return (
			<div style={{ cursor: 'pointer' }} onClick={this.props.toggleFolder}>
				<img src={icon} style={{ height: '16px' }} />
				<span style={{ padding: '0 0 0 8px' }}>{this.props.name}</span>
			</div>
		);
	}
}

Folder.propTypes = {
	name: PropTypes.string.isRequired,
	open: PropTypes.bool,
	icons: PropTypes.shape({
		open: PropTypes.string,
		close: PropTypes.string,
	}),
	toggleFolder: PropTypes.func.isRequired,
};

Folder.defaultProps = {
	icons: {
		open: OpenFolder,
		close: CloseFolder,
	},
	open: false,
};

export default Folder;