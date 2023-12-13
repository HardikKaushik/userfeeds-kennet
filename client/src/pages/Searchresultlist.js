import "../SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {

        return <SearchResult result={result} key={id}/>
        // <div key={id}>{result.title || result.content} </div>

        {/* // return <SearchResult result={result.name} key={id} />; */}
      })}
    </div>
  );
};
