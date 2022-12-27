import React from "react";
import CIcon from "@coreui/icons-react";
import { CNavItem } from "@coreui/react";
import {
  cilCog,
  cilExcerpt,
  cilCheckAlt,
  cilBook,
  cilSpeech,
  cilVideo,
  cilTv,
  cilContact,
  cilPaperPlane,
  cilFlightTakeoff,
  cilWarning,
  cilStar,
  cilEnvelopeClosed,
} from "@coreui/icons";

const SideBarNav = () => {
  return (
    <>
      <CNavItem href="#">
        <CIcon customClassName="nav-icon" icon={cilCog} />
        Editor de Indicadores
      </CNavItem>
      <CNavItem href="#">
        <CIcon customClassName="nav-icon" icon={cilExcerpt} />
        Editor de contenidos
      </CNavItem>
      <CNavItem href="#">
        <CIcon customClassName="nav-icon" icon={cilCheckAlt} />
        Editor de evaluaciones
      </CNavItem>
      <CNavItem href="#">
        <CIcon customClassName="nav-icon" icon={cilBook} />
        Visualizar contenidos
      </CNavItem>
      <CNavItem href="#">
        <CIcon customClassName="nav-icon" icon={cilSpeech} />
        Profesor online
      </CNavItem>
      <CNavItem href="#">
        <CIcon customClassName="nav-icon" icon={cilVideo} />
        Editor de clases en vivo
      </CNavItem>
      <CNavItem href="#">
        <CIcon customClassName="nav-icon" icon={cilTv} />
        Mis clases en vivo
      </CNavItem>
      <CNavItem href="#">
        <CIcon customClassName="nav-icon" icon={cilContact} />
        Mis clases particulares
      </CNavItem>
      <CNavItem href="#">
        <CIcon customClassName="nav-icon" icon={cilPaperPlane} />
        PaperPlane
      </CNavItem>
      <CNavItem href="#">
        <CIcon customClassName="nav-icon" icon={cilFlightTakeoff} />
        Desafíos
      </CNavItem>
      <CNavItem href="#">
        <CIcon customClassName="nav-icon" icon={cilWarning} />
        Reportes
      </CNavItem>
      <CNavItem href="#">
        <CIcon customClassName="nav-icon" icon={cilStar} />
        Calificaciones
      </CNavItem>
      <CNavItem href="#">
        <CIcon customClassName="nav-icon" icon={cilEnvelopeClosed} />
        Comunicados
      </CNavItem>
    </>
  );
};

export default SideBarNav;
