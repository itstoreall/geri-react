const withHOC = (Component) => (props) => {
  return <Component {...props} extraParam={5} />;
};

export default withHOC;
