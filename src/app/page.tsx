// "use client"

import Carousel,{CarouselItem} from "@/Component/Carousel"
import Container from "@/Component/Container"
import Flex from "@/Component/Flex"
import SeoComponent from "@/Component/SEO/SEO"
import { Metadata } from "next"
import MicroCMSMyProfile from "@/Component/MicroCMSMyProfile"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import { getListData } from "@/libs/microcms"
import { BlogPromiseProps } from "@/Component/Blog/SuspenseMicroCMSBlog"

export async function generateMetadata(): Promise<Metadata>{
    const title = "UtakataPortfolio"
    return SeoComponent({
      title: title,
      description: title,
      url: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/`,
      imageUrl: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/og?title=${title}`
    }
  )
}

const TwitterTimeLine = dynamic(() => import("Component/TwitterTL"),{
  loading: () => (
    <h1 className="text-xl">Loading Utakata's Tweet's Data</h1>
  ),
  ssr: false
})

export const revalidate = 0;

export default async function Home(){
  const data = await getListData()
  if(!data/*  || data.length === 0 */){
    return(
      <p>BlogData NotFound</p>
    )
  }
  const Item: CarouselItem[] = [
    {
      src: "/header.png",
      alt: "泡沫京水がよく使うヘッダー画像"
    },
  ]

  return (
    <>
      <Container>
        <Carousel CarouselList={Item}/>
      </Container>
      <Container Other="py-5">
        <div className="card shadow-xl">
          <div className="card-body card-bordered	bg-white">{await MicroCMSMyProfile()}</div>
        </div>
      </Container>
      <Container>
      <Suspense fallback={(
          <h1 className="text-xl">Loading-BlogData</h1>
        )}>
          {/* @ts-expect-error Server Component */}
          <BlogPromiseProps PromiseBlogResponse={data} />
        </Suspense>
      </Container>
      <Container>
        <Flex>
          <div className="basis-3/4" />
          <TwitterTimeLine />
        </Flex>
      </Container>
    </>
  )
}

// https://zenn.dev/denham/articles/b2378462d54823
// https://ogp.buta3.net/