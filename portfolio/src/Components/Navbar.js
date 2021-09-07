import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';
import Resume from "../files/JohnCarmackResume.pdf";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: "30%",
  },
  bar: {
      backgroundColor: "transparent",
      boxShadow: "none",
      width: "60%",
      margin: "auto",
  },
  title: {
    color: theme.palette.secondary.main,
    flexGrow: 1,
    flex: 1,
  },
  linkedin_button: {
    color: theme.palette.secondary.main,
  },
  github_button: {
    color: theme.palette.secondary.main,
  },
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.bar}>
                <Toolbar>
                    <Typography
                        variant="h2" 
                        className={classes.title}
                    >
                        John Carmack
                    </Typography>
                    <div className={classes.buttons}>
                      <Button
                          className={classes.linkedin_button}
                          target="_blank"
                          href={Resume}
                          startIcon={<DescriptionIcon />}
                      >
                          Resume
                      </Button>
                      <Button
                          className={classes.linkedin_button}
                          target="_blank"
                          href="http://www.linkedin.com/in/john-carmack-307525158"
                          startIcon={<LinkedInIcon />}
                      >
                          LinkedIn
                      </Button>
                      <Button
                      className={classes.github_button}
                          target="_blank"
                          href="http://github.com/Pokemonpower92"
                          startIcon={<GitHubIcon/>}
                      >
                          GitHub
                      </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
  );
}