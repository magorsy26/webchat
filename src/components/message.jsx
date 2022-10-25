import React, { Component } from 'react';
import './style/message.css';

export default function Message(props){
    const {message}  = props;
    let msgclass=message.isMymessage?"mymessage":"otherMessage"
    if(message.isMymessage){
        return (
            <div className={msgclass}>
                <div className="row d-flex flex-row justify-content-end mb-4 ">
                    <div className="col-8" style={{minWidth:"10%",borderRadius: "15px", backgroundColor: "#fbfbfb",padding:"5px"}}>
                        <h5>*** {message.name} ***</h5>
                        <p className="small mb-0">{message.message}</p>
                    </div>
                    <div className="col-2">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp" alt="avatar 1" style={{width: "45px", height: "100%"}} />
                    </div>
                </div>
            </div> 
        )

    }
    return (
        <div className={msgclass}>
            <div className="row d-flex flex-row justify-content-end mb-4 ">
                <div className="col-2">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" alt="avatar 1" style={{width: "45px", height: "100%"}} />
                </div>
                <div className="col-8" style={{minWidth:"10%",borderRadius: "15px", backgroundColor: "#fbfbfb",padding:"5px"}}>
                    <h5>*** {message.name} ***</h5>
                    <p className="small mb-0">{message.message}</p>
                </div>
            </div>
        </div> 
    )
}

 
