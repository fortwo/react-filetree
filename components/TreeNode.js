import React from 'react';
import PropTypes from 'prop-types';

import File from './File.js';
import Folder from './Folder.js';

class TreeNode extends React.Component {
	render() {
		if (this.props.children && this.props.children.length) {
			return (
				<div>
					<Folder 
						name={this.props.name}
						icon={this.props.icon}
					/>
					{this.props.children.map((child) => {
						return (
							<TreeNode 
								key={child.id}
								id={child.id}
								name={child.name}
								icon={child.icon}
								children={child.children}
							/>
						);
					})}
				</div>
			);
		} else {
			return (
				(this.props.children && !this.props.children.length) ?			
					<Folder 
						name={this.props.name}
						icon={this.props.icon}
					/>
				:
					<File 
						name={this.props.name}
						icon={this.props.icon}
					/>
			);
		}
	}
}

TreeNode.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	children: PropTypes.array,
};

export default TreeNode;