import Link from "next/link"

export default function Button({
    children,
    ButtonTheme,
    Ghost,
    Activate,
    Animate,
    LinkBool,
    LinkUrl
}:{
    children?: React.ReactNode | string
    ButtonTheme?:string,
    Ghost?:boolean, 
    Activate?:boolean,
    Animate?:boolean,
    LinkBool: boolean,
    LinkUrl?: string
}){
    const Theme = ButtonTheme ? `btn-${ButtonTheme}` : ""
    const VisualGhost = Ghost ? " btn-ghost" : ""
    const Active_Disactive = Activate ? " btn-active" : " btn-disabled"
    const AnimateBool = Animate ? "" : " no-animation"
    const ButtonSetting = Theme + VisualGhost + Active_Disactive + AnimateBool

    if(LinkBool && LinkUrl){
        return(
            <button className={`btn ${ButtonSetting}`} >
                <Link href={LinkUrl}>
                    {children}
                </Link>
            </button>
        )
    }else{
        return(
            <button className={`btn ${ButtonSetting}`} >
                {children}
            </button>
        )
    }
    
}