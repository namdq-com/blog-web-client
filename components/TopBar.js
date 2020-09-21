import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CopyrightIcon from '@material-ui/icons/Copyright';
import {
    Toolbar,
    Link,
    Container,
    AppBar
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    topBar: {
        boxShadow: "none"
    },
    blogTitle: {
        flexGrow: 1,
    },
    topMenu: {
        listStyleType: "none",
        display: "inline-block"
    },
    topMenuItem: {
        marginLeft: theme.spacing(2)
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
        <Link key={menu.id} href={menu.link} underline={"none"} color={"textPrimary"} className={classes.topMenuItem}>
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
        <AppBar position={"static"} color={"transparent"} className={classes.topBar}>
            <Container disableGutters>
                <Toolbar>
                    <div className={classes.blogTitle}>
                        <CopyrightIcon fontSize={"large"}/>
                    </div>

                    {renderMenu(menus)}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
