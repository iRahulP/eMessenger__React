import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function Message(props) {
    return (
        <Card className="message_card">
            <CardContent>
                <Typography
                    color="white"
                    variant="h5"
                    component="h2"
                >
                    {props.username}: {props.text}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Message;