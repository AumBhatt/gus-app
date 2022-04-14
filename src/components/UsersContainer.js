import React, { useEffect, useState } from "react";
import UserCard from "./UserCard"
import './UserContainer.css'

const UserContainer = (props) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        // If data is present, then process it.
        if(props.searchData)
            processData(props.searchData.items);
    }, [props.searchData]);

    const processData = (data) => {
        let tempData = [];
        for(let i in data) {
            data['key'] = parseInt(i);
            tempData[i] = {
                key: i,
                userData: data[i]
            }
            console.log(tempData[i])
        }
        setUsers(tempData)
    }

    const renderUserGrid = () => {
        // console.log(users)
        return users.map(item => {
            return (
                <UserCard key={item.key} userData={item.userData}></UserCard>
                
            );
        })
    }
    return (
        <div className="user-card-container">
            {// Render the data of each user
                renderUserGrid()
            }
        </div>
    );
};

export default UserContainer;