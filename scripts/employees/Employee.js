export const Employee = (employee, computer, department) => {
    return `
    <div class="singleEmployee">
        <h3>${employee.firstName} ${employee.lastName}</h3>
        <p>Age: ${employee.age}</p>
        <p>Computer info: ${computer.model} - ${computer.year}</p>
        <p>Department: ${department.name}</p>
    </div>
    `
}