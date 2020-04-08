import { useEmployees } from "./employeeProvider.js"
import { Employee } from "./Employee.js"
import { useComputers } from "../computers/computerProvider.js"
import { useDepartments } from "../departments/departmentsProvider.js"


const contentTarget = document.querySelector(".employeeContainer")


export const EmployeeDisplay = () => {
    const employees = useEmployees()
    const computers = useComputers()
    const departments = useDepartments()

    const render = () => {
        contentTarget.innerHTML = employees.map(employee => {
            let relatedComputer = computers.find(computer => computer.id === employee.computerId)
            const employeeDepartment = departments.find(department => department.id === employee.departmentId)

            const html = Employee(employee, relatedComputer, employeeDepartment)

            return html
        }).join("")
    }
        render()
}