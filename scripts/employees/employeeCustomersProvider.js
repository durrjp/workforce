let employeeCustomers = []

export const getEmployeeCustomers = () => {
    return fetch('http://localhost:3000/employeeCustomers')
        .then(response => response.json())
        .then(parsedemployeeCustomers => {
            employeeCustomers = parsedemployeeCustomers
        })

}

export const useEmployeeCustomers = () => employeeCustomers.slice()