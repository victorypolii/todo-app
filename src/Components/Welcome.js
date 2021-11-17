import PropTypes from "prop-types";

//FORarrowfunction
// const Welcome = ({name, prodi, gender}) => {
//     return(
//       <h1>Hi {name} from {prodi} major. This is ReactJS. Gender: {gender}</h1>
//     );
//   }

function Welcome(props) {
    return (
        <h1>Welcome Hatory Polii {props.name}</h1>
    )
}

Welcome.defaultProps = {
    gender: 'Male'
  };
  
Welcome.propTypes = {
    name: PropTypes.string,
    gender: PropTypes.string,
  };

export default Welcome;