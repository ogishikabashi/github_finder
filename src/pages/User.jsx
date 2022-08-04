import { useEffect, useContext } from "react"
import GithubContext from "../context/github/GithubContext"
import { useParams } from 'react-router-dom'
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'
function User() {

    const { getUser, user } = useContext(GithubContext)
    const params = useParams()

    useEffect(() => {
        getUser(params.login)
    }, [])
    return (
        <div>User</div>
    )
}

export default User