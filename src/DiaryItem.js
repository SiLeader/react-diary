import React from "react";
import {ListItem, ListItemText, Typography} from "@material-ui/core";

function toDateString(date) {
    return date.toDateString();
}

function DiaryItem(props) {
    return (
        <ListItem alignItems="flex-start">
            <ListItemText
            primary={props.content}
            secondary={
                <React.Fragment>
                    {toDateString(props.date)}
                </React.Fragment>
            }/>
        </ListItem>
    );
}

export default DiaryItem;
