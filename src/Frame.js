import React from "react";
import {AppBar, Toolbar, Typography, Container} from "@material-ui/core";

class Frame extends React.Component {
    render() {
        return (
            <div>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="h6">Diary</Typography>
                    </Toolbar>
                </AppBar>
                {this.props.children}
            </div>
        );
    }
}

export default Frame;
