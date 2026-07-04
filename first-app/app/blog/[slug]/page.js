import Link from "next/link";

export default function BlogPage({params}){
    return(
        <main>
            <h1>The Blog</h1>
            <h2>{params.slug}</h2>
        </main>
    )
}