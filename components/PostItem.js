import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
    Typography,
    Grid,
    Avatar,
    CardContent,
    Card,
    CardActions
} from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
    root: {
        border: "1px solid rgb(247, 247, 247)",
        boxShadow: "rgba(0, 0, 0, 0.12) 0px 5px 10px",
        borderRadius: "10px"
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    cardAction: {
        paddingTop: 0,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    },
    cardAuthor: {
        flexGrow: 1
    }
}))

export default function PostItem(props) {
    const classes = useStyles();

    const item = props.item;

    return (
        <Grid item lg={4} md={6} sm={12}>
            <Link href={"/posts/" + item.slug}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography
                            variant={"h5"}
                            gutterBottom>
                            {item.title}
                        </Typography>
                        <Typography
                            variant="body1"
                            color={"textSecondary"}>
                            {item.description}
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.cardAction}>
                        <Avatar
                            alt="Remy Sharp"
                            className={classes.small}
                            src={item.authorAvatar}/>
                        <Typography
                            color={"textSecondary"}
                            className={classes.cardAuthor}>
                            {item.authorName}
                        </Typography>
                        <Typography
                            color={"textSecondary"}>
                            {item.createDate}
                        </Typography>
                    </CardActions>
                </Card>
            </Link>
        </Grid>
    )
}