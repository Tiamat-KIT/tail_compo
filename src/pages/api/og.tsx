import { ImageResponse,unstable_createNodejsStream } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: 'edge',
};

export default function (req:NextRequest){
    try{
      const { searchParams } = new URL(req.url)

      // ?title=<title>
      const hasTitle = searchParams.has("title")
      const title = hasTitle 
        ? searchParams.get("title")?.slice(0,100)
        : "My default title"
      
        return new ImageResponse(
          (
            <div
              style={{
                fontSize: 128,
                width: '100%',
                height: '100%',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: "30px"
              }}
              tw="flex bg-indigo-300"
            >
              <div tw="bg-indigo-100 flex justify-center" style={{width: "95%",height:"95%"}} >
                <p tw="text-justify flex">{title}</p>
              </div>
            </div>
          ),
          {
            width: 1200,
            height: 600,
          },
        );
    }catch(e:any){
      console.log(`${e.massage}`)
      return new Response(`Failed to generate the image`, {
        status: 500,
    });
  }
}

// https://www.npmjs.com/package/@vercel/og
// https://zenn.dev/hiromu617/articles/c03fef6f4d6c6e
// https://zenn.dev/monicle/articles/f02e4a12da960b
// https://www.newt.so/docs/tutorials/vercel-og-image-generation
// https://zenn.dev/panda_program/articles/generate-og-image
// https://zenn.dev/gesupher/articles/916e24e8e63ff0#3.-vercel-hosting-%2B-next.js-(%E6%88%90%E5%8A%9F)
// https://egashira.dev/blog/dynamic-og-image
// https://route360.dev/ja/post/vercel-og-image/
// https://zenn.dev/denham/articles/b2378462d54823#og%E3%81%AE%E7%94%9F%E6%88%90

// https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation/og-image-examples
