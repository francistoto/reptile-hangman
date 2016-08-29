import React from 'react';

export default class Gallows extends React.Component {

	constructor(props) {
		super(props);
		
	}

	render() {
		return(
			<div>
				<svg width="500" height="500" >
					<line x1="50" y1="450" x2="450" y2="450" stroke="#666" stroke-width="20"/>
					<line x1="100" y1="450" x2="100" y2="50" stroke="#666" stroke-width="20"/>
					<line x1="90" y1="60" x2="300" y2="60" stroke="#666" stroke-width="20"/>
					<line x1="100" y1="110" x2="150" y2="60" stroke="#666" stroke-width="20"/>
					<line x1="275" y1="55" x2="275" y2="170" stroke="#666" stroke-width="5"/>
					<circle cx="275" cy="180" r="10" fill="white" stroke="#666" stroke-width="5"/>
					<circle class="head miss1" cx="275" cy="158" r="30" fill="#c33" opacity="1" />
					<line class="torso miss2" x1="275" y1="190" x2="275" y2="290" stroke="#c33" stroke-width="12" opacity="1" />
					<line class="arm-left miss3" x1="275" y1="220" x2="220" y2="250" stroke="#c33" stroke-width="12" opacity="1" />
					<line class="arm-right miss4" x1="275" y1="220" x2="330" y2="250" stroke="#c33" stroke-width="12" opacity="1" />
					<line class="leg-left miss5" x1="275" y1="285" x2="230" y2="350" stroke="#c33" stroke-width="12" opacity="1" />
					<line class="leg-right miss6" x1="275" y1="285" x2="320" y2="350" stroke="#c33" stroke-width="12" opacity="1" />
				</svg>
			</div>
		)
	}

}

