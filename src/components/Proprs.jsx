import { useState } from "react";

function Child({name}){
    return <h2>Hello {name}</h2>
}

function Parent(){
    return <Child name = "Rahul" />;
}





