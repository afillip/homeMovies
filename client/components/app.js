import React from 'react';

import SearchBar from '../components/searchBar';
import MovieList from '../components/movieList';
import MovieResults from '../components/movieResults';

export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			messages: {}
		}
	}

	render(){
		return(
			<div>
				<SearchBar />
				<MovieResults />
				<MovieList />
			</div>
		)
	}
}