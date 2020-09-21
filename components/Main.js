import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
    Container,
    Box
} from "@material-ui/core";
import PostList from "./PostList";

const useStyles = makeStyles((theme) => ({
    root: {
        background: "#fafafa !important",
        borderTop: "1px solid #eaeaea !important",
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    }
}))

export default function Main(props) {
    const classes = useStyles();
    const posts = props.posts;

    return (
        <Box className={classes.root}>
            <Container>
                <PostList items={posts}/>
            </Container>
        </Box>
    )
}