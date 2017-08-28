import React from 'react';

class EyesOnMe extends React.Component {
	blur = () => {
		console.log('Hey! Eyes on me!')
	}

	focus = () => {
		console.log('Good!')
	}

	render() {
		return (

			<button onBlur={this.blur} onFocus={this.focus} />
		
			);
	}

}

export default EyesOnMe