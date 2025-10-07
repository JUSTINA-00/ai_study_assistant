import React, { useState } from "react";
import jsPDF from "jspdf";

export default function ImageToPdf() {
  const [images, setImages] = useState([]);

  const handleFiles = (e) => {
    setImages(Array.from(e.target.files));
  };

  const generatePdf = () => {
    const doc = new jsPDF();
    images.forEach((img, i) => {
      const reader = new FileReader();
      reader.onload = function(event) {
        const imgData = event.target.result;
        if(i > 0) doc.addPage();
        doc.addImage(imgData, "JPEG", 10, 10, 180, 160);
        if(i === images.length - 1) doc.save("scanned.pdf");
      };
      reader.readAsDataURL(img);
    });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Image to PDF</h2>
      <input type="file" multiple accept="image/*" onChange={handleFiles} />
      <button onClick={generatePdf} className="bg-indigo-600 text-white p-1 rounded mt-2">
        Generate PDF
      </button>
    </div>
  );
}

