import React, { useState, UseEffect } from "react";
import './Search.css'

const Search = (props) => {
    const [searchData, setSearchData] = useState("Test Data from Child.");
    return (
        <div className="search-wrapper">
            <input type="text" className="search-textbox" placeholder="Search GitHub users..." />
            <input type="button" className="search-btn" value="Search" onClick={() => {
                // console.log();
                fetchData().then(text => props.getSearchDataProp(text))
                // props.childToParentProp();
            }}/>
        </div>
    );
};

const fetchData = async () => {
    // API Request to local server using fetch API.

    let responseData = await fetch("http://localhost:3030/api/test", {
        method: 'POST'  
    }).then((res) => {return res.json()})
    .catch(err => console.error(err));
    // .then(resData => console.log(resData));
    return responseData;
}

export default Search;