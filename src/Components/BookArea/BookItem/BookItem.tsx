import moment from "moment";
import { Book } from "../../Models/LibraryModels";
import "./BookItem.css";
interface BookItem{
    book:Book
}
function BookItem(props:BookItem): JSX.Element {

    return (
      <div className="BookItem">
        <h3>title: {props.book.volumeInfo.title || "N/A"}</h3>
        <p>
          {moment(props.book.volumeInfo.publishedDate).format("YYYY ") || "N/A"}
        </p>
        <img alt="thumbnail" src={props.book.volumeInfo.imageLinks?.thumbnail}/>
        <h4>author: {props.book.volumeInfo.authors? props.book.volumeInfo.authors[0] : "N/A"}</h4>
      </div>
    );
}

export default BookItem;
