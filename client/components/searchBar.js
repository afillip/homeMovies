import React from 'react';


export default class SearchBar extends React.Component{
	constructor(props){
		super(props);
		this.state={
			term: ''
		}
	}

	render(){
		return(
			<div>
				<form className ='searchForm'>
					<input type='text' className ='search'/>
					<input type='submit' className='subButton'/>
				</form>
			</div>
		)
	}
}