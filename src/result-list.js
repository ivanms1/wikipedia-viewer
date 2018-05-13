import React from 'react';

import Result from './result';

export default function ResultList({results}){
	let array = [];
	if(results){
		for(let i = 0; i < 15; i++){
			if(!results[1][0]){
				return array = <div className="results-box">
									<div className="result">
										<h3 className="result-title">Oops</h3>
										<p className="description">no results :/</p>
									</div>
								</div>
			}
		array.push(<Result key={i} link={results[3][i]} title={results[1][i]} description={results[2][i]}/>);
			}
	}
	return(
		<div className="results-box">
				{ array }
		</div>
		
		)
}