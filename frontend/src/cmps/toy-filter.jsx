
import { useEffect, useRef, useState } from "react"
import { toyService } from "../services/toy.service.js"
import { utilService } from "../services/util.service.js"
import { useForm } from "../customHooks/useForm.js"

export function ToyFilter({ onSetFilter }) {


    onSetFilter = useRef(utilService.debounce(onSetFilter))
    const [filterByToEdit, setFilterByToEdit, handleChange] = useForm(toyService.getDefaultFilter(), onSetFilter.current)

    const elInputRef = useRef(null)

    useEffect(() => {
        elInputRef.current.focus()
    }, [])



    function onSubmitFilter(ev) {
        // update father cmp that filters change on submit
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }


    return <section className="toy-filter full main-layout">
        <h2>Toys Filter</h2>
        <form onSubmit={onSubmitFilter}>
            <label htmlFor="name">Name:</label>
            <input type="text"
                id="name"
                name="txt"
                placeholder="By name"
                value={filterByToEdit.txt}
                onChange={handleChange}
                ref={elInputRef}
            />

            <label htmlFor="maxPrice">Max price:</label>
            <input type="number"
                id="maxPrice"
                name="maxPrice"
                placeholder="By max price"
                value={filterByToEdit.maxPrice}
                onChange={handleChange}
            />

            <label htmlFor="maxAge">Max Age:</label>
            <input type="number"
                id="maxAge"
                name="maxAge"
                placeholder="By max age"
                value={filterByToEdit.maxAge}
                onChange={handleChange}
            />
          
            <button hidden>Filter</button>
        </form>

    </section>
}