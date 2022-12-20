import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import { GeoApi_URl, GeoApiOptions } from "../../Apis"

const Saerch = ({onSearch}) => {
    const [search, setSearch] = useState(null)

    const handleChange = (searchData) => {
        setSearch(searchData)
        onSearch(searchData)
    }

    const loadOptions = (inputValue) => {
       return fetch(`${GeoApi_URl}/cities?minPopulation=100000&namePrefix=${inputValue}`, GeoApiOptions)
       .then(response => response.json())
       .then(response => {
         return {
            options: response.data.map((city)=> {
                return {
                    value: `${city.latitude} ${city.longitude}` ,
                    label: `${city.name}, ${city.countryCode}`
                }
            })
         }
       })
       .catch(err => console.error(err)); 
    }
    return (
        < AsyncPaginate
            placeholder = 'Search for City'
            debounceTimeout={600}
            value = {search}
            onChange = {handleChange}
            loadOptions = {loadOptions}
        />
    )
}

export default Saerch