import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { BroadcastChannel } from 'broadcast-channel';
import Message from './message';

export default function MessageList(){
    const channel = new BroadcastChannel('foobar');
    const dispatch=useDispatch();
    const messages=useSelector((state)=>state.message)
    channel.onmessage = msg => {
        let data=JSON.parse(msg);
        if(data.name!==sessionStorage.getItem("name")){
            dispatch({
                type:'message/addMessage',
                payload:{
                    id: data.id,
                    isMymessage: false,
                    message: data.value,
                    name: data.name
                }
            })

        }
        
    };
    return (
        <div style={{width:"80%",marginLeft:"auto",marginRight:"auto",backgroundColor:"green",height:"100vh"}}>
            { messages.map((m)=><Message message={m} key={m.id} />)}
            
        </div>
    )
}