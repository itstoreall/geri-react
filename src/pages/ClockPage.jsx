import Clock from '../components/Clock';

const ClockPage = () => {
  return (
    <>
      <h1>Clock</h1>
      <Clock />

      <ul>
        <li>use the useState()</li>
        <li>use the useEffect()</li>
        <li>use the useRef()</li>
      </ul>
    </>
  );
};

export default ClockPage;
