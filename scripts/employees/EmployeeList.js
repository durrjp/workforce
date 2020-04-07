import { useEmployees } from "./employeeProvider.js"
import { Employee } from "./Employee.js"
import { useComputers } from "../computers/computerProvider.js"


const contentTarget = document.querySelector(".employeeContainer")


export const EmployeeDisplay = () => {
    const employees = useEmployees()
    const computers = useComputers()

    const render = () => {
        contentTarget.innerHTML = employees.map(employee => {
            let relatedComputers = computers.find(computer => computer.id === employee.computerId)

            const html = Employee(employee, relatedComputers)

            return html
        }).join("")
    }
        render()
}