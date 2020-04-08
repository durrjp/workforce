export const Employee = (employee, computer, department, location, rEC) => {
    return `
    <div class="singleEmployee">
        <h2>${employee.firstName} ${employee.lastName}</h2>
        <p><span class="bold">Age</span>: ${employee.age}</p>
        <p><span class="bold">Computer</span>: ${computer.model} - ${computer.year}</p>
        <p><span class="bold">Department</span>: ${department.name}</p>
        <p><span class="bold">Office</span>: ${location.name}</p>
        <p><span class="bold">Customers</span>:</p>
        <ul>
        ${rEC.map(rECObject => {
            return `<li>${rECObject.name}</li>`
        }).join("")}
        </ul>
    </div>
    `
}