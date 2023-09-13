export function formatDateToDDMMYY(inputDate) {
    const date = new Date(inputDate);
  
    // Get day, month, and year components
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Note: Month is zero-based, so we add 1
    const year = String(date.getFullYear()).slice(-2); // Get the last two digits of the year
  
    // Create the formatted date string in "dd/mm/yy" format
    const formattedDate = `${day}/${month}/${year}`;
  
    return formattedDate;
}
