import React from 'react'
import Title from '../components/Title'
import {useContext} from 'react'
import {RoomContext} from '../context'

const getUnique = (items, value) => {
    return [...new Set(items.map(items => items[value]))]
}

export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext)
    const { handleChange, type, capacity, price, minPrice, 
            maxPrice, minSize, maxSize, breakfast, pets} = context
    let types = getUnique(rooms, 'type') 
    types = ['all', ...types] 
    types = types.map((item, index) => {
        return <option value = {item} key = {index}>{item}</option>
    }) 
    let capacities = getUnique(rooms, 'capacity')
    capacities = capacities.map((item, index) => {
        return <option value = {item} key = {index}>{item}</option>
    })
    return (
        <section className="filter-container">
        <Title title="Search Rooms" />
        <form className="filter-form">
            {/* select type */}
            <div className="form-group">
                <label htmlFor="type">room type</label>   
                <select name="type" id="type" value={type} className="form-control" onChange={handleChange} >
                    {types}
                </select>
            </div>
            {/* end select type */}
            {/* select guest */}
            <div className="form-group">
                <label htmlFor="capacity">guests</label>   
                <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange} >
                    {capacities}
                </select>
            </div>
            {/* end select guest */}
            {/* price */}
            <div className="form-group">
                <label htmlFor="price">Room Price ${price}</label>  
                <input type="range" name="price" min={minPrice} max={maxPrice} 
                       id="price" value={price} onChange={handleChange} className="form-control"/> 
            </div>
            {/* end price */}            
            {/* size */}
            <div className="form-group">
                <label htmlFor="size">Room size</label>  
                <div className="size-inputs">
                    <input type="number" name="minSize" id="minSize" value={minSize} onChange={handleChange} className="size-input"/>
                    <input type="number" name="maxSize" id="maxSize" value={maxSize} onChange={handleChange} className="size-input"/>
                </div>
            </div>
            {/* end size */}
            {/* extras */}
            <div className="form-group">
                <div className="single-extra">
                    <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
                    <label htmlFor="breakfast">breakfast</label>
                </div>
                <div className="single-extra">
                    <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
                    <label htmlFor="breakfast">pets</label>
                </div>
            </div>
            {/* end extras */}            
        </form>
        </section>
    )
}
