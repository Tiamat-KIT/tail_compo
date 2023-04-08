import Link from "next/link"

export type FooterItemProps = {
    text: string,
    url: string
}

export default function Footer({
    HobbySNSList,
    DevelopSNSList
}: {
    HobbySNSList: FooterItemProps[],
    DevelopSNSList: FooterItemProps[]
}){
    return (
        <>
            <footer className="footer bg-slate-100 p-5">
                <div>
                    <span className="footer-title">SNS</span>
                    {HobbySNSList.map((Hobby,i) => {
                        return(
                            <Link href={Hobby.url} key={HobbySNSList.length}>
                                {Hobby.text}
                            </Link>
                        )
                    })}
                </div>
                <div>
                    <span className="footer-title">Technology</span>
                    {DevelopSNSList.map((Develop,i) => {
                        return(
                            <Link href={Develop.url} key={DevelopSNSList.length}>
                                {Develop.text}
                            </Link>
                        )
                    })}
                </div>
            </footer>
        </>
    )
}