export default function Flex({
    children,
    direction,
    wrap,
    position,
    Other
}:{
    children:React.ReactNode,
    direction?: "flex-row" | "flex-row-reverse" | "flex-col" | "flex-col-reverse",
    wrap?: "flex-wrap" | "flex-wrap-reverse" | "flex-nowrap",
    position?: "justify-center",
    Other?: string
}){
    const Direction = direction ? direction : ""
    const Wrap = wrap ? wrap : ""
    const Position = position ? position : ""
    const other = Other ? Other : ""
    return( 
        <div className={`flex ${Direction} ${Wrap} ${Position} ${other}`}>
            {children}
        </div>
    )
}