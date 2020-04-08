let customers = []

export const getCustomers = () => {
    return fetch('http://localhost:3000/customers')
        .then(response => response.json())
        .then(parsedcustomers => {
            customers = parsedcustomers
        })

}

export const useCustomers = () => customers.slice()