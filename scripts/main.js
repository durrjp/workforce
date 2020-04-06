import { EmployeeDisplay } from "./employees/EmployeeList.js";
import { getEmployees } from "./employees/employeeProvider.js";
import { getComputers } from "./computers/computerProvider.js";

getEmployees().then(getComputers).then(EmployeeDisplay)
