export const Employee = (employee, computers) => {
    return `
    <div class="singleEmployee">
        <h3>${employee.firstName} ${employee.lastName}</h3>
        <p>Age: ${employee.age}</p>
        <p>Computer info:</p>
        <ul>
        ${
            computers.map(computer => `<li>${computer.model} - ${computer.year}</li>`).join("")
        }
        </ul>
    </div>
    `
}