import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import background from "../images/OctoCat.png"
import theme from '../theme';

const useStyles = makeStyles({
    root: {
        margin: "auto",
        marginTop: "2%",
        width: "60%",
    },
    grid: {
        alignItems: "center",
        
    },
    car: {
        width: 345,
        height: 300,
    },
    car_media: {
        height: 200,
        backgroundColor: "white",
        color: theme.palette.secondary.main,
    },
    car_content: {
        color: theme.palette.secondary.main,
    },
    catalog: {
        width: 345,
        height: 300,
    },
    catalog_media: {
        height: 200,
        backgroundColor: "white",
    },
    catalog_content: {
        color: theme.palette.secondary.main,
    },
    sort: {
        width: 345,
        height: 300,
    },
    sort_media: {
        height: 200,
        backgroundColor: "white",
    },
    sort_content: {
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
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        classNme={classes.grid}
        >
            <Grid 
            item xs={4}
            className={classes.car_grid}
            >
                <Card className={classes.car}>
                    <CardActionArea
                    href="https://github.com/Pokemonpower92/Autonomous-Car"
                    >
                        <CardMedia
                        className={classes.car_media}
                        image={background}
                        title="Autonamous car"
                        />
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
                className={classes.catalog_grid}
            >
                <Card className={classes.catalog}>
                    <CardActionArea
                    href="https://pokemonpower92.github.io/lightsOut/"
                    >
                        <CardMedia
                        className={classes.catalog_media}
                        image={background}
                        title="Lights Out!"
                        />
                        <CardContent className={classes.catalog_content}>
                        <Typography gutterBottom variant="h5" component="h2">
                            React Application
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            A handheld game emulator written in React.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid
                item xs={4}
                className={classes.catalog_grid}
            >
                <Card className={classes.sort}>
                    <CardActionArea
                    href="https://github.com/Pokemonpower92/Sort_comparision"
                    >
                        <CardMedia
                        className={classes.sort_media}
                        image={background}
                        title="sort"
                        />
                        <CardContent className={classes.sort_content}>
                        <Typography gutterBottom variant="h5" component="h2">
                            Sort Comparision
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            A program that compares various sorting algorithms in Python and C++
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    </div>
  );
}
