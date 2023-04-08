import Link from "next/link";

export default function BlogCard({title,link}:{title:string,link:string}){
    return (
        <div className="card shadow-xl button flex-1">
            <div className="card-body">
                <Link href={link}>
                    <h2 className="card-title">{title}</h2>
                </Link>
            </div>
        </div>
    )
}