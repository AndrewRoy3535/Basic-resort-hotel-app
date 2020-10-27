import React, {useContext} from 'react'
import {RoomContext} from '../context'
import Title from './Title'

// get all uniqe values for select type

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomsFilter({rooms}) {

    const context = useContext(RoomContext)
    
    const { handleChange, 
            type,
            capacity,
            price,
            minPrice,
            maxPrice,
            minSize,
            maxSize,
            breakfast,
            pets,} = context;

    let types = getUnique(rooms, 'type')    

    types = ["all", ...types]

    types = types.map((item, index) =>{ 
        return (<option value={item} key={index}>{item}</option>)
    })

    let people = getUnique(rooms, 'capacity')

    people = people.map((item, index) =>{ 
        return (<option value={item} key={index}>{item}</option>)
    })
    return ( 
        <section className="filter-container">
            <Title title="search room"/>
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">Room Type</label>
                    <select
                    name="type"
                    id="type"
                    value={type}
                    className="form-control"
                    onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>
                {/* select type end */}
                {/* guest section */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select
                    name="capacity"
                    id="capacity"
                    value={capacity}
                    className="form-control"
                    onChange={handleChange}
                    >
                        {people}
                    </select>
                </div>
                {/* guest section end */}
            </form>
        </section>
    )
}
