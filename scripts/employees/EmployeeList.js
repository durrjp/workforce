import { useEmployees } from "./employeeProvider.js"
import { Employee } from "./Employee.js"
import { useComputers } from "../computers/computerProvider.js"
import { useEmployeesComputers } from "../employeeComputers/employeeComputersProvider.js"


const contentTarget = document.querySelector(".employeeContainer")


export const EmployeeDisplay = () => {
    const employees = useEmployees()
    const computers = useComputers()
    const employeeComputers = useEmployeesComputers()

    const render = () => {
        contentTarget.innerHTML = employees.map(employee => {
            let relatedComputers = employeeComputers.filter(ec => ec.employeeId === employee.id)

            relatedComputers = relatedComputers.map(rc => {
                return computers.find(computer => computer.id === rc.computerId)
            })
            const html = Employee(employee, relatedComputers)

            return html
        }).join("")
    }
        render()
}