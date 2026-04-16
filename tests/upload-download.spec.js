const ExcelJS = require('exceljs');
const { test, expect } = require('@playwright/test');

// ✅ Function to read + update Excel
async function writeExcelTest(searchText, replaceText, change, filepath) {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filepath);

    const worksheet = workbook.getWorksheet('Sheet1');

    const output = await readExcel(worksheet, searchText);

    const cell = worksheet.getCell(
        output.row,
        output.column + change.colChange
    );

    cell.value = replaceText;

    await workbook.xlsx.writeFile(filepath);
}

// ✅ Function to find cell position
async function readExcel(worksheet, searchText) {
    let output = { row: -1, column: -1 };

    worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {
            if (cell.value === searchText) {
                output.row = rowNumber;
                output.column = colNumber;
            }
        });
    });

    return output;
}

// ✅ Playwright Test
test('Upload download excel validation', async ({ page }) => {

    const textSearch = 'Mango';
    const updateValue = '350';

    await page('https://rahulshettyacademy.com/upload-download-test/index.html');

    // ✅ Handle download properly
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Download' }).click();
    const download = await downloadPromise;

    const filePath = '/Users/JK/Downloads/download.xlsx';
    await download.saveAs(filePath);

    // ✅ Update Excel file
    await writeExcelTest(
        textSearch,
        updateValue,
        { rowChange: 0, colChange: 2 },
        filePath
    );

    // ✅ Upload file back
    await page.locator('#fileinput').setInputFiles(filePath);

    // ✅ Validate updated value in UI
    const desiredRow = page.getByRole('row').filter({
        has: page.getByText(textSearch)
    });

    await expect(desiredRow.locator('#cell-4-undefined'))
        .toContainText(updateValue);
});