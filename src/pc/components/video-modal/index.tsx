import { Link } from "react-router-dom";

import "./video-modal.scss";
import { useAppDispatch, useAppSelector } from "../../../common/store";
import { VideoData as CardProps } from "../../../common/types";
import { joinClasses, modifyScrollbar } from "../../../common/utils";
import ActionButton from "../action-button";
import { videoModalActions } from "../../store/slices/video-modal-slice";
import { authModalActions } from "../../store/slices/auth-modal-slice";
import Comment from "./Comment";

export interface ModalProps extends CardProps {
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const comments = [
	{
		userId: "1",
		profilePhoto:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Narendra_Modi_2021.jpg/1200px-Narendra_Modi_2021.jpg",
		username: "narendramodi",
		name: "Narendra Modi",
		comment:
			"Great video. Had tons of fun watching it. Keep up the good work mom. I love you 😘😘😘😘😘😘😘😘😘😘😘",
		postedTime: "16h ago",
		likesNum: "1M"
	},
	{
		userId: "1",
		profilePhoto:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Narendra_Modi_2021.jpg/1200px-Narendra_Modi_2021.jpg",
		username: "narendramodi",
		name: "Narendra Modi",
		comment:
			"Great video. Had tons of fun watching it. Keep up the good work mom. I love you 😘😘😘😘😘😘😘😘😘😘😘",
		postedTime: "16h ago",
		likesNum: "1M"
	},
	{
		userId: "1",
		profilePhoto:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Narendra_Modi_2021.jpg/1200px-Narendra_Modi_2021.jpg",
		username: "narendramodi",
		name: "Narendra Modi",
		comment:
			"Great video. Had tons of fun watching it. Keep up the good work mom. I love you 😘😘😘😘😘😘😘😘😘😘😘",
		postedTime: "16h ago",
		likesNum: "1M"
	},
	{
		userId: "1",
		profilePhoto:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Narendra_Modi_2021.jpg/1200px-Narendra_Modi_2021.jpg",
		username: "narendramodi",
		name: "Narendra Modi",
		comment:
			"Great video. Had tons of fun watching it. Keep up the good work mom. I love you 😘😘😘😘😘😘😘😘😘😘😘",
		postedTime: "16h ago",
		likesNum: "1M"
	},
	{
		userId: "1",
		profilePhoto:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Narendra_Modi_2021.jpg/1200px-Narendra_Modi_2021.jpg",
		username: "narendramodi",
		name: "Narendra Modi",
		comment:
			"Great video. Had tons of fun watching it. Keep up the good work mom. I love you 😘😘😘😘😘😘😘😘😘😘😘",
		postedTime: "16h ago",
		likesNum: "1M"
	},
	{
		userId: "1",
		profilePhoto:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Narendra_Modi_2021.jpg/1200px-Narendra_Modi_2021.jpg",
		username: "narendramodi",
		name: "Narendra Modi",
		comment:
			"Great video. Had tons of fun watching it. Keep up the good work mom. I love you 😘😘😘😘😘😘😘😘😘😘😘",
		postedTime: "16h ago",
		likesNum: "1M"
	},
	{
		userId: "1",
		profilePhoto:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Narendra_Modi_2021.jpg/1200px-Narendra_Modi_2021.jpg",
		username: "narendramodi",
		name: "Narendra Modi",
		comment:
			"Great video. Had tons of fun watching it. Keep up the good work mom. I love you 😘😘😘😘😘😘😘😘😘😘😘",
		postedTime: "16h ago",
		likesNum: "1M"
	},
	{
		userId: "1",
		profilePhoto:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Narendra_Modi_2021.jpg/1200px-Narendra_Modi_2021.jpg",
		username: "narendramodi",
		name: "Narendra Modi",
		comment:
			"Great video. Had tons of fun watching it. Keep up the good work mom. I love you 😘😘😘😘😘😘😘😘😘😘😘",
		postedTime: "16h ago",
		likesNum: "1M"
	},
	{
		userId: "1",
		profilePhoto:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Narendra_Modi_2021.jpg/1200px-Narendra_Modi_2021.jpg",
		username: "narendramodi",
		name: "Narendra Modi",
		comment:
			"Great video. Had tons of fun watching it. Keep up the good work mom. I love you 😘😘😘😘😘😘😘😘😘😘😘",
		postedTime: "16h ago",
		likesNum: "1M"
	}
];

export default function VideoModal(props: ModalProps) {
	const dispatch = useAppDispatch();
	const isAuthed = useAppSelector(state => state.auth.isAuthenticated);

	function handleModalClose() {
		modifyScrollbar("show");
		dispatch(videoModalActions.hideModal());
	}

	function handleAuthModalOpen() {
		dispatch(authModalActions.showModal());
	}

	return (
		<div className="app-video-modal">
			<div className="video-container-wrapper">
				<button className="close-btn" onClick={handleModalClose}>
					<i className="fas fa-times" />
				</button>
				<div className="poster-container" />
				<div className="video-container">
					<video src={props.video} playsInline autoPlay controls>
						Your browser does not support videos.
					</video>
				</div>
			</div>
			<div className="modal-content">
				<div className="modal-top">
					<header>
						<div className="rounded-photo">
							<img
								src={props.uploader?.profilePhoto}
								alt={props.uploader?.name}
							/>
						</div>
						<div className="names">
							<h3>{props.uploader?.username}</h3>
							<h4>
								{props.uploader?.name} | <span>{props.createdAt}</span>
							</h4>
						</div>
						<div className="follow-btn">
							<button>Follow</button>
						</div>
					</header>
					<p className="caption">{props.caption}</p>
					<h5 className="music">
						<i className="fas fa-music" /> {props.music}
					</h5>
					<div className="action-buttons">
						<ActionButton
							icon={<i className="fas fa-heart" />}
							number={props.likes as number}
							className="action-btn-container"
						/>
						<ActionButton
							icon={<i className="fas fa-comment-dots" />}
							number={props.comments as number}
							className="action-btn-container"
						/>
					</div>
				</div>
				<div className={joinClasses("comments", isAuthed ? "container" : "")}>
					{isAuthed ? (
						comments.map((comment, i) => <Comment key={i} {...comment} />)
					) : (
						<div className="unauthed">
							<h1>Log in to see comments</h1>
							<h5>Log in to see comments and like the video.</h5>
							<button className="primary-button" onClick={handleAuthModalOpen}>
								Log In
							</button>
							<p>
								Don't have an account? <Link to="/signup">Sign up</Link>
							</p>
						</div>
					)}
				</div>
				{isAuthed && (
					<div className="post-comment">
						<input type="text" placeholder="Add a comment" />
						<button>Post</button>
					</div>
				)}
			</div>
		</div>
	);
}
