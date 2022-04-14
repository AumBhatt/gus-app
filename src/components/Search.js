import React, { useState, UseEffect } from "react";

const Search = (props) => {
    const [searchData, setSearchData] = useState("Test Data from Child.");
    return (
        <div className="search-wrapper">
            <input type="text" className="search-textbox" placeholder="Search GitHub Users" />
            <input type="button" className="search-btn" value="Search" onClick={() => props.childToParentProp(searchData)}/>
        </div>
    );
};

const fetchData = () => {
    // API Request to local server using fetch API.

    fetch("http://localhost:3030/api/test", {
        method: 'POST'  
    }).then((res) => res.json())
    .then(resData => console.log(resData));
}

export default Search;