import { Search } from "../../Models/BaseModels";
import "./SearchItem.css";
interface SearchItem{
    item:Search
    setter:Function
}
function SearchItem(props:SearchItem): JSX.Element {
    return (
      <div className="SearchItem">
        <button onClick={()=>props.setter(props.item.url)}>
          {props.item.field.replace("in","")} : {props.item.search}
        </button>
      </div>
    );
}

export default SearchItem;
