import React from 'react';
import PropTypes from 'prop-types';

import { File } from './File.js';
import { Folder } from './Folder.js';

class TreeNode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
    };

    this.toggleFolder = this.toggleFolder.bind(this);
  }

  toggleFolder() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    if (this.props.children) {
      return (
        <div>
          <Folder
            name={this.props.name}
            open={this.state.open}
            toggleFolder={this.toggleFolder}
          />
          {
            this.state.open &&
            <div style={{ padding: '0 0 0 8px' }}>
              {
                this.props.children.map((child) => (
                  <TreeNode
                    key={child.id}
                    id={child.id}
                    name={child.name}
                    icon={child.icon}
                    children={child.children}
                    action={child.action}
                  />
                ))
              }
            </div>
          }
        </div>
      );
    } else {
      return (
        <File
          id={this.props.id}
          name={this.props.name}
          icon={this.props.icon}
          action={this.props.action}
        />
      );
    }
  }
}

TreeNode.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  children: PropTypes.array,
  action: PropTypes.func,
};

export {
  TreeNode,
};