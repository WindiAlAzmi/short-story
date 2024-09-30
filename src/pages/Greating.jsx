import PropTypes from "prop-types";

const Greeting = ({ name, age }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
};

Greeting.propTypes = {
    name:PropTypes.string.isRequired,
    age:PropTypes.number
};



export default Greeting;
