import React, { Component } from 'react';

export default function Writer(){
    return (
    <div style={{display:"grid",gridTemplateColumns:"4fr 1fr"}}>
        <div>
            <input style={{width:"100%"}} type="text" id="text" />
        </div>
        <div>
            <button>Send</button>
        </div>
    </div>
    );
}