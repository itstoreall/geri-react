import useStyles from "./ModalHookStyles";

const withModalHookStyles = (Component) => (props) => {
  const s = useStyles();
  return <Component {...props} s={s} />;
};

export default withModalHookStyles;
