const express = require('express');
const xlsx = require('xlsx');
const app = express();
const PORT = 3000;

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint to handle form data
app.post('/submit', (req, res) => {
    const { fullName, email, phone, experience, certification, message } = req.body;

    // Load existing data from the Excel file (if it exists)
    let workbook;
    try {
        workbook = xlsx.readFile('./forms/form-data/consultant_data.xlsx');
    } catch (error) {

        
        // If the file doesn't exist, create a new workbook
        workbook = xlsx.utils.book_new();
    }

    // Add new form data to the worksheet
    const worksheet = xlsx.utils.json_to_sheet([{ fullName, email, phone, experience, certification, message }]);
    xlsx.utils.book_append_sheet(workbook, worksheet, './forms/form-data/Consultant Data');

    // Write the updated workbook to the Excel file
    xlsx.writeFile(workbook, './forms/form-data/consultant_data.xlsx');

    res.send('Thank you for submitting the form. We will get back to you soon.');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
