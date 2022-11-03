import Link from "next/link";

const BookList = () => {
    return (
        <div>
            <h1>Libros</h1>
            <Link href="/libros/crear">Create Book</Link>
        </div>
    )
}
export default BookList