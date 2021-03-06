import { createUseStyles } from "react-jss";

export default createUseStyles({
  modalHook__backdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  modalHook__content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    padding: 12,
    minHeight: 300,
    minWidth: 600,
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    borderRadius: 3,
    boxShadow:
      "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
  },

  modalHookBtn: {
    padding: {
      top: 10,
      left: 20,
      right: 20,
      bottom: 10,
    },
    margin: 30,
    fontSize: 16,
    textTransform: "uppercase",
    cursor: "pointer",
    color: "white",
    backgroundColor: "teal",
    border: "none",
    borderRadius: 4,
    outline: "none",

    "&:hover": {
      backgroundColor: "tomato",
    },
  },
});
