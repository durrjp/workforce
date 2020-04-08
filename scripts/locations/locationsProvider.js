let locations = []

export const getLocations = () => {
    return fetch('http://localhost:3000/locations')
        .then(response => response.json())
        .then(parsedlocations => {
            locations = parsedlocations
        })

}

export const useLocations = () => locations.slice()