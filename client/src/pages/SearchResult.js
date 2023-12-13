import { Link } from "react-router-dom";
import "../Searchresult.css";
import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {UserContext} from "../UserContext";


export const SearchResult = ({ result }) => {

  return (
    //
    <>
    
    <div  className="search-result">
    <div
       className="search-result"
       onClick={(e) => alert(`You selected ${result.title}!`)}
     >
          {result.title || result.content} </div>
  
   
   
    </div>
    </>
  );
};

