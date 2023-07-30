"use client";
import React, { useEffect, useState } from "react";

import UserUpdate from "./UserUpdate";

const UserDetails = () => {
  const [tests, setTests] = useState([]);
  const [selectedTestId, setSelectedTestId] = useState(null);
  const [updateStates, setUpdateStates] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/test/getTests")
      .then((response) => response.json())
      .then((data) => {
        const initialUpdateStates = data.reduce((acc, test) => {
          acc[test._id] = false;
          return acc;
        }, {});
        setTests(data);
        setUpdateStates(initialUpdateStates);
      });
  }, []);

  const handleUpdateClick = (testId) => {
    setSelectedTestId(testId);
    setUpdateStates((prevStates) => ({ ...prevStates, [testId]: true }));
  };

  const handleCloseClick = (testId) => {
    setSelectedTestId(null);
    setUpdateStates((prevStates) => ({ ...prevStates, [testId]: false }));
  };

  const handleDelete = async (testId) => {
    console.log(testId);
    const response = await fetch(
      `http://localhost:5000/test/deleteTest/${testId}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(response);
  };

  return (
    <div className="flex flex-col gap-2 w-full rounded-md">
      {tests?.map((test) => (
        <div
          key={test._id}
          className="flex flex-col p-2 bg-gray-300 gap-4 rounded-md"
        >
          <div className="flex justify-around items-center">
            {updateStates && <h1>{test.username}</h1>}
            {!updateStates[test._id] ? (
              <button
                className="px-3 py-2 bg-black text-white rounded-md"
                onClick={() => handleUpdateClick(test._id)}
              >
                Update
              </button>
            ) : (
              <button
                className="px-3 py-2 bg-black text-white rounded-md"
                onClick={() => handleCloseClick(test._id)}
              >
                Close
              </button>
            )}
            <button
              className="px-3 py-2 bg-black text-white rounded-md"
              onClick={() => handleDelete(test._id)}
            >
              Delete
            </button>
          </div>
          {selectedTestId === test._id && updateStates[test._id] && (
            <UserUpdate test={test} />
          )}
        </div>
      ))}
    </div>
  );
};

export default UserDetails;
