let departments = []

export const getDepartments = () => {
    return fetch('http://localhost:3000/departments')
        .then(response => response.json())
        .then(parseddepartments => {
            departments = parseddepartments
        })

}

export const useDepartments = () => departments.slice()