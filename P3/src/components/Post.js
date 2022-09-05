import React, { useState, useEffect } from "react";
import Edit from "./Edit.js";
export default function Post({
	post,
	handleNewUser,
	handlesetImage,
	handlesetVideo,
	handlesetLikes,
	handlesetComment,
	handlesetCaptions,
	likesIncrease,
	handleDelete,
	handleUpdate,
}) {
	const [editFunction, setEditFunction] = useState(false);

	const cardToggle = (post) => {
		editFunction ? setEditFunction(false) : setEditFunction(true);
	};
	return (
		<div className='postImage' key={post._id}>
			<div className='caption'>
				<p>{post.username}</p>
				<p>{post.caption}</p>
			</div>
			<img src={post.image} alt={post.username} />
			<div className='interactions'>
				<div className='likeBox'>
					{" "}
					<p
						className='like fa fa-heart'
						onClick={() => {
							likesIncrease(post);
						}}
					></p>
					<p className='likeClikced'>{post.likes}</p>{" "}
				</div>
				<div className='editDelete'>
					<p
						className='fa fa-edit'
						onClick={() => {
							cardToggle(post);
						}}
					></p>
					<p
						className='fa fa-remove'
						onClick={(event) => {
							handleDelete(post);
						}}
					></p>
				</div>
				<div
					id={`updateID${post._id}`}
					className={`updateForm ${editFunction ? "" : "hide"}`}
				>
					<Edit
						post={post}
						handleNewUser={handleNewUser}
						handlesetImage={handlesetImage}
						handlesetVideo={handlesetVideo}
						handlesetLikes={handlesetLikes}
						handlesetComment={handlesetComment}
						handlesetCaptions={handlesetCaptions}
						likesIncrease={likesIncrease}
						handleDelete={handleDelete}
						handleUpdate={handleUpdate}
						cardToggle={cardToggle}
						editFunction={editFunction}
					/>
				</div>
			</div>
			<div className='comments'>
				<p>{post.comment}</p>
			</div>
		</div>
	);
}
