import create from 'zustand'
import axios from "axios"

type state = {
    movies : Array<any>,
    responseSuccess: boolean,
    search : Function,
    page: number,
    title : string,
    typeOfItem : string,
    totalResults : number
}

const useStore = create<state>(set => ({
  responseSuccess : true,
  page : 1,
  totalResults : 0,
  title : "",
  typeOfItem : "movie",
  movies: [],
  search: async (title:string, typeOfItem: string, page:number) => {
      let params : any = {
        apikey:"9ddde0b3",
        type:"movie",
        page:page,
        s:title,
      };
      params.type = typeOfItem;

      const response = await axios.get("http://www.omdbapi.com/", {
          params : params
        });
      console.log(response.data)
      const totalResults = response.data?.totalResults ?? 0;
      set({
          movies: response.data?.Search ?? [],
          responseSuccess: response.data?.Response === "True",
          page : 1,
          title : title,
          typeOfItem:typeOfItem,
          totalResults: totalResults
        })
  },
}))

export default useStore;
