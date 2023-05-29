import logo from '../assets/img/logo.png'

import { useDispatch, useSelector } from "react-redux"


export function HomePage() {

    const dispatch = useDispatch()
    const count = useSelector((storeState) => storeState.userModule.count)

    function changeCount(diff) {
        console.log('Changing count by:', diff)
        // setCount(500)
        // setCount((prevCount) => prevCount + diff)
        // dispatch({ type: 'INCREMENT' })
        dispatch({ type: 'CHANGE_BY', diff })
    }


    return (
        <section className='home-page'>
            
            {/* <img src="../assets/img/logo.png" alt="Logo" /> */}
            <img className='logo' src={logo} alt="Logo" />
            {/* <img src={require('../assets/img/logo.png')} alt="Logo" /> */}
            
        </section >
    )
}


