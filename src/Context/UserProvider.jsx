import { UserContext } from "./UserContext";

const UserProvider = ({ children }) => {

    const user = "Sunil";

    return (

        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider