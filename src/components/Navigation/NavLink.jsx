import { PropTypes } from 'prop-types';
// import { createUseStyles } from 'react-jss';

// const useStyles = createUseStyles({
//   link: (isActive) => ({
//     backgroundColor: isActive ? 'teal' : 'inherit',
//     textDecoration: 'none',
//     padding: 10,
//     color: isActive ? '#f1f1f1' : 'teal',

//     '&:hover': {
//       color: '#fff',
//       backgroundColor: isActive ? 'teal' : 'tomato',
//     },
//   }),
// });

const NavLink = ({ path, label }) => {
  // const { pathname } = window.location;
  // const isActive = pathname === path;
  // const classes = useStyles(isActive);

  return <a href={path}>{label}</a>;
};

NavLink.propTypes = {
  path: PropTypes.string,
  label: PropTypes.string,
};

export default NavLink;
