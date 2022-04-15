import React, { useState, useEffect } from "react";
import gh_octocat from '../images/GitHubOctocat.svg'
import './Search.css'

const Search = (props) => {
    const [searchData, setSearchData] = useState('');
    const [clearSearch, setClearSearch] = useState('');
    const [serverConnErr, setServerConnErr] = useState(false);
    const [spinner, setSpinner] = useState(false);

    // useEffect hook for debouncing of search input.
    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            if(searchData.length >= 3) {
                // console.log("Fetching Data....");
                fetchData(searchData).then(data => {
                    if(data === -1) {
                        setServerConnErr(true);
                    }
                    else {
                        props.getSearchDataProp(data);
                        setSpinner(false)
                    }
                });
            }
        }, 1500);

        return () => clearTimeout(debounceTimer);
    }, [searchData]);

    useEffect(() => {
        if(!clearSearch) {
            props.getSearchDataProp([]);
            setSpinner(false)
        }
    }, [clearSearch])
    return (
        <div className="search-wrapper">
            <input
                type="text"
                className="search-textbox"
                placeholder="Search GitHub users..."
                value={clearSearch}
                onChange={(event) => {
                    setClearSearch(event.target.value);
                    setSpinner(true)
                    if(event.target.value.length >= 3) {
                        setSearchData(event.target.value);
                        props.getSearchDataProp([])
                    }
                    else {
                        setSearchData('');
                        props.getSearchDataProp([]);
                    }
                }}
            />
            <span
                className="material-icons close-icon"
                onClick={() => {
                    setClearSearch('');
                }}
            >{(clearSearch)?'close':'search'}</span>
            
            <div
                className="server-error-message"
            >
                {
                    (serverConnErr) ? "Could not connect to server ☹" :
                    (clearSearch.length === 0) ? "Start typing to search users..." : ""}
            </div>
            <img
                style={(spinner && !serverConnErr)?{display:"block"}:{display:"none"}} 
                className="loading-spinner"
                src={gh_octocat}
            ></img>
        </div>
    );
};

const fetchData = async (searchData) => {
    // API Request to local server using fetch API.

    let responseData = await fetch(`${process.env.REACT_APP_REDIS_SERVER_URL}api/search`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            searchType: 'users',
            searchText: searchData.toLowerCase()
        })
    }).then((res) => {
        if(res.status === 200)
            return res.json()
    })
    .catch(err => {
        console.error(err);
        return -1;
    });
    // .then(resData => console.log(resData));
    return responseData;
}

export default Search;