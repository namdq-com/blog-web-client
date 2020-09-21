import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
    Container,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        borderTop: '1px solid #eaeaea !important'
    }
}))

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
               Footer
            </Container>
        </div>
    )
}