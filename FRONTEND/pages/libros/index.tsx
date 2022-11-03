import Link from "next/link";

export async function getStaticProps() {
    const res = await fetch('http://127.0.0.1:8000/api/libros');
    const data = await res.json();
    //console.log(data);
    return {
        props: {
            books: data
        }
    }
}

// @ts-ignore
const BookList = ({books}) => {
    // @ts-ignore
    return (
        <div>
            <h1>Libros</h1>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <Link href={`/libros/${book.id}`}>
                            {book.title_book}
                        </Link>
                    </li>
                ))}
            </ul>
            <Link href="/libros/crear">Create Book</Link>
        </div>
    )
}
export default BookList