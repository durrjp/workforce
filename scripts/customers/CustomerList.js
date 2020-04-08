
import { Customer } from "./Customer.js"
import { useEmployees } from "../employees/employeeProvider.js"
import { useCustomers } from "./customersProvider.js"
import { useEmployeeCustomers } from "../employees/employeeCustomersProvider.js"


const contentTarget = document.querySelector(".customerContainer")


export const CustomerDisplay = () => {
    const employees = useEmployees()
    const customers = useCustomers()
    const employeeCustomers = useEmployeeCustomers()

    const render = () => {
        contentTarget.innerHTML = customers.map(customer => {

            let relatedEmployeeCustomers = employeeCustomers.filter(eC => eC.customerId === customer.id)
            relatedEmployeeCustomers = relatedEmployeeCustomers.map(rEC => {
                return employees.find(employee => rEC.employeeId === employee.id)
            })
            const html = Customer(customer, relatedEmployeeCustomers)

            return html
        }).join("")
    }
        render()
}