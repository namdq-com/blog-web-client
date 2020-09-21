import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    Toolbar,
    Link,
    Container,
    AppBar, Typography, CardContent
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    topBar: {
        boxShadow: "none"
    },
    blogTitle: {
        flexGrow: 1,
        paddingTop: theme.spacing(0.4)
    },
    topMenu: {
        listStyleType: "none",
        display: "inline-block"
    },
    topMenuItem: {
        marginLeft: theme.spacing(2)
    },
    logo: {
        fontSize: theme.spacing(3),
        fontWeight: "600"
    }
}));

const menus = [
    {
        id: 1,
        name: "About",
        link: "#"
    },
    {
        id: 2,
        name: "Contact",
        link: "#"
    }
]

function renderMenuItem(menu) {
    const classes = useStyles();

    return (
        <Link key={menu.id}
              variant={"subtitle1"}
              href={menu.link}
              underline={"none"}
              color={"textPrimary"}
              className={classes.topMenuItem}>
            {menu.name}
        </Link>
    )
}

function renderMenu(menus) {
    const listItem = menus.map((menu) => renderMenuItem(menu));

    return (
        <div>
            {listItem}
        </div>
    )
}

export default function TopBar() {
    const classes = useStyles();

    return (
        <AppBar position={"static"}
                color={"transparent"}
                className={classes.topBar}>
            <Container disableGutters>
                <Toolbar>
                    <div className={classes.blogTitle}>
                        <Typography
                            variant="body1"
                            color={"textPrimary"}
                            className={classes.logo}>
                            NAMDQ.
                        </Typography>
                    </div>

                    {renderMenu(menus)}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
