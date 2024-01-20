document.getElementById("addItemBtn").addEventListener("click", function() {
    // Retrieve input values
    var itemName = document.getElementById("itemName").value;
    var quantity = document.getElementById("quantity").value;
    var dateBought = document.getElementById("dateBought").value;
    var supplier = document.getElementById("supplier").value;

    // Create new table row
    var newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${itemName}</td>
        <td>${quantity}</td>
        <td>${dateBought}</td>
        <td>${supplier}</td>
        <td>
            <button class="btn-primary edit-btn">Edit/Save</button>
            <button class="btn-erase delete-btn">Delete</button>
        </td>
    `;

    // Append new row to the table
    var tableBody = document.querySelector("table.grid-table tbody");
    tableBody.appendChild(newRow);

    // Clear input fields
    document.getElementById("itemName").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("dateBought").value = "";
    document.getElementById("supplier").value = "";
});

// Add event listeners to edit and delete buttons
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("edit-btn")) {
        // Handle edit button click
        var row = event.target.closest("tr");
        var itemName = row.querySelector("td:nth-child(1)").textContent;
        var quantity = row.querySelector("td:nth-child(2)").textContent;
        var dateBought = row.querySelector("td:nth-child(3)").textContent;
        var supplier = row.querySelector("td:nth-child(4)").textContent;

        // Update input values with the row data
        document.getElementById("itemName").value = itemName;
        document.getElementById("quantity").value = quantity;
        document.getElementById("dateBought").value = dateBought;
        document.getElementById("supplier").value = supplier;

        // Store the reference to the edited row
        var editedRow = row;
        var editBtn = row.querySelector(".edit-btn");

        // Update the table row with the edited data
        editBtn.addEventListener("click", function() {
            // Retrieve updated input values
            var updatedItemName = document.getElementById("itemName").value;
            var updatedQuantity = document.getElementById("quantity").value;
            var updatedDateBought = document.getElementById("dateBought").value;
            var updatedSupplier = document.getElementById("supplier").value;

            // Update the table row with the updated data
            editedRow.querySelector("td:nth-child(1)").textContent = updatedItemName;
            editedRow.querySelector("td:nth-child(2)").textContent = updatedQuantity;
            editedRow.querySelector("td:nth-child(3)").textContent = updatedDateBought;
            editedRow.querySelector("td:nth-child(4)").textContent = updatedSupplier;

             // Remove the edited item from the add item template
             document.getElementById("itemName").value = "";
             document.getElementById("quantity").value = "";
             document.getElementById("dateBought").value = "";
             document.getElementById("supplier").value = "";
        });
    } else if (event.target.classList.contains("delete-btn")) {
        // Handle delete button click
        var row = event.target.closest("tr");
        row.remove();
    }
});

// Add event listener to clear button
document.getElementById("clearBtn").addEventListener("click", function() {
    // Clear input fields
    document.getElementById("itemName").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("dateBought").value = "";
    document.getElementById("supplier").value = "";
});

