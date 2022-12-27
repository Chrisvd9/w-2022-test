import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CContainer,
  CHeader,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CBreadcrumb,
  CBreadcrumbItem,
  CButton,
  CHeaderBrand,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilBell, cilMenu, cilArrowLeft, cilSave } from "@coreui/icons";
import UserDropDown from "./UserDropDown";
import logo from "../assets/brand/witedlogo.png";

const Nav = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: "set", sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <img src={logo} height={48} alt="Logo" />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto ">
          <CNavItem className="mx-4">
            <CNavLink active href="#">
              Academia
            </CNavLink>
          </CNavItem>
          <CNavItem className="mx-4">
            <CNavLink href="#">CRM</CNavLink>
          </CNavItem>
          <CNavItem className="mx-4">
            <CNavLink href="#">Equipo</CNavLink>
          </CNavItem>
          <CNavItem className="mx-4">
            <CNavLink href="#">B2B</CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem>
          <CHeaderNav className="ms-3">
            <UserDropDown />
          </CHeaderNav>
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      <CContainer>
        <CBreadcrumb
          style={{ "--cui-breadcrumb-divider": "'>'" }}
          className="m-0"
        >
          <CNavLink href="#">
            <CIcon icon={cilArrowLeft} height={25} />
          </CNavLink>
          <CBreadcrumbItem className="ms-2">Home</CBreadcrumbItem>
          <CBreadcrumbItem>Editor de clases en vivo</CBreadcrumbItem>
          <CBreadcrumbItem active>Crear nueva clase</CBreadcrumbItem>
        </CBreadcrumb>
        <CBreadcrumbItem style={{ listStyle: "none" }}>
          <CButton color="primary">
            <CIcon className="me-2" icon={cilSave} />
            Guardar
          </CButton>
          <CButton className="ms-2" color="primary">
            ...
          </CButton>
        </CBreadcrumbItem>
      </CContainer>
    </CHeader>
  );
};

export default Nav;
