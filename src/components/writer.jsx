import React, { Component } from 'react';
import { BroadcastChannel } from 'broadcast-channel';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './style/writer.css';

export default function Writer(){
    const channel = new BroadcastChannel('foobar');
    channel.onmessage = msg => {
        let data=JSON.parse(msg);
        console.log(data.name,sessionStorage.getItem("name"))
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
    const dispatch=useDispatch();
    return (
    <div className="writer" >
        <div>
            <input style={{width:"90%",marginRight:"5px",height:"100%",borderRadius:"20px"}} type="text" id="mag" />
        </div>
        <div>
            <button
                className='btn btn-primary'
                onClick={()=>{
                    let value=document.getElementById("mag").value;
                    if(value!==""){
                        dispatch({
                            type:'message/addMessage',
                            payload:{
                                id: Date.now(),
                                isMymessage: true,
                                message: value,
                                name: sessionStorage.getItem("name")
                            
                            }
                        })
                        let data=JSON.stringify({
                            name:sessionStorage.getItem("name"),
                            value:value,
                            id: Date.now()
                        })
                        channel.postMessage(data);
                        document.getElementById("mag").value="";
                    }
                }
            }
            >Send</button>
        </div>
    </div>
    );
}