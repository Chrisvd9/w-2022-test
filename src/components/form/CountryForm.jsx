import React from "react";
import { CCard, CCardBody, CCol, CFormCheck } from "@coreui/react";

const CountryForm = () => {
  return (
    <>
      <strong>País</strong>
      <CCard>
        <CCardBody>
          <CCol>
            <CFormCheck
              inline
              id="flexCheckChecked"
              label="Todos"
              defaultChecked
            />
            <CFormCheck
              className="mx-4"
              inline
              id="flexCheckDefault"
              label="Chile"
            />
            <CFormCheck
              className="mx-4"
              inline
              id="flexCheckDefault"
              label="México"
            />
            <CFormCheck
              className="mx-4"
              inline
              id="flexCheckDefault"
              label="Colombia"
            />
            <CFormCheck
              className="mx-4"
              inline
              id="flexCheckDefault"
              label="Venezuela"
            />
            <CFormCheck
              className="mx-4"
              inline
              id="flexCheckDefault"
              label="Argentina"
            />
            <CFormCheck
              className="mx-4"
              inline
              id="flexCheckDefault"
              label="Perú"
            />
            <CFormCheck
              className="mx-4"
              inline
              id="flexCheckDefault"
              label="Uruguay"
            />
          </CCol>
        </CCardBody>
      </CCard>
    </>
  );
};

export default CountryForm;
