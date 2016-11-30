import React from 'react'
import SearchBar from '../components/searchBar'
import InputBar from '../components/inputBar'

export default class NavBar extends React.Component{
	constructor(props){
		super(props);
		this.state = {

		}
	}

	render(){
		return(
			<div>
				<div>
					<h1> My Home Movies</h1>
				</div>
				<div>
					<nav className='navbar'>
						<div className='col-md-12'>
							<SearchBar _handleSearchInputChange={this.props._handleSearchInputChange}/>
							<InputBar/>
						</div>
					</nav>
				</div>
			</div>
		)
	}
}