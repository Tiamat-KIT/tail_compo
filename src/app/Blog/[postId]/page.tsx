import { notFound } from "next/navigation";
import parse from "html-react-parser"
import { getDetail,getListData } from "@/libs/microcms";
import Container from "@/Component/Container";

export async function generateStaticParams(){
    const {contents} = await getListData()

    const paths = contents.map((post) => {
        return {
            postId: post.id
        }
    })
    return [...paths]
}

export default async function StaticDetailPage({params: {postId}}:{params: {postId:string}}){
    const post = await getDetail(postId)
    if(!post){
        notFound()
    }
    return(
        <Container>
            <h1 className="text-3xl pb-5">{post.title}</h1>
            <Container Other="bg-blue-100">
                <div className="p-5">{parse(post.body)}</div>
            </Container>
       </Container>
    )
}
