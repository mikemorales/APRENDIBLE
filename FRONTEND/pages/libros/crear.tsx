import Link from "next/link";
import {useState} from "react";

const BookCreate = () => {

    const [bookName, setBookName] = useState('');

    async function handleSubmit(e) {

        e.preventDefault();

        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books`, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title_book: bookName
            }),
        });

        console.log(res);
    }

    return (
        <div>
            <h1>Crear Libro</h1>
            <p>{bookName}</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Titulo</label>
                <input
                    type="text"
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                    name="title_book"
                    id="title"/>
                <button>Crear</button>

            </form>
            <Link href="/libros">Book List</Link>
        </div>
    )
}
export default BookCreate