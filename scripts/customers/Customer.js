export const Customer = (customer, rEC) => {
    return `
    <div class="singleEmployee">
        <h2>${customer.name}</h2>
        <p><span class="bold">Employees</span>:</p>
        <ul>
        ${rEC.map(employee => {
            return `<li>${employee.firstName} ${employee.lastName}</li>`
        }).join("")}
        </ul>
    </div>
    `
}