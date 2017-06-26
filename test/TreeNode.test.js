import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { TreeNode } from '../src/TreeNode';
import { Folder } from '../src/Folder';
import { File } from '../src/File';

const singleFileData = [{
  id: '1',
  name: 'First file',
}];

const multipleFileData = [{
  id: '1',
  name: 'First file',
}, {
  id: '2',
  name: 'Second file',
}];

const singleEmptyFolder = [{
  name: 'Empty folder',
  children: [],
}];

describe('src/TreeNode.js', () => {
  it('contains an array of empty elements as "children" property', () => {
    const node = shallow(<TreeNode children={[]} />);
    expect(node.props().children).to.be.an('array');
    expect(node.instance().props.children).to.have.lengthOf(0);
  });

  it('contains an array of 1 element as "children" property', () => {
    const node = shallow(<TreeNode children={singleFileData} />);
    expect(node.props().children).to.be.an('array');
    expect(node.instance().props.children).to.have.lengthOf(1);
  });

  it('contains an array of 2 elements as "children" property', () => {
    const node = shallow(<TreeNode children={multipleFileData} />);
    expect(node.props().children).to.be.an('array');
    expect(node.instance().props.children).to.have.lengthOf(2);
  });

  it('contains a single <File /> Component with relative props', () => {
    const node = shallow(
      <TreeNode 
        id={singleFileData[0].id}
        name={singleFileData[0].name}
      />
    );
    const FileNode = node.find(File);
    expect(FileNode).to.have.length(1);
    expect(FileNode.props().id).to.equals('1');
    expect(FileNode.props().name).to.equals('First file');
  });

  it('contains an empty <Folder /> Component', () => {
    const node = shallow(
      <TreeNode
        name={singleEmptyFolder[0].name}
        children={singleEmptyFolder[0].children}
      />
    );
    const FolderNode = node.find(Folder);
    expect(FolderNode).to.have.length(1);
    expect(FolderNode.props().name).to.equals('Empty folder');
  });
});