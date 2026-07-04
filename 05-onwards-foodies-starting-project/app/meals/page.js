import Link from "next/link";

export default function Meals(){
    return(
        <>
            <h1>Meals</h1>
            <p>
                <Link href="/meals/share">Share</Link>
                <Link href="/meals/dynamic1">Dynamic1</Link>
                <Link href="/meals/dynamic2">Dynamic2</Link>
            </p>
        </>
    )
}