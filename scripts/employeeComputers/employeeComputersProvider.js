let employeesComputers = []

export const getEmployeesComputers = () => {
    return fetch('http://localhost:3000/employeesComputers')
        .then(response => response.json())
        .then(parsedEmployeesComputers => {
            employeesComputers = parsedEmployeesComputers
        })

}

export const useEmployeesComputers = () => employeesComputers.slice()