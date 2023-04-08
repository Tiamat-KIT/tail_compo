import { getProfile } from "@/libs/microcms";
import parse from "html-react-parser"

export const revalidate = 0;

export default async function MicroCMSMyProfile(){
    const {contents} = await getProfile()
    return (
        <>
            <div tabIndex={0} className="collapse collapse-arrow ">
                <input type="checkbox" className="peer" /> 
                <label className="collapse-title text-xl pb-3">{contents[0].title}</label>
                <div className="prose collapse-content" tabIndex={0}>{parse(contents[0].text)}</div>
            </div>
            
        </>
    )
}
