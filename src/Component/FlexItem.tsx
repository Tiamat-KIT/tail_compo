import React from "react";

type Range<From extends number, To extends number, Result extends string[] = []> = {
    0: From extends To ? Result : Range<From, To, [...Result, `${From}` | never]>; // 終了条件を追加し、neverを結合する
    1: Result;
}[From extends To ? 0 : 1];
  

type Oneto12 = Range<1,12> 

export default function FlexItem(
    {
        children,
        FlexSize,
        Grow,
        Shrink,
        Basis,
        padding
    }:{
        children: React.ReactNode,
        FlexSize?: "1" | "auto" | "initial" | "none" ,
        Grow?: "1" | "0" ,
        Shrink?: "1" | "0",
        Basis?: Oneto12,
        padding?: string
    }){
        const size = FlexSize ? "flex-" + FlexSize : ""
        const grow = Grow ? Grow : ""
        const shrink = Shrink ? "shrink" + Shrink : ""
        const basis = Basis ? "basis-" + Basis : ""
        const Padding = padding ? padding : ""

    return (
        <div className={`${size} ${grow} ${shrink} ${basis} ${Padding}`}>
            {children}
        </div>
    )
}