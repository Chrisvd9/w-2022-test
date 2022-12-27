import React from "react";
import {
  CCol,
  CFormInput,
  CFormLabel,
  CRow,
  CInputGroup,
  CFormSelect,
} from "@coreui/react";

const DateForm = () => {
  return (
    <CInputGroup>
      <CRow className="g-3">
        <CCol xs>
          <CFormLabel>
            <strong>Fecha</strong>
          </CFormLabel>
          <CFormInput type="date" />
        </CCol>
        <CCol xs>
          <CFormLabel>
            <strong>Hora</strong>
          </CFormLabel>
          <input
            className="timepicker"
            type="time"
            id="appt"
            name="appt"
            min="06:00"
            max="00:00"
            required
          />
        </CCol>
        <CCol xs>
          <CFormLabel>
            <strong>AM o PM</strong>
          </CFormLabel>
          <CFormSelect
            aria-label="Default select example"
            options={[
              { label: "AM", value: "1" },
              { label: "PM", value: "2" },
            ]}
          />
        </CCol>
      </CRow>
    </CInputGroup>
  );
};

export default DateForm;
