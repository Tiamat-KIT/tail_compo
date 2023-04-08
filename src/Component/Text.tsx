export default function Text({
    children,
    Size,
    Position,
    other
}:{
    children:string,
    Size?:string,
    Position?:string,
    other?: string
}){
    if(Size !== undefined){
        const size = Size ? "text-" + Size : ""
        const Other = other ? other : ""
        const position = Position ? Position : ""
        return (
            <div className={`${position}`}>
                <p className={`${size} ${Other}`}>{children}</p>
            </div>
        )
    }
    const Other = other ? other : ""
    const position = Position ? Position : ""
    return (
        <div className={`${position}`}>
            <p className={`${Other}`}>{children}</p>
        </div>
    )
}