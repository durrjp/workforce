import { EmployeeDisplay } from "./employees/EmployeeList.js";
import { getEmployees } from "./employees/employeeProvider.js";
import { getComputers } from "./computers/computerProvider.js";
import { getEmployeesComputers } from "./employeeComputers/employeeComputersProvider.js";

getEmployees().then(getComputers).then(getEmployeesComputers).then(EmployeeDisplay)
