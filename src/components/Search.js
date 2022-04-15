import React, { useState, useEffect } from "react";
import './Search.css'

const Search = (props) => {
    const [searchData, setSearchData] = useState('');

    // useEffect hook for debouncing of search input.
    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            if(searchData.length >= 3) {
                console.log("Fetching Data....");
                fetchData(searchData).then(data => {
                    props.getSearchDataProp(data);
                });
            }
        }, 1500);

        return () => clearTimeout(debounceTimer);
    }, [searchData]);
    return (
        <div className="search-wrapper">
            <input
                type="text"
                className="search-textbox"
                placeholder="Search GitHub users..."
                onChange={(event) => {
                    if(event.target.value.length >= 3)
                        setSearchData(event.target.value);
                    else {
                        setSearchData('');
                        props.getSearchDataProp([]);
                    }
                }}
            />
        </div>
    );
};

const fetchData = async (searchData) => {
    // API Request to local server using fetch API.

    let responseData = await fetch(`http://localhost:3030/api/search/${searchData}`, {
        method: 'POST'  
    }).then((res) => {
        if(res.status === 200)
            return res.json()
    })
    .catch(err => console.error(err));
    // .then(resData => console.log(resData));
    return responseData;
}

export default Search;