import * as XLSX from "xlsx"
import { saveAs } from "file-saver";


const ExportToExcel = ({filename, data}) => {
   
    //convert json data to worksheet
    const worksheet = XLSX.utils.json_to_sheet(data)

    //create a new workbook and append worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    //write workbook to a buffer
    const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array"
    });
    //create blob and save the file

    const dataBlob = new Blob([excelBuffer], {
        type: "application/octet-stream"
    })

    // saveAs(dataBlob, filename + ".xlsx");

    if(data.length === 0) return null; 

    return ( <button onClick={()=> saveAs(dataBlob, filename + ".xlsx")} className="bg-blue-500 text-white px-3 py-1 text-sm rounded-lg"> Download {filename} </button> );
}
 
export default ExportToExcel;