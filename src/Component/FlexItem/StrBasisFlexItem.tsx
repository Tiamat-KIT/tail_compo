const strlist = ["auto","px","full"] as const 

export type FlexBasisStr =  typeof strlist[number] 

export default function StrBasisFlexItem({
    children,
    Basis,
    Grow,
    Shrink,
    Other
}:{
    children: React.ReactNode,
    Basis?: FlexBasisStr,
    Grow?: "grow" | "grow-0",
    Shrink?: "shrink" | "shrink-0",
    Other?: string
}){
    const basis = Basis ? "basis-" + Basis :""
    const grow = Grow ? Grow : ""
    const shrink = Shrink ? Shrink : ""
    const other = Other ? Other : ""
    return(
        <div className={`${basis} ${grow} ${shrink} ${other}`}>
            {children}
        </div>
    )
}