import React, { Component, createRef, FormEvent } from 'react';
import './InputDemo.css';

type Props = {};
type State = {};
export default class InputDemo extends Component<Props, State> {
  private fileInput = createRef<HTMLInputElement>();

  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: FormEvent) {
    event.preventDefault();
    const node = this.fileInput.current;
    console.log(node);
    if (node) {
      if (node.files) {
        alert(`Selected file - ${node.files[0].name}`);
      }
    }
  }

  componentDidMount() {
    this.fileInput.current!.setAttribute('webkitdirectory', '');
    this.fileInput.current!.setAttribute('directory', '');
    this.fileInput.current!.setAttribute('multiple', '');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input type="file" ref={this.fileInput} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
