
import axios, { AxiosError } from "axios";
import React, { createContext, useState, useContext } from "react";
import { useEffect } from "react";

// Create two context:
// UserContext: to query the context state
// UserDispatchContext: to mutate the context state
const UserContext = createContext();

// A "provider" is used to encapsulate only the
// components that needs the state in this context
function UserProvider({ children }) {

  const [error, setError] = useState(null)
  const [client, setClient] = useState(null)

  useEffect(() => {
    (async () => {
      const { client, error } = await getClient()
      setClient(client.data)
      setError(error)
    })()
  }, [])

  return (
    <UserContext.Provider
      value={{
        client,
        setClient,
        error,
        setError
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const userContext = () => useContext(UserContext);

export default UserProvider;


export async function getClient() {
  try {
    const data = await axios.get('api/auth/me')
    return {
      client: data,
      error: null
    }
  } catch (e) {
    const error = e
    return {
      client: null,
      error: error
    }
  }
}