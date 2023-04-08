const FractionNumlist = ["0.5","1.5","2.5","3.5"
                        ,"1/2","1/3","2/3","1/4"
                        ,"2/4","3/4","1/5","2/5"
                        ,"3/5","4/5","1/6","2/6"
                        ,"3/6","4/6","5/6","1/12"
                        ,"2/12","3/12","4/12","5/12"
                        ,"6/12","7/12","8/12","9/12"
                        ,"10/12","11/12"] as const

export type FlexBasisFractionNum = typeof FractionNumlist[number]

export default function FractionBasisFlexItem({
    children,
    Basis,
    Grow,
    Shrink,
    Other
}:{
    children: React.ReactNode,
    Basis?: FlexBasisFractionNum,
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