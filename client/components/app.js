import React from 'react';

import NavBar from '../components/navBar';
import MovieList from '../components/movieList';
import MovieResults from '../components/movieResults';

export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			messages: [],
		}
	}
	_handleSearchInputChange(){

	}

	render(){
		return(
			<div>
				<NavBar _handleSearchInputChange={this._handleSearchInputChange}/>
				<div className="col-md-7">
					<MovieResults />
				</div>
				<div className="col-md-5">
					<MovieList />
				</div>
			</div>
		)
	}
}