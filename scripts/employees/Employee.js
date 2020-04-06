export const Employee = (employee, computer) => {
    return `
    <div class="singleEmployee">
        <h3>${employee.firstName} ${employee.lastName}</h3>
        <p>Age: ${employee.age}</p>
        <p>Computer info:</p>
        <ul>
            <li>Model: ${computer.model} - ${computer.year}</li>
        </ul>
    </div>
    `
}