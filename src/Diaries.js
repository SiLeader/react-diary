import React from "react";
import getDiaries from "./diary_data";
import List from "@material-ui/core/List";
import DiaryItem from "./DiaryItem";
import {Container} from "@material-ui/core";

function Diaries() {
    return (
        <Container fixed>
            <List>
                {getDiaries().map((diary) => {
                    return (
                        <DiaryItem
                            content={diary.content}
                            user={diary.user}
                            date={diary.post_at}/>
                    );
                })}
            </List>
        </Container>
    )
}

export default Diaries;
