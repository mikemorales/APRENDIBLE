import Link from "next/link";

export async function getStaticProps(ctx: { params: { bid: any; }; }) {
   // const {bid} = ctx.params;
    const res = await fetch(`http://127.0.0.1:8000/api/libros/${ctx.params.bid}`);
    const data = await res.json();
    //console.log(data);
    return {
        props: {
            book: data
        }
    }
}

export async function getStaticPaths() {
    const res = await fetch('http://127.0.0.1:8000/api/libros/');
    const data = await res.json();

    return {
        paths: data.map(book => ({
            params: {bid: String(book.id)},
        })),
        fallback: false
    }
}

// @ts-ignore
const BookDetail = ({book}) => {
    return (
        <div>
            <h1>{book.title_book}</h1>
            <Link href="/libros">Book List</Link>
        </div>
    )
}
export default BookDetail