import React from "react";
import Button from "./Button";

export default function Card({children,Title}:{children: string,Title:string}){
    return(
        <div className="card bg-inherit shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{Title}</h2> 
                {children}
                <Button Activate={true} Animate={true} LinkBool={true}>Press</Button>
            </div>
        </div>
    )
}