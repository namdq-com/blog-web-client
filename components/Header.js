import React from "react";
import TopBar from './TopBar';
import {makeStyles} from '@material-ui/core/styles';
import {
    Container,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(5)
    },
    title: {
        textAlign: "center",
        fontSize: "3rem",
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    subTitle: {
        textAlign: "center"
    }
}));

export default function Header(props) {
    const classes = useStyles();
    const page = props.page;

    return (
        <div>
            <TopBar/>
            <Container className={classes.root}>
                <Typography variant={"h1"} className={classes.title}>
                    {page.title}
                </Typography>
                <Typography variant={"subtitle1"} className={classes.subTitle}>
                    {page.description}
                </Typography>
            </Container>
        </div>
    )
}