import React from 'react';

const UserContext = React.createContext(true);//You can pre-populate this with whatever data you want React.createContext(true)
//empty object value here to represent that I might be filling in this data later

export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer

export default UserContext;