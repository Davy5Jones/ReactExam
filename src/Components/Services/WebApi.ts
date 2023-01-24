import axios from "axios";
import { RootObject } from "../Models/LibraryModels";
import global from "./ConstantService";



class WebApi {
  private baseUrl = global.urls;

  public bookSearch(query: string) {
    return axios.get<RootObject>(
      this.baseUrl,{
        params:{
          q:query,
          maxResults:10
        }
      }
    );
  }
}


const webApi = new WebApi();
export default webApi;
