import { createUseStyles } from "react-jss";

export default createUseStyles({
  modalClass__backdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  modalClass__content: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: 12,
    minHeight: 300,
    minWidth: 600,
    width: "100%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    borderRadius: 3,
    boxShadow:
      "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
  },
});
