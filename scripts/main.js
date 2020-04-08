import { EmployeeDisplay } from "./employees/EmployeeList.js";
import { getEmployees } from "./employees/employeeProvider.js";
import { getComputers } from "./computers/computerProvider.js";
import { getDepartments } from "./departments/departmentsProvider.js";

getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(EmployeeDisplay)
