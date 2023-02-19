import React, { useReducer, useState } from 'react';
import { useSelector} from "react-redux";

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

  const [file, setFile] = useState(null);

  const [numPages, setNumPages] = useState(null);

  const scale = 1.7 ;
  const width = 700;

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  function onFileChange(event) {
    setFile(event.target.files[0]);
  }


  return (
    <div className="Example">
      <div className="container">
        {/*
        <div className="container__load">
          <label htmlFor="file">Load from file:</label>{' '}
          <input onChange={onFileChange} type="file" />
        </div>
        */}

        <div className="container__document">
          <Document file={pdfView.pdf_file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={scale} width={width} />
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
}