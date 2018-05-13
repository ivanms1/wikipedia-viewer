import React, { Component } from 'react';
import ResultList from './result-list';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = { search: '', results: undefined }

    this.handleChange = this.handleChange.bind(this);
    this.searchTerm = this.searchTerm.bind(this);
  }

  handleChange(event){
    this.setState({ search: event.target.value })
  }

  searchTerm(event){
    event.preventDefault();
    if(this.state.search){
      let resultsBox = document.querySelector('.results-box');
      resultsBox.classList.remove('show');    

      fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&format=json&formatversion=2&search=${this.state.search}&limit=15`)
      .then(res => res.json())
      .then(data => {
        this.setState({results: data, search: '' })
        resultsBox.classList.add('show');
      });
    }

  }




  render() {
    return (
      <div className="App">
      <h1 className="title">Wikipedia Viewer</h1>
      <form onSubmit={this.searchTerm}>
        <input className="search-bar" value={this.state.search} onChange={this.handleChange} type="text"/>
        <input className="submit-btn" value="Search" type="submit"/>
      </form>
        <ResultList results={this.state.results}/>
        <div className="footer">
          <p>Made by <a href="https://ivanms1.github.io/">Ivan</a></p>
        </div>
      </div>
    );
  }
}

export default App;
