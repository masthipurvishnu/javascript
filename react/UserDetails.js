import React, { useState } from "react";

const UserDetails = () => {
    const [userDetails, setUserDetails] = useState([]);
    // const getUserDetails
    // useEffect(async () => {
    // useEffect(() => {
    async function fetchData() {
        // You can await here
        // const response = await MyAPI.getData(someId);

        // const userDetails = await fetch(
        //   "http://jsonplaceholder.typicode.com/todos"
        // ).then((res) => {
        //   return new Promise((resolve, reject) => {
        //     resolve(res);
        //   });
        // });

        const userDetails = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
        ).then(res => res.json());

        // ).then(res => return res.json())
        // const res = userDetails.json();
        // .then((res) => await res.json());
        // console.log(JSON.stringify(userDetails));
        console.log(userDetails.length);
        setUserDetails(userDetails);
    }
    fetchData();
    // }, []);

    return (
        <>
            <button onClick={fetchData}>Get User Details</button>
            {/* <button onClick={userDetails}>Get User Details</button> */}
        </>
    );
};

export default UserDetails;
