import React from 'react';

export default function List({title, description, link}){
	return(
		<div className="result">
			<a href={link}>
				<h3 className="result-title">{title}</h3>
			</a>
			<p className="description">{description}</p>
		</div>
		)
}
