import React, { useContext } from 'react';
import userContext from '../../userContext';
import themeContext from '../../themeContext';

const About = () => {
  const { user, addOneYear } = useContext(userContext);
  const contextStyles = useContext(themeContext);

  console.log(contextStyles);

  return (
    <>
      <p>User first name: {user.firstName}</p>
      <p>User lastname: {user.lastName}</p>
      <p>User age: {user.age}</p>

      <button onClick={addOneYear}>Add one year</button>
    </>
  );
};

export default About;
