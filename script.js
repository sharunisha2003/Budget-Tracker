document.getElementById('transaction-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const type = document.getElementById('type').value;
    const name = document.getElementById('name').value;
    const amount = document.getElementById('amount').value;

    if (type && name && amount) {
        const table = document.getElementById('transaction-table');
        const row = table.insertRow();

        const typeCell = row.insertCell(0);
        const nameCell = row.insertCell(1);
        const amountCell = row.insertCell(2);
        const optionsCell = row.insertCell(3);

        typeCell.textContent = type;
        nameCell.textContent = name;
        amountCell.textContent = `$${amount}`;
        optionsCell.innerHTML = '<a href="#" onclick="deleteTransaction(this)">Delete</a>';

        document.getElementById('transaction-form').reset();
    }
});

function deleteTransaction(element) {
    const row = element.parentNode.parentNode;
    row.parentNode.removeChild(row);
}