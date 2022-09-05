import React, { useState, useEffect } from "react";

export default function Story({ data }) {
	return (
		<div className='storyContainer'>
			<div className='story  '>
				<p className='adding fa fa-plus-circle'></p>
			</div>
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
