import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import theme from '../theme';

const useStyles = makeStyles({
    root: {
        margin: "auto",
        marginTop: "5%",
        width: "60%",
        height: 400,
    },
    grid: {
        display: "flex",
        alignItems: "center",
    },
    car: {
        width: 345,
        height: 100,
    },
    car_content: {
        color: theme.palette.secondary.main,
    },
    lightsout: {
        width: 345,
        height: 100,
    },
    lightsout_content: {
        color: theme.palette.secondary.main,
    },
    todo: {
        width: 345,
        height: 100,
    },
    todo_content: {
        color: theme.palette.secondary.main,
    },
});

export default function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid
        container
        spacing={2}
        className={classes.grid}
        >
            <Grid 
            item xs={4}
            className={classes.car_grid}
            >
                <Card className={classes.car}>
                    <CardActionArea
                    href="https://github.com/Pokemonpower92/Autonomous-Car"
                    >
                        <CardContent className={classes.car_content}>
                        <Typography gutterBottom variant="h5" component="h2">
                            Autonomous car
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            An autonomous car built on the Aurduino Platform.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid
                item xs={4}
                className={classes.lightsout_grid}
            >
                <Card className={classes.lightsout}>
                    <CardActionArea
                    href="https://pokemonpower92.github.io/lightsOut/"
                    >
                        <CardContent className={classes.lightsout_content}>
                        <Typography gutterBottom variant="h5" component="h2">
                            LightsOut in React
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            A handheld game emulator written in React. Try to turn off all the lights!
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid
                item xs={4}
                className={classes.todo_grid}
            >
                <Card className={classes.todo}>
                    <CardActionArea
                    href="https://pokemonpower92.github.io/todo/"
                    >
                        <CardContent className={classes.todo_content}>
                        <Typography gutterBottom variant="h5" component="h2">
                            Todo app in React
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            This is a todo app I wrote to practice styling and forms in react.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    </div>
  );
}
