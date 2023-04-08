import Image from "next/image"

export type CarouselItem = {
    src: string,
    alt: string
} 

export default function Carousel({CarouselList}:{CarouselList:CarouselItem[]}){
    
    return(
        <div className="carousel w-full">
            {CarouselList.map((Item,i) => {
                return(
                    <div id={`item${i}`} className="carousel-item w-full" key={CarouselList.length}>
                        <Image src={Item.src} alt={Item.alt} width={800} height={200} className="w-full"/>
                    </div>
                )
            })}
        </div>
    )
}