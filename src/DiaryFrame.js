import React from "react";
import Diaries from "./Diaries";
import {TextField, IconButton, Container} from "@material-ui/core";
import Send from '@material-ui/icons/Send';

function DiaryFrame() {
    const diariesAreaStyle = {
        zIndex: 1,
    };

    const footerStyle = {
        position: 'fixed',
        bottom: 0,
        zIndex: 2,
        background: 'white',
        padding: '1vh 1vw',
        //width: '100%',
        borderTop: 'solid gray',
    };

    const todayDiaryTextFieldStyle = {
    };

    const sendButtonStyle = {
        right: 0,
    };

    return (
        <div>
            <div style={diariesAreaStyle}>
                <Diaries/>
            </div>
            <Container style={footerStyle}>
                <TextField
                    style={todayDiaryTextFieldStyle}
                    label="What did you do today?"
                    variant="outlined"
                    fullWidth
                    multiline/>
                <IconButton color="primary" style={sendButtonStyle}>
                    <Send/>
                </IconButton>
            </Container>
        </div>
    );
}

export default DiaryFrame;
