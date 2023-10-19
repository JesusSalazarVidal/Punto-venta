import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import logo from "../img/logo.png";

function ReportePDF({ data }) {
  const generarPDF = () => {
    // Crear un nuevo objeto jsPDF
    const pdf = new jsPDF({
      orientation: "p",
      unit: "mm",
      format: "letter",
      putOnlyUsedFonts: true,
    });

    // Función para agregar números de página
    const agregarNumerosDePagina = () => {
      const totalPages = pdf.internal.getNumberOfPages();

      for (let i = 1; i <= totalPages; i++) {
        pdf.setPage(i);
        pdf.text(`Página ${i} de ${totalPages}`, pdf.internal.pageSize.getWidth() - 135, pdf.internal.pageSize.getHeight() - 10);
      }

    };

    let total = 0
    const totalE = data.map((item)=> (total += item.cantidad))
    const fechaHoraActual = new Date();

    // Obtener la fecha actual en formato de cadena (por ejemplo, "2023-10-06")
    const fechaActual = fechaHoraActual.toISOString().split('T')[0];
    
    // Obtener la hora actual en formato de cadena (por ejemplo, "15:30:00")
    const horaActual = fechaHoraActual.toLocaleTimeString();
    
    

    
    

    pdf.addImage(logo, "PNG", 10, 10, 40, 12); // Ajusta las coordenadas (10, 10) y las dimensiones (40, 40) según tus necesidades
    pdf.text("Paletería la Michoacana", 80, 15);
    pdf.text("Mi reporte PDF con tabla", 70, 22);
     pdf.setFontSize(10);
    pdf.text(`Fecha: ${fechaActual} Hora:${horaActual}`, 120, 30);
    pdf.text(`el total es ${total}`, 60, 30)

    pdf.setFontSize(12);
    function formatFecha(fechaString) {
      const options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      return new Date(fechaString).toLocaleString(undefined, options);
    }

    const dataForTable = data.map((item) => [
      item.cantidad,
      formatFecha(item.fecha),
      item.descripcion,
    ]);

    // Configurar las dimensiones de la tabla
    const margin = 15;
    const tableWidth = pdf.internal.pageSize.getWidth() - 2 * margin;
    const tableHeight = pdf.internal.pageSize.getHeight() - 2 * margin;
    const yStart = 40;

    // Dibujar la tabla

    autoTable(pdf, {
      startY: yStart,
      head: [["Cantidad", "Fecha", "Descripcion"]],
      body: dataForTable, // Excluir la fila de encabezado
      margin: { top: margin, bottom: margin },
    });

    // Guardar o mostrar el PDF (dependiendo de lo que quieras hacer)
    // pdf.save('reporte.pdf'); // Guardar el PDF en el sistema de archivos del usuario

     // Agregar números de página después de que se haya generado el contenido
     agregarNumerosDePagina();


    // Mostrar el PDF en una nueva ventana del navegador
    pdf.output("dataurlnewwindow");
  };

  
  return (
    <div>
      <button className="bg-emerald-400 rounded font-semibold hover:bg-pink-200" onClick={generarPDF}>Generar PDF</button>
    </div>
  );
}

export default ReportePDF;
