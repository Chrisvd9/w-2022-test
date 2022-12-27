import React from "react";
import { CFormInput, CFormLabel, CInputGroup, CButton } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilPaperclip, cilTrash } from "@coreui/icons";

const AdjuntForm = () => {
  return (
    <>
      <strong>Adjuntar material descargable</strong>
      <div className="mt-3">
        <CFormLabel htmlFor="exampleFormControlInput1">
          <strong style={{ fontSize: "0.9rem" }}>Nombre del archivo</strong>
        </CFormLabel>
        <CInputGroup>
          <CFormInput
            type="text"
            id="exampleFormControlInput1"
            placeholder="Las vocales - Escribir la letra a"
          />
          <CFormInput
            className="ms-2"
            type="text"
            id="exampleFormControlInput1"
            placeholder="⭳ 1B-526995.pdf"
          ></CFormInput>
          <CButton color="danger">
            <CIcon icon={cilTrash} />
          </CButton>
        </CInputGroup>
        <CFormLabel className="mt-2" htmlFor="exampleFormControlInput1">
          <strong style={{ fontSize: "0.9rem" }}>Nombre del archivo</strong>
        </CFormLabel>
        <CInputGroup>
          <CFormInput
            type="text"
            id="exampleFormControlInput1"
            placeholder="Las vocales - Escribir la letra a"
          />
          <CFormInput
            className="ms-2"
            type="text"
            id="exampleFormControlInput1"
            placeholder="⭳ 1B-526996.pdf"
          ></CFormInput>
          <CButton color="danger">
            <CIcon icon={cilTrash} />
          </CButton>
        </CInputGroup>
      </div>
      <CInputGroup className="mt-3">
        <CFormInput type="file" id="inputGroupFile01" />
        <CButton component="label" htmlFor="inputGroupFile01">
          <CIcon className="me-2" icon={cilPaperclip} />
          Adjuntar archivo
        </CButton>
      </CInputGroup>
    </>
  );
};

export default AdjuntForm;
