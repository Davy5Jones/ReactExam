import { useEffect, useState } from "react";
import { Book } from "../../Models/LibraryModels";
import webApi from "../../Services/WebApi";
import BookHistory from "../BookHistory/BookHistory";
import BookItem from "../BookItem/BookItem";
import BookSearch from "../BookSearch/BookSearch";
import "./BookList.css";

function BookList(): JSX.Element {
    const [query,setQuery] =useState<string>("")
    const[books,setBooks] =useState<Book[]>([])
    useEffect(()=>{
        query&&webApi.bookSearch(query).then( res=>{
            setBooks(res.data.items)
        })
    },[query])
    return (
      <div className="BookList">
        <div className="BookListWrapper">
          <BookSearch setter={setQuery} />
          {books.map((bok) => (
            <BookItem book={bok} />
          ))}
        </div>
        <BookHistory setter={setQuery} />
      </div>
    );
}

export default BookList;
