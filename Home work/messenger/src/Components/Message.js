import { Card, CardContent, Typography } from '@material-ui/core';
import React, { forwardRef } from 'react';
import './Message.css';
const Message = forwardRef(({ message, username }, ref) => {
    const isUser = username === message.username;

    return (

        <div ref={ref} className={`message ${isUser && 'message_card'}`}>
            <Card className={
                isUser ? "user_card" : "guest_card"
            }>
                <CardContent >
                    <Typography

                        variant="p"
                        component="p"
                    >
                        <strong>{!isUser && `${message.username || 'Unknown'}: `}</strong> {message.message}


                    </Typography>
                </CardContent>
            </Card>
        </div>

    )
}
);
export default Message;
