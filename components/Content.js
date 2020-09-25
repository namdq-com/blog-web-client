import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import ReactMarkdown from "react-markdown"

import {
    Container,
    Box
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        borderTop: "1px solid #eaeaea !important",
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    }
}))

export default function Content(props) {
    const classes = useStyles();
    const post = props.post;

    return (
        <Box className={classes.root}>
            <Container maxWidth={"md"}>
                <ReactMarkdown source={post.content}/>
            </Container>
        </Box>
    )
}