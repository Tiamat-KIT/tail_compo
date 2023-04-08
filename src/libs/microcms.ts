import * as MicroCMS from "microcms-js-sdk"

export type BlogData = Record<"id" | "title" | "body",string> & MicroCMS.MicroCMSDate

export type MyProfile = Record<"title" | "text",string> & MicroCMS.MicroCMSDate

export type BlogDataResponse = {
    totalCount: number,
    offset: number,
    limit: number,
    contents: BlogData[]
}

export type MyProfileResponse = {
    totalCount: number,
    offset: number,
    limit: number,
    contents: MyProfile[]
}

if(!process.env.MiCROCMS_SERVICE_DOMAIN || !process.env.MiCROCMS_API_KEY){
    throw new Error("microCMS Setting Error")
}

export const NotionClient = MicroCMS.createClient({
    serviceDomain: process.env.MiCROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MiCROCMS_API_KEY,
})

export async function getListData(queries?: MicroCMS.MicroCMSQueries){
    const BlogContents = await NotionClient.get<BlogDataResponse>({
        endpoint: "blog",
        queries
    })
    return BlogContents
}

export async function getDetail(contentid:string,queries?: MicroCMS.MicroCMSQueries){
    const PostData = await NotionClient.get<BlogData>({endpoint:"blog",contentId: contentid,queries})
    return PostData
}

export async function getProfile(){
    const ProfileData = await NotionClient.get<MyProfileResponse>({endpoint:"person"})
    return ProfileData
}