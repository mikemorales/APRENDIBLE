<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class BookController extends Controller {
    /**
     * Display a listing of the resource.
     *
     *
     */
    public function index() {
        //
        return Book::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     *
     *
     */
    public function store( Request $request ) {

        $request->validate( [
            'title_book' => 'required'
        ] );
        //
        $book             = new Book;
        $book->title_book = $request->title_book;
        $book->save();

        return $book;
    }

    /**
     * Display the specified resource.
     *
     * @param Book $book
     *
     * @return Book
     */
    public function show( Book $book ) {
        return $book;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Book $book
     *
     * @return Book
     */
    public function update( Request $request, Book $book ) {

        $request->validate( [
            'title_book' => 'required'
        ] );
        $book->title_book = $request->title_book;
        $book->save();

        return $book;

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Book $book
     *
     * @return Response
     */
    public function destroy( Book $book ) {
        //

        $book->delete();

        return response()->noContent();
    }
}
