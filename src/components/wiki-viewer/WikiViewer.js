import React, { Component } from 'react';
import axios from 'axios';
import WikiForm from '../wiki-form/WikiForm';
import WikiList from '../wiki-list/WikiList';
import './WikiViewer.scss';

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const baseUrl = 'https://en.wikipedia.org/w/api.php';

class WikiViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
    };
  }

  search = async (searchStr) => {
    if (!searchStr) return;

    const result = await axios.get(proxyUrl + baseUrl, {
      params: {
        action: 'query',
        list: 'search',
        srsearch: searchStr,
        utf8: '',
        format: 'json',
      },
    });

    this.setState({
      results: result.data.query.search.map((r) => ({
        title: r.title,
        id: r.pageid,
      })),
    });

    console.log(result.data);
  };

  render() {
    return (
      <div className='WikiViewer'>
        <WikiForm search={this.search} />
        <WikiList results={this.state.results} />
      </div>
    );
  }
}

export default WikiViewer;
