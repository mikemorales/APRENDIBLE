<?php

namespace Tests\Feature;

use App\Models\Book;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class BooksApiTest extends TestCase {
    use RefreshDatabase;

    /** @test */
    function can_get_all_books() {
        $books = Book::factory()->count( 3 )->create();
        //dd(route( 'books.index' ));
        $this->getJson( route( 'books.index' ) )
             ->assertJsonFragment( [
                 'title_book' => $books[0]->title_book,
             ] );
    }

    /** @test */
    function can_create_a_book() {

        $this->postJson( route( 'books.store' ), [] )->assertJsonValidationErrorFor( 'title_book' );

        $this->postJson( route( 'books.store' ), [
            'title_book' => 'New Book',
        ] )->assertJsonFragment( [
            'title_book' => 'New Book',
        ] );

        $this->assertDatabaseHas( 'books', [
            'title_book' => 'New Book',
        ] );
    }

    /** @test */
    function can_get_a_book() {
        $book = Book::factory()->create();
        $this->getJson( route( 'books.show', $book ) )
             ->assertJsonFragment( [
                 'title_book' => $book->title_book,
             ] );
    }

    /** @test */
    function can_update_a_book() {
        $book = Book::factory()->create();
        $this->patchJson( route( 'books.update', $book ), [
            'title_book' => 'Updated Book',
        ] )->assertJsonFragment( [
            'title_book' => 'Updated Book',
        ] );
        $this->assertDatabaseHas( 'books', [
            'title_book' => 'Updated Book',
        ] );
    }

    /** @test */
    function can_delete_a_book() {
        $book = Book::factory()->create();
        $this->deleteJson( route( 'books.destroy', $book ) )
             ->assertNoContent();
        $this->assertDatabaseMissing( 'books', [
            'title_book' => $book->title_book,
        ] );
    }
}
