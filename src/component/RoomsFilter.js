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
                {/* price selection */}
                <div className="form-group">
                    <label htmlFor="price">
                    room price ${price}
                    </label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control"/>
                </div>
                {/*end of price selection */}
                {/* size section */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                    <input type="number" name="minSize" id="size" value={minSize} className="size-input" onChange={handleChange}/>
                    <input type="number" name="maxSize" id="size" value={maxSize} className="size-input" onChange={handleChange}/>
                    </div>
                </div>
                {/* end of size section */}
                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/* end extras */}
            </form>
        </section>
    )
}
