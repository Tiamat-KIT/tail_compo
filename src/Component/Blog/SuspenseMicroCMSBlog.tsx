import { BlogDataResponse } from "@/libs/microcms";
import BlogCard from "../BlogCard";
import Flex from "../Flex";
import FractionBasisFlexItem from "../FlexItem/FractionBasisFlexItem";

export async function BlogPromiseProps({
    PromiseBlogResponse
}:{
    PromiseBlogResponse : Promise<BlogDataResponse/* ["contents"] */>
}){
    const {contents}  = await PromiseBlogResponse
    
    if(!contents/*   || contents.length  === 0 */){
        return(
          <p>BlogData NotFound</p>
        )
    }
    return(
        <>
          <div tabIndex={0} className="collapse collapse-arrow pb-10">
            <input type="checkbox" className="peer" /> 
            <h1 className="text-2xl collapse-title font-mediu">MyBlog</h1>
            <Flex Other="collapse-content">
              <div tabIndex={0}>
                {contents.map((post) => {
                  return(
                      <>
                          <FractionBasisFlexItem Basis="1/3" Other="px-3" key={post.id}>
                              <BlogCard title={post.title} link={`/Blog/${post.id}`}/>
                          </FractionBasisFlexItem>
                      </>
                  )
                })}
              </div>
            </Flex>
          </div>
        </>
    )
}