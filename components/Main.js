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
    },
}))

const posts = [
    {
        id: 1,
        title: "Proxy servers",
        description: "How do proxy servers work and what are forward and reverse proxies?",
        authorName: "NamDQ",
        authorAvatar: "https://material-ui.com/static/images/avatar/1.jpg",
        createDate: "July 24, 2020"
    },
    {
        id: 2,
        title: "CI and CD",
        description: "Learn the basics of CI/CD and how to implement that with GitHub Actions.",
        authorName: "NamDQ",
        authorAvatar: "https://material-ui.com/static/images/avatar/1.jpg",
        createDate: "July 24, 2020"
    },
    {
        id: 3,
        title: "SSO - Single Sign On",
        description: "Learn the basics of SAML and anderstand how does Single Sign On work.",
        authorName: "NamDQ",
        authorAvatar: "https://material-ui.com/static/images/avatar/1.jpg",
        createDate: "July 24, 2020"
    },
    {
        id: 4,
        title: "SSO - Single Sign On",
        description: "Learn the basics of SAML and anderstand how does Single Sign On work.",
        authorName: "NamDQ",
        authorAvatar: "https://material-ui.com/static/images/avatar/1.jpg",
        createDate: "July 24, 2020"
    }
]

export default function Main() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Container>
                <PostList items={posts}/>
            </Container>
        </Box>
    )
}