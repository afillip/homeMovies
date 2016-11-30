import React from 'react';


export default class SearchBar extends React.Component{
	constructor(props){
		super(props);
		this.state={
			term: ''
		}
	}

	_handleInputChange(e){
		this.props._handleSearchInputChange(e.target.value)
		this.setState({
			value:e.target.value
		})
	}

	render(){
		return(
			<div className='search-bar'>
				<form>
					<div className='form-group row'>
						<label className="col-xs-8 col-form-label">Find Movies</label>
						<div className="col-xs-8">
							<input type='text' className='form-control' id='findMovies'/>
						</div>
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>

				</form>
			</div>
		)
	}
}