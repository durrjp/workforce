import { EmployeeDisplay } from "./employees/EmployeeList.js";
import { getEmployees } from "./employees/employeeProvider.js";
import { getComputers } from "./computers/computerProvider.js";
import { getDepartments } from "./departments/departmentsProvider.js";
import { getLocations } from "./locations/locationsProvider.js";
import { getCustomers } from "./customers/customersProvider.js";
import { getEmployeeCustomers } from "./employees/employeeCustomersProvider.js";
import { CustomerDisplay } from "./customers/CustomerList.js";

getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(getLocations)
    .then(getCustomers)
    .then(getEmployeeCustomers)
    .then(EmployeeDisplay)
    .then(CustomerDisplay)

