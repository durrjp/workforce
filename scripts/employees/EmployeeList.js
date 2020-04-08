import { useEmployees } from "./employeeProvider.js"
import { Employee } from "./Employee.js"
import { useComputers } from "../computers/computerProvider.js"
import { useDepartments } from "../departments/departmentsProvider.js"
import { useLocations } from "../locations/locationsProvider.js"


const contentTarget = document.querySelector(".employeeContainer")


export const EmployeeDisplay = () => {
    const employees = useEmployees()
    const computers = useComputers()
    const departments = useDepartments()
    const locations = useLocations()

    const render = () => {
        contentTarget.innerHTML = employees.map(employee => {
            const relatedComputer = computers.find(computer => computer.id === employee.computerId)
            const employeeDepartment = departments.find(department => department.id === employee.departmentId)
            const employeeLocation = locations.find(location => location.id === employee.locationId)

            const html = Employee(employee, relatedComputer, employeeDepartment, employeeLocation)

            return html
        }).join("")
    }
        render()
}