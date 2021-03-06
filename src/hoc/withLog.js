import { useEffect } from 'react';

const withLog = (WrappedComponent) => (props) => {
  //componentDidMount
  useEffect(() => {
    console.group(`WithLog ouput @${WrappedComponent.name}`);
    console.log(props);
    console.groupEnd();
  }, [props]);

  return <WrappedComponent {...props} />;
};

export default withLog;
