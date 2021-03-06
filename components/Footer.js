import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import CopyrightIcon from '@material-ui/icons/Copyright';
import {
    Container,
    Grid, Link,
    Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        borderTop: '1px solid #eaeaea !important',
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(5)
    },
    copyright: {
        display: 'inline-block',
        alignItems: 'center',
        verticalAlign: "middle",
        fontWeight: "600",
        marginBottom: "0.5rem",
        marginRight: theme.spacing(0.5)
    },
    copyright2: {
        display: 'inline-block',
        alignItems: 'center',
        verticalAlign: "middle",
        marginBottom: "0.5rem",
        marginRight: theme.spacing(0.5)
    },
    about: {
        display: 'inline-block',
        alignItems: 'center',
        verticalAlign: "middle",
        marginBottom: "0.5rem",
    },
    page: {
        marginRight: theme.spacing(1)
    },
    github: {
        background: "rgb(30, 153, 230)",
        borderRadius: theme.spacing(0.5),
        color: "white",
        fontSize: theme.spacing(1.5),
        paddingTop: theme.spacing(0.4),
        paddingBottom: theme.spacing(0.4),
        paddingLeft: theme.spacing(0.5),
        paddingRight: theme.spacing(0.5),
    }
}))

const categories = [
    {
        id: 1,
        link: "#",
        name: "Java"
    },
    {
        id: 2,
        link: "#",
        name: "Microservice"
    },
    {
        id: 3,
        link: "#",
        name: "React"
    },
    {
        id: 4,
        link: "#",
        name: "Next"
    }
]

const mostVisited = [
    {
        id: 1,
        link: "#",
        name: "Proxy servers"
    },
    {
        id: 2,
        link: "#",
        name: "CI and CD"
    },
    {
        id: 3,
        link: "#",
        name: "Single Sign On"
    }
]

const resources = [
    {
        id: 1,
        link: "#",
        name: "Video"
    },
    {
        id: 2,
        link: "#",
        name: "Service"
    },
    {
        id: 3,
        link: "#",
        name: "Profile"
    }
]

function renderCategory(category) {
    return (
        <Typography variant={"subtitle2"} key={category.id}>
            <Link href={category.link} color={"textSecondary"}>
                {category.name}
            </Link>
        </Typography>
    )
}

function renderCategories(categories) {
    const listItem = categories.map((category) => renderCategory(category));

    return (
        <div>
            {listItem}
        </div>
    )

}

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item lg={5} md={8} sm={11} xs={11}>
                        <CopyrightIcon className={classes.copyright}/>
                        <Typography variant={"subtitle1"} className={classes.copyright}>
                            namdq.com
                        </Typography>
                        <Typography variant={"subtitle1"} className={classes.copyright2}>
                            by <Link href={"https://github.com/namdq2"}
                                     color={"textPrimary"}
                                     className={classes.github}
                                     underline={"none"}>
                            @namdq2
                        </Link>
                        </Typography>
                        <Typography color={"textSecondary"} className={classes.about}>
                            Community created roadmaps, articles, resources and journeys to help you choose your path
                            and grow in your career.
                        </Typography>

                        <Typography color={"textSecondary"}>
                            <Link href={"#"} color={"textPrimary"} className={classes.page}>
                                FAQ
                            </Link>
                            <Link href={"#"} color={"textPrimary"} className={classes.page}>
                                Terms
                            </Link>
                            <Link href={"#"} color={"textPrimary"} className={classes.page}>
                                Privacy
                            </Link>
                        </Typography>
                    </Grid>

                    <Grid item lg={1} md={4} sm={1} xs={1}/>

                    <Grid item lg={2} md={4} sm={4} xs={12}>
                        <Typography variant={"subtitle1"} className={classes.copyright}>
                            Resource
                        </Typography>

                        {renderCategories(resources)}
                    </Grid>

                    <Grid item lg={2} md={4} sm={4} xs={12}>
                        <Typography variant={"subtitle1"} className={classes.copyright}>
                            Catogories
                        </Typography>

                        {renderCategories(categories)}
                    </Grid>

                    <Grid item lg={2} md={4} sm={4} xs={12}>
                        <Typography variant={"subtitle1"} className={classes.copyright}>
                            Most Visited
                        </Typography>

                        {renderCategories(mostVisited)}
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}