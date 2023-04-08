const N_Numlist = ["1","2","3","4","5","6","7","8","9"
              ,"10","11","12","14","16","20","24"
              ,"28","32","36","40","44","48","52"
              ,"56","60","64","72","80","96"
            ] as const

export type FlexBasisNaturalNum =  typeof N_Numlist[number] 

export default function NaturalBasisFlexItem({
    children,
    Basis,
    Grow,
    Shrink,
    Other
}:{
    children: React.ReactNode,
    Basis?: FlexBasisNaturalNum,
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