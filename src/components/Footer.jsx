import React from "react";
import { CFooter } from "@coreui/react";

const Footer = () => {
  return (
    <CFooter>
      <div>
        <a
          href="https://www.wited.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wited
        </a>
        <span className="ms-1">&copy; 2022 Test.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a
          href="https://github.com/Chrisvd9"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chrisvd9
        </a>
      </div>
    </CFooter>
  );
};

export default React.memo(Footer);
