import React, {useState,useEffect} from "react";

function Penghitung() {
    const [count, setCount]= useState(0);
    const [name, setName]= useState("Hatory")

  // no dependencies =>  the side-effect runs after every rendering
    useEffect(function callback(){
        document.title = `You clicked ${count} times.`// eslint-disable-next-line
    }, [name]);
    // useEffect(function callback []);
    // useEffect(function callback [status]);
    return(
        <div>
            <h2>Komponen Perhitungan </h2>
            <h2>Nama Anda: {name}</h2>
            <button onClick={() => setName("Travia")}>Ganti Nama</button>

            <h2>Jumlah klik anda {count} kali.</h2>
            <button onClick={() => setCount(count +  1)}> Click</button>
        </div>
    );
}

export default Penghitung;