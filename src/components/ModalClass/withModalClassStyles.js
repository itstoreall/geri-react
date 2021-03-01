import useStyles from "./ModalClassStyles";

const withModalClassStyles = (Component) => (props) => {
  const s = useStyles();
  return <Component {...props} s={s} />;
};

export default withModalClassStyles;
