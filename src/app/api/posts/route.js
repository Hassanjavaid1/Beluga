import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const query = `*[_type == "post"]{
     "id": _id,         
     "author": author->name,  
     publishedAt,
     "category": categories[][0]->title,
     title,
     "description": pt::text(body),
     "image": mainImage.asset->url,
      }`;

    const posts = await client.fetch(query);
    return NextResponse.json(posts);
  } catch (err) {
    console.log(err);
    return NextResponse.json(err);
  }
}
