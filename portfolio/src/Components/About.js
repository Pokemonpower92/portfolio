import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import profile from "../images/profile.png";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		display: "flex",
		flexDirection: "column",
		width: "58%",
		minWidth: "25%",
		margin: "auto",
	},
	avatar: {
		height: "15%",
		width: "15%",
		marginTop: "5%",
		alignSelf: "center",
	},
	title: {
		marginTop: "5%",
		textAlign: "center",
		fontSize: "1.5rem",
		color: theme.palette.secondary.main,
	},
	projects_title: {
		marginTop: "5%",
		textAlign: "center",
		fontSize: "1.5rem",
		color: theme.palette.secondary.main,
	},
}));

export default function About(theme) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<img className={classes.avatar} src={profile} alt="Mimikyu"></img>
			<Typography className={classes.title}>
				Hello! I'm John, a software engineer with experience writing
				scalable, distributable software in python, javascript, and C++.
				I love learning about web development and all things related to
				software! I'm also really into art and Brazillian Jui-Jitsu. My
				favorite Pokemon is Mimikyu.
			</Typography>
			<Typography className={classes.projects_title}>
				Here are a few of the projects I've worked on.
			</Typography>
		</div>
	);
}
