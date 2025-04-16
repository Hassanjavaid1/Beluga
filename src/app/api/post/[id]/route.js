import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const query = `*[_type == "post" && _id == $id]{
        "id": _id,         
        "author": author->name,  
        publishedAt,
          "category": categories[][0]->title,
            title,
            "description": pt::text(body),
            "image": mainImage.asset->url,
             }`;

    const { id } = await params;
    const post = await client.fetch(query, { id });
    return NextResponse.json(post);
  } catch (err) {
    console.log(err);
    return NextResponse.json(err);
  }
}
