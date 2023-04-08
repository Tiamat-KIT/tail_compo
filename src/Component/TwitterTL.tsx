"use client"
import Script from "next/script"
export default function TL(){
    return(
        <div>
            <a className="twitter-timeline basis-1/4 grow pl-5" data-lang="ja" data-width="240" data-height="340" data-theme="light" href="https://twitter.com/UtakataKyosui?ref_src=twsrc%5Etfw">{/* Tweets by UtakataKyosui */}</a>
            <Script /* async */ src="https://platform.twitter.com/widgets.js" />
        </div>
    )
}