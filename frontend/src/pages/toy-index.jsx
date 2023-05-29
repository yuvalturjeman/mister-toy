import { useDispatch, useSelector } from 'react-redux'


import { toyService } from '../services/toy.service.js'

import { ToyList } from '../cmps/toy-list.jsx'
import { ToyFilter } from '../cmps/toy-filter.jsx'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { ADD_TOY_TO_CART } from '../store/toy.reducer.js'
import { loadToys, removeToy, saveToy } from '../store/toy.action.js'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export function ToyIndex() {

    const [filterBy, setFilterBy] = useState(toyService.getDefaultFilter())
    const dispatch = useDispatch()
    const toys = useSelector((storeState) => storeState.toyModule.toys)
    const isLoading = useSelector((storeState) => storeState.toyModule.isLoading)

    useEffect(() => {
        loadToys(filterBy)
    }, [filterBy])

    function onRemoveToy(toyId) {
        removeToy(toyId)
            .then(() => {
                showSuccessMsg('Toy removed')
            })
            .catch(err => {
                showErrorMsg('Cannot remove toy')
            })
    }

    function onAddToy() {
        const toyToSave = toyService.getEmptyToy()

        saveToy(toyToSave)
            .then((savedToy) => {
                showSuccessMsg(`Toy added (id: ${savedToy._id})`)
            })
            .catch(err => {
                showErrorMsg('Cannot add toy')
            })
    }

    function onEditToy(toy) {
        const price = +prompt('New price?', toy.price)
        if (!price || price === toy.price) return

        const toyToSave = { ...toy, price }
        saveToy(toyToSave)
            .then((savedToy) => {
                showSuccessMsg(`Toy updated to price: $${savedToy.price}`)
            })
            .catch(err => {
                showErrorMsg('Cannot update toy')
            })
    }

    function addToCart(toy) {
        console.log(`Adding ${toy.name} to Cart`)
        showSuccessMsg('Added to Cart')
        dispatch({ type: ADD_TOY_TO_CART, toy })
    }

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }



    return <section>
        
        <main>
            <Link to={`/toy/edit`}>Add Toy</Link>
            {/* <button onClick={onAddToy}>Add random Toy </button> */}
            <ToyFilter onSetFilter={onSetFilter} />
            {isLoading && <h4>Loading...</h4>}
            <ToyList
                toys={toys}
                onRemoveToy={onRemoveToy}
                onEditToy={onEditToy}
                addToCart={addToCart}
                txt={'3'}
                nums={[1, 2, 3]}
            />
            <hr />
            {/* <pre>{JSON.stringify(cart, null, 2)}</pre> */}
        </main>
    </section>
}