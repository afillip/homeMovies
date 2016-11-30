import React from 'react'

export default class InputBar extends React.Component{
	constructor(props){
		super(props);
		this.state={

		}
	}

	_submitNewMovie(e){
		// e.preventDefault()
		// console.log("data", e)
	}

	render(){
		return(
			<div className = 'input-bar'>
				<form onSubmit={console.log("form", this)}>
					<div className='form-group row'>
						<label className="col-xs-8 col-form-label">Title</label>
						<div className="col-xs-8">
							<input type='text' className='form-control' id='inputTitle'/>
						</div>
					</div>
					<div className='form-group row'>
						<label className="col-xs-8 col-form-label">Genre</label>
						<div className="col-xs-8">
							<input type='text' className='form-control' id='inputGenre'/>
						</div>
					</div>
					<div className='form-group row'>
						<label className="col-xs-8 col-form-label">Rating</label>
						<div className="col-xs-8">
							<input type='text' className='form-control' id='inputRating'/>
						</div>
					</div>
					<div className='form-group row'>
						<label className="col-xs-8 col-form-label">Actors</label>
						<div className="col-xs-8">
							<input type='text' className='form-control' id='inputActors'/>
						</div>
					</div>
					<div className='form-group row'>
						<label className="col-xs-8 col-form-label">Year</label>
						<div className="col-xs-8">
							<input type='text' className='form-control' id='inputYear'/>
						</div>
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		)
	}

}