const Newform = ({
	handleNew,
	handleNewUser,
	handlesetImage,
	handlesetVideo,
	handlesetLikes,
	handlesetComment,
	handlesetCaptions,
}) => {
	return (
		<div>
			<br />
			<br />
			<form className='form-controlNew' onSubmit={handleNew}>
				username:
				<input
					className='form-control'
					placeholder='Username'
					type='text'
					onChange={handleNewUser}
				/>
				<br />
				image:
				<input
					className='form-control'
					placeholder='Insert Image'
					type='text'
					onChange={handlesetImage}
				/>
				<br />
				video:
				<input
					className='form-control'
					placeholder='Insert Video'
					type='text'
					onChange={handlesetVideo}
				/>
				<br />
				comment:
				<input
					className='form-control'
					placeholder='Comment'
					type='text'
					onChange={handlesetComment}
				/>
				<br />
				likes:
				<input
					className='form-control'
					type='number'
					onChange={handlesetLikes}
				/>
				<br />
				caption:
				<input
					className='form-control'
					type='text'
					onChange={handlesetCaptions}
				/>
				<br />
				<input className='btn btn-primary'type='submit' value='Add new post' />
			</form>
		</div>
	);
};
export default Newform;
