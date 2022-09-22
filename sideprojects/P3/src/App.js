import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import New from "./components/New.js";
import Post from "./components/Post.js";
import Story from "./components/Story.js";
import axios from "axios";

function App() {
	const [username, setUsername] = useState("");

	const [image, setImage] = useState("");
	const [video, setVideo] = useState("");
	const [comment, setComment] = useState("");
	const [likes, setLikes] = useState(0);
	const [captions, setCaptions] = useState("");
	const [data, setData] = useState([]);
	const [toggleEdit, setToggleEdit] = useState(false);
	const [toggleNew, setToggleNew] = useState(false);

	const cardToggleNew = () => {
		{
			toggleNew ? setToggleNew(false) : setToggleNew(true);
		}
	};
	const handleNewUser = (event) => {
		setUsername(event.target.value);
	};

	const handlesetImage = (event) => {
		setImage(event.target.value);
	};

	const handlesetVideo = (event) => {
		setVideo(event.target.value);
	};

	const handlesetComment = (event) => {
		setComment(event.target.value);
	};

	const handlesetLikes = (event) => {
		setLikes(event.target.value);
	};

	const handlesetCaptions = (event) => {
		setCaptions(event.target.value);
	};

	const handleNew = (event) => {
		event.preventDefault();
		axios
			.post("https://young-oasis-10029.herokuapp.com/create", {
				username: username,
				image: image,
				video: video,
				comment: comment,
				likes: likes,
				caption: captions,
			})
			.then(() => {
				axios
					.get("https://young-oasis-10029.herokuapp.com/")
					.then((response) => {
						setData(response.data);
					});
			});
	};

	useEffect(() => {
		axios.get("https://young-oasis-10029.herokuapp.com/").then((response) => {
			setData(response.data);
		});
	}, []);

	const likesIncrease = (post) => {
		//id of the current post that you are clicking
		const postId = post._id;
		const newData = data.map((item) => {
			if (item._id === postId) {
				return { ...item, likes: item.likes + 1 };
			}
			return item;
		});
		setData(newData);
		axios.put(`https://young-oasis-10029.herokuapp.com/update/${post._id}`, {
			likes: post.likes + 1,
		});
	};

	const handleUpdate = (item) => {
		axios
			.put(`https://young-oasis-10029.herokuapp.com/update/${item._id}`, {
				username: username ? username : item.username,
				image: image ? image : item.image,
				video: video ? video : item.video,
				comment: comment ? comment : item.comment,
				likes: likes ? likes : item.likes,
				caption: captions ? captions : item.caption,
			})
			.then(() => {
				axios
					.get("https://young-oasis-10029.herokuapp.com/")
					.then((response) => {
						console.log(response);
						setData(response.data);
					});
			});
	};

	const handleDelete = (dataDelete) => {
		axios
			.delete(
				`https://young-oasis-10029.herokuapp.com/delete/${dataDelete._id}`
			)
			.then(() => {
				axios
					.get("https://young-oasis-10029.herokuapp.com/")
					.then((response) => {
						setData(response.data);
					});
			});
	};

	return (
		<div className='App'>
			<Header
				handleNew={handleNew}
				handleNewUser={handleNewUser}
				handlesetImage={handlesetImage}
				handlesetVideo={handlesetVideo}
				handlesetLikes={handlesetLikes}
				handlesetComment={handlesetComment}
				handlesetCaptions={handlesetCaptions}
				cardToggleNew={cardToggleNew}
				toggleNew={toggleNew}
			/>
			<Story data={data} />
			<ul>
				{data.map((post) => {
					return (
						<Post
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
						/>
					);
				})}
			</ul>
			<Footer />
		</div>
	);
}

export default App;
