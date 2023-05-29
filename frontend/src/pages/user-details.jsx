import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { userService } from "../services/user.service.js"
import { showErrorMsg } from "../services/event-bus.service.js"

export function UserDetails() {
    const [user, setUser] = useState(null)
    
    const { userId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadUser()
    }, [userId])

    const loggedinUser = userService.getLoggedinUser()
    const isMyProfile = loggedinUser._id === userId

    function loadUser() {
        userService.getById(userId)
            .then((user) => setUser(user))
            .catch((err) => {
                console.log('Had issues in user details', err)
                showErrorMsg('Cannot load user')
                navigate('/')
            })
    }

    if (!user) return <div>Loading...</div>
    return <section className="user-details">
        <h1>Hello {user.fullname},</h1>
        <h5>Your Balance is: {user.score}$</h5>
        {isMyProfile &&
        <section className="my-stuff">
            <h2>My Stuff!</h2>
        </section>
        }
        <p>{}</p>
        <p></p>
    
    </section>
}

// import { ShoppingCart } from './shopping-cart.jsx'
// <span>{cart.length}</span> Products in your Cart