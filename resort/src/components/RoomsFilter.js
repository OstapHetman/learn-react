import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../context'
import Title from '../components/Title'

// get all unique values
const getUnique = (items, value) => {
    return[...new Set(items.map(item => item[value]))]
}

export default function RoomsFlter({rooms}) {
    const context = useContext(RoomContext)
    const {
        handleChange, type, capacity, price, minPrice, maxPrice,minSize,maxSize,breakfast,pets
    } = context;
 
    // get unique types
    let types= getUnique(rooms, "type");
    console.log(rooms.type)
    // add all
    types = ['all', ...types];
    // map to jsx
    types = types.map((item,index) => {
        return (<option value={item} key={index}>{item}</option>)
    })

    let people = getUnique(rooms, 'capacity');
    people = people.map((item,index) => {
        return (<option value={item} key={index}>{item}</option>)
    })

    return (
        <section className="filter-container">
            <Title title="search-rooms"/>
            <form className="filter-form">
                {/*select type*/}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/*end select type*/}

                 {/*select guests*/}
                 <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {people}
                    </select>
                </div>
                {/*end select guests*/}

                {/* room price */}
                <div className="form-group">
                    <label htmlFor="price">
                        room prict ${price}
                    </label>
                    <input type="range" name="price" className="form-control" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange}/>
                </div>
                {/* end room price */}

                {/* room size */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input type="number" className="size-input" name="minSize" id="size" value={minSize} onChange={handleChange}/>
                        <input type="number" className="size-input" name="maxSize" id="size" value={maxSize} onChange={handleChange}/>
                    </div>
                </div>
                {/* end room size */}

                {/* extras size */}
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
                {/* extras size */}
            </form>
        </section>
    )
}
