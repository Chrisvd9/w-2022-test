import React from "react";
import {
  CCard,
  CCardBody,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
  CInputGroup,
  CButton,
  CFormSelect,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilPaperclip, cilPlus, cilTrash, cilX } from "@coreui/icons";
import CountryForm from "./CountryForm";
import DateForm from "./DateForm";
import AdjuntForm from "./AdjuntForm";

const Form = () => {
  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardBody>
              <CForm>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">
                    <strong>Nombre de la clase</strong>
                  </CFormLabel>
                  <CFormInput
                    type="text"
                    id="exampleFormControlInput1"
                    placeholder="Nombre"
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlTextarea1">
                    <strong>Descripción de la clase</strong>
                  </CFormLabel>
                  <CFormTextarea
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Descripción"
                  ></CFormTextarea>
                </div>
                <div className="mb-3">
                  <AdjuntForm />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput3">
                    <strong>Profesor</strong>
                  </CFormLabel>
                  <CFormSelect
                    aria-label="Default select example"
                    options={[
                      "Selecciona",
                      { label: "Peter Tabichi", value: "1" },
                      { label: "Albert Einstein", value: "2" },
                      { label: "LouAnne Johnson", value: "3" },
                    ]}
                  />
                  <div className="mt-2">
                    <CFormLabel htmlFor="exampleFormControlInput3">
                      <strong>Cuenta de zoom</strong>
                    </CFormLabel>
                    <CFormSelect
                      aria-label="Default select example"
                      options={[
                        "Selecciona",
                        { label: "Pro", value: "1" },
                        { label: "Educación", value: "2" },
                        { label: "Business/Enterprise", value: "3" },
                      ]}
                    />
                  </div>
                </div>
                <div className="mb-3 flex">
                  <DateForm />
                </div>
                <div className="mb-3">
                  <CFormLabel>
                    <strong>Cantidad de estudiantes máximo</strong>
                  </CFormLabel>
                  <CFormInput
                    type="text"
                    id="exampleFormControlInput4"
                    placeholder="Ejemplo: 30"
                  />
                </div>
                <div className="mb-3 flex">
                  <CountryForm />
                </div>
                <div className="mb-3 flex">
                  <CCard>
                    <CCardBody>
                      <CCol>
                        <strong>Cursos</strong>
                      </CCol>
                      <CCol className="mt-2">
                        <CButton color="primary" variant="outline">
                          Primero básico <CIcon icon={cilX} />
                        </CButton>
                        <CButton
                          className="ms-3"
                          color="primary"
                          variant="outline"
                        >
                          Segundo básico <CIcon icon={cilX} />
                        </CButton>
                        <CButton
                          className="ms-3"
                          color="primary"
                          variant="outline"
                        >
                          Lectura y escritura <CIcon icon={cilX} />
                        </CButton>
                        <CButton className="ms-3" color="primary">
                          <CIcon icon={cilPlus} /> Añadir cursos
                        </CButton>
                      </CCol>
                    </CCardBody>
                  </CCard>
                </div>
                <div className="mb-3 flex">
                  <CCard>
                    <CCardBody>
                      <CCol>
                        <strong>Asignatura</strong>
                      </CCol>
                      <CCol className="mt-2">
                        <CFormInput
                          type="text"
                          id="exampleFormControlInput7"
                          placeholder="Ejemplo: Matemáticas"
                        />
                      </CCol>
                    </CCardBody>
                  </CCard>
                </div>
                <div className="mb-3">
                  <strong style={{ fontSize: "0.9rem" }}>OA</strong>
                  <CCard>
                    <CCardBody>
                      <CInputGroup className="mt-3">
                        <CButton className="me-3" color="primary">
                          1BOA1 <CIcon icon={cilX} />
                        </CButton>
                        <CButton className="mx-3" color="primary">
                          2BOA3 <CIcon icon={cilX} />
                        </CButton>
                        <CButton className="mx-3" color="primary">
                          1BOA10 <CIcon icon={cilX} />
                        </CButton>
                        <CFormSelect
                          id="inputGroupSelect03"
                          aria-label="Example select with button addon"
                        >
                          <option></option>
                          <option value="1">1BOA1</option>
                          <option value="2">2BOA3</option>
                          <option value="3">1BOA10</option>
                        </CFormSelect>
                      </CInputGroup>
                    </CCardBody>
                  </CCard>
                </div>
                <div className="mb-3">
                  <strong>URL de Zoom</strong>
                  <CFormInput
                    type="text"
                    id="exampleFormControlInput7"
                    placeholder="Generado automáticamente"
                  />
                </div>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Form;
