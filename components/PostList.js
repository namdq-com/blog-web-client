import React from "react";
import PostItem from "./PostItem";
import {Grid} from "@material-ui/core";

export default function PostList(props) {
    const items = props.items;

    const listItem = items.map((item) =>
        <PostItem item={item} key={item.id}/>
    )

    return (
        <Grid container spacing={3}>
            {listItem}
        </Grid>
    );
}