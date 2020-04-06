import { useEmployees } from "./employeeProvider.js"
import { Employee } from "./Employee.js"
import { useComputers } from "../computers/computerProvider.js"


const contentTarget = document.querySelector(".employeeContainer")

export const EmployeeDisplay = () => {
    render()
}

const render = () => {
    const employees = useEmployees()
    const computers = useComputers()
    
    const employeesHTML = employees.map(employee => {
        const matchingComputer = computers.find(computer => {
            return computer.id === employee.computerId
        })
        return `
        ${Employee(employee, matchingComputer)}

        `
    }).join("")
    contentTarget.innerHTML = employeesHTML
}