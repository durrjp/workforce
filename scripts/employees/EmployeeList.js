import { useEmployees } from "./employeeProvider.js"
import { Employee } from "./Employee.js"
import { useComputers } from "../computers/computerProvider.js"
import { useDepartments } from "../departments/departmentsProvider.js"
import { useLocations } from "../locations/locationsProvider.js"
import { useCustomers } from "../customers/customersProvider.js"
import { useEmployeeCustomers } from "./employeeCustomersProvider.js"


const contentTarget = document.querySelector(".employeeContainer")


export const EmployeeDisplay = () => {
    const employees = useEmployees()
    const computers = useComputers()
    const departments = useDepartments()
    const locations = useLocations()
    const customers = useCustomers()
    const employeeCustomers = useEmployeeCustomers()

    const render = () => {
        contentTarget.innerHTML = employees.map(employee => {

            const relatedComputer = computers.find(computer => computer.id === employee.computerId)
            const employeeDepartment = departments.find(department => department.id === employee.departmentId)
            const employeeLocation = locations.find(location => location.id === employee.locationId)

            let relatedEmployeeCustomers = employeeCustomers.filter(eC => eC.employeeId === employee.id)
            relatedEmployeeCustomers = relatedEmployeeCustomers.map(rEC => {
                return customers.find(customer => rEC.customerId === customer.id)
            })
            const html = Employee(employee, relatedComputer, employeeDepartment, employeeLocation, relatedEmployeeCustomers)

            return html
        }).join("")
    }
        render()
}