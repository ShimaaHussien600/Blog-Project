import { type } from "os"

export type Article = {
    id: number
    category: string
    smallHeader: string
    title: string
    subTitle1: string
    subTitle2: string
    img1: string
    img2: string
    header: string
    header2: string
    smallBody: string
    body: string
    author: string
    time: string
    paragraph: string
    content: string
    hashtags: Array<string>
    comments: Array<object>
}

export type Slider = {
    id: number
    header: string
    body: string
    imgs: Array<string>
}

export type Comment = {
    name: string
    time: string
    comment: string
}