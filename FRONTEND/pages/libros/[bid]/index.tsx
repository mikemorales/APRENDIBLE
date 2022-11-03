import Link from "next/link";

export async function getStaticProps({params}) {
    //console.log(context.params.bid);
    // const {bid} = ctx.params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/libros/${params.bid}`);
    const data = await res.json();
    //console.log(data);
    return {
        props: {
            book: data
        }
    }
}

export async function getStaticPaths() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/libros`);
    const data = await res.json();

    return {
        paths: data.map(book => ({
            params: {bid: String(book.id)}
        })),
        fallback: false
    }
}

const BookDetail = ({book}) => {
    console.log(book);
    return (
        <div>
            <h1>Titulo: {book.title_book}</h1>
            <Link href="/libros">Book List</Link>
        </div>
    )
}
export default BookDetail