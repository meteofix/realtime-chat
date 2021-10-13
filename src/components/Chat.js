import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Container} from "@mui/material";
import Grid from "@mui/material/Grid";
import page from "./page.module.css";
import classes from './Chat.module.css'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import firebase from "firebase";
import Avatar from "@mui/material/Avatar";

const Chat = () => {
    const {auth, firestore, app} = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )
    if (loading) {
        return <Loader/>
    }

    const sendMessage = async () => {
        await firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        setValue('');
    }
    console.log(messages)

    return (
        <Container className="rootContainer">
            <Grid container className={page.gridWrapper} style={{height: window.innerHeight - 50}}>
                <div className={classes.messagesFrame}>
                    {messages?.map(message =>
                        <div className={user.uid === message.uid ?
                            [classes.message, classes.messageFromThisUser].join(' ')
                            :
                            classes.message
                        } key={message.createdAt}>
                            <Grid container>
                                <Avatar src={message.photoURL}/>
                                <div>{message.displayName}</div>
                            </Grid>
                            <div className={classes.text}>{message.text}</div>
                        </div>

                    )}
                </div>
                <Grid container className={classes.newMessageForm}>
                    <TextField fullWidth
                               maxRows={2}
                               variant={"outlined"}
                               value={value}
                               onChange={event => setValue(event.target.value)}
                    />
                    <Button onClick={sendMessage} variant={"outlined"} >Send</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Chat;