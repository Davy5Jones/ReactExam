import { useEffect } from "react";
import { useState } from "react";
import { Search } from "../../Models/BaseModels";
import store from "../../Redux/Store";
import SearchItem from "../SearchItem/SearchItem";
import "./BookHistory.css";
interface BookHistory{
    setter:Function
}
function BookHistory(props:BookHistory): JSX.Element {
    const searches:Search[] = store.getState().historyReducer.history;
    
    return (
        <div className="BookHistory">
            <h2>HISTORY</h2>
			{searches.map(search => <SearchItem setter={props.setter} item={search}/>)}
        </div>
    );
}

export default BookHistory;
