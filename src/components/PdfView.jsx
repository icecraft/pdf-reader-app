import React, { useReducer, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import './PdfView.css';

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
  standardFontDataUrl: 'standard_fonts/',
};


export default function PdfView() {
  const pdfView = useSelector(state => state.pdfViewState);

  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <div className="Example">
      <header>
        <h1>react-pdf sample page</h1>
        <button
        className="btn btn-outline-secondary"
        onClick={() => { console.log("state", pdfView);} }
      >
        Decrease Counter
      </button>
      </header>
      <div className="container">
        
        <div className="container__document">
          <Document file={pdfView.pdf_file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
}