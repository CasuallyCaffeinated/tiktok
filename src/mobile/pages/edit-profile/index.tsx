import { useEffect, useState, useCallback } from "react";

import PageWithNavbar from "../../components/page-with-navbar";
import "./edit-profile.scss";
import { UserData } from "../../../common/types";
import FullscreenSpinner from "../../../common/components/fullscreen-spinner";
import { errorNotification } from "../../helpers/error-notification";
import { useAppDispatch, useAppSelector } from "../../../common/store";
import { getCustom } from "../../../common/api/user";
import constants from "../../../common/constants";
import { joinClasses } from "../../../common/utils";
import { authActions } from "../../../common/store/slices/auth";

function usesDarkTheme(): boolean {
	let stored: any = localStorage.getItem("usesDarkTheme");
	if (stored) return JSON.parse(stored);
	return false;
}

export default function EditProfile() {
	const dispatch = useAppDispatch();
	const username = useAppSelector(state => state.auth.username);
	const [user, setUser] = useState<UserData | null>(null);
	const [darkTheme, setDarkTheme] = useState(usesDarkTheme());

	useEffect(() => {
		errorNotification(async () => {
			const res = await getCustom(
				{ name: "1", email: "1", description: "1" },
				username!
			);
			delete res.data.success;
			setUser(res.data);
		}, dispatch);
	}, [dispatch, username]);

	const toggleTheme = useCallback(() => {
		const classList = document.documentElement.classList;
		if (darkTheme) {
			classList.remove("dark");
			classList.add("light");
		} else {
			classList.remove("light");
			classList.add("dark");
		}

		localStorage.setItem("usesDarkTheme", JSON.stringify(!darkTheme));
		setDarkTheme(!darkTheme);
	}, [darkTheme]);

	return (
		<PageWithNavbar containerClassName="edit-profile">
			<header>Settings</header>
			{!user ? (
				<FullscreenSpinner />
			) : (
				<div className="content">
					<section>
						<h4>ACCOUNT</h4>
						<form className="section-content">
							<div className="form-group pfp">
								<div className="rounded-photo">
									<img
										src={constants.pfpLink + "/" + user.username}
										alt={user.name}
									/>
								</div>
								<span>Change profile photo</span>
							</div>
							<div className="form-group">
								<label htmlFor="name">Name</label>
								<div className="data">
									<p className="break-word">{user.name}</p>
									<span>Edit</span>
								</div>
							</div>
							<div className="form-group">
								<label htmlFor="email">Email</label>
								<div className="data">
									<p className="break-word">{user.email}</p>
									<span>Edit</span>
								</div>
							</div>
							<div className="form-group">
								<label htmlFor="description">Bio</label>
								<div className="data">
									<p className="break-word">{user.description}</p>
									<span>Edit</span>
								</div>
							</div>
							<div className="form-group">
								<label htmlFor="password">Password</label>
								<p>
									<span>Change password</span>
								</p>
							</div>
						</form>
					</section>
					<section>
						<h4>WEBSITE</h4>
						<div className="section-content">
							<div className="form-group" onClick={toggleTheme}>
								<label>Theme</label>
								<div className="data">
									<p>
										<i
											className={joinClasses(
												"fas",
												darkTheme ? "fa-moon" : "fa-sun"
											)}
										/>
									</p>
								</div>
							</div>
							<div
								className="form-group"
								onClick={() => dispatch(authActions.logout())}
							>
								<label>Logout</label>
								<div className="data">
									<p>
										<i className="fas fa-sign-out-alt" />
									</p>
								</div>
							</div>
						</div>
					</section>
					<div className="made-with">
						<p>Made with ❤️ by Shrutanten</p>
						<a
							href="https://github.com/soft-coded"
							target="_blank"
							rel="noreferrer"
						>
							github: @soft-coded
						</a>
					</div>
				</div>
			)}
		</PageWithNavbar>
	);
}
