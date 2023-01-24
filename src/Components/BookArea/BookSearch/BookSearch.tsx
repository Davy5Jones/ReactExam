import { useState } from "react";
import { Search, SearchParam } from "../../Models/BaseModels";
import "./BookSearch.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import store from "../../Redux/Store";
import { gotNewSearch } from "../../Redux/HistoryState";
interface BookSearch {
  setter: Function;
}
function BookSearch(props: BookSearch): JSX.Element {
  const submitter = function querySubmitter(params: SearchParam) {
    const query =
      params.field + ":" + '"' + params.search.replace(" ", "+") + '"';
    store.dispatch(
      gotNewSearch({
        url: query,
        field: params.field,
        search: params.search,
      })
    );
    props.setter(query);
  };

  const schema = yup.object().shape({
    search: yup.string().required("Search value is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<SearchParam>({ mode: "all", resolver: yupResolver(schema) });

  return (
    <div className="BookSearch">
      <form onSubmit={handleSubmit(submitter)}>
        <label htmlFor="field">Field:</label>

        <select {...register("field")}>
          <option value={"inauthor"}>Author</option>
          <option value={"inpublisher"}>Publisher</option>
        </select>

        {!errors.search ? (
          <label htmlFor="search">search</label>
        ) : (
          <span>{errors.search.message}</span>
        )}

        <input {...register("search")} placeholder="search" />

        <button disabled={!isValid}>search</button>
      </form>
    </div>
  );
}

export default BookSearch;
