import React, { Component } from 'react';
import './WikiForm.scss';

class WikiForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };
  }

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleClick = () => {
    this.props.search(this.state.input);
  };

  render() {
    return (
      <div className='WikiForm'>
        <h1 className='WikiForm-title'>Wikipedia Viewer</h1>
        <input
          name='input'
          type='text'
          value={this.state.input}
          onChange={this.handleChange}
          className='WikiForm-input'
        />
        <button onClick={this.handleClick} className='WikiForm-button'>
          Search
        </button>
        <a
          href='https://en.wikipedia.org/wiki/Special:Random'
          target='noopener noreferrer'
          className='WikiForm-link'
        >
          Get Random Article
        </a>
      </div>
    );
  }
}

export default WikiForm;
