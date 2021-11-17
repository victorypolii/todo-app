import { useState } from "react";
import Button from './Button';

function ExampleStateHook({startValue, namaUser}){
    const[count, setCount]=useState(startValue);
    const [fullName, setFullName] = useState(namaUser);

    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
      }

    // const handlePlusChange = () => {
    //     setCount(count +1)
    // }

    // const handleMinusChange = () => {
    //     setCount(count -1)
    // }

    return(
        <div>
            <p>You clicked {count} times</p>

            <Button title ="Click to +1" count={count} setCount={setCount} operation="+"/>
            {/* <button onClick={() => setCount(count + 1)}>
            Click to +1
            </button> */}

            &nbsp;

            <Button title="Click to -1" count={count} setCount={setCount} operation="-" />
            {/* <button onClick={() => setCount(count - 1 )}>
                Click to -1
            </button>
            <button onClick></button> */}
            <hr/>
               <input type="text" name="fullName" onChange={handleFullNameChange} />
             <h4>Your name is: {fullName}</h4>
         </div>
    );
}
export default ExampleStateHook;