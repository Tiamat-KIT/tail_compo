"use client"

import Link from "next/link";

export default function Navbar(){
    return(
        <div className="navbar bg-base-50 bg-blue-200">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl">MyPage</Link>
            </div>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar rounded-ful">
                    <div style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: "skyblue"
                    }}/>
                </label>
                <ul tabIndex={0} className=" menu menu-compact dropdown-content rounded-box">
                    <li>
                        <button className="btn btn-outline" type="button">
                            SignIn
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    ) 
}
