import React, { useState, useEffect } from "react";

export default function Story({ data }) {
	return (
		<div className='storyContainer'>
			<div classname='story  fa-plus'></div>
			{data.map((item) => {
				return (
					<div className='story'>
						<img src={item.image} alt={item.title} />
						<p>{item.username}</p>
					</div>
				);
			})}
		</div>
	);
}
