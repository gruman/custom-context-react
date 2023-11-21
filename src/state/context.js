import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a new context
const Context = createContext();

// Initial data to be provided by the context
const data = {
  name: "Create Context",
  url: "https://gruman.co"
}

// ContextProvider component to provide the context to its children
export const ContextProvider = ({ children }) => {
  // State for the score
  const [score, setScore] = useState(0);

  // State for site data
  const [siteData, setSiteData] = useState(data);

  // Function to update the score
  function updateScore(points) {
    setScore(old => old + points)
  }

  // useEffect example (runs on mount)
  useEffect(() => {
    console.log("You can use useEffect here too.")
  }, [])

  // Provide the context to its children
  return (
    <Context.Provider value={{ score, siteData, updateScore }}>
      {children}
    </Context.Provider>
  );
};

// Custom hook to conveniently use the context
export const useCustomContext = () => useContext(Context);
