import React, { useEffect, useRef, useState } from 'react'

const Decimal = () => {
    const [val, setVal] = useState()
    //     var num = 10;

    // alert("Binary " + num.toString(2));   // 1010
    // alert("Octal " + num.toString(8));    // 12
    // alert("Hex " + num.toString(16));     // a

    // alert("Binary to Decimal " + parseInt("1010", 2));  // 10
    // alert("Octal to Decimal " + parseInt("12", 8));     // 10
    // alert("Hex to Decimal " + parseInt("a", 16));       // 10

    return (
        <section className='center col'>
            <label htmlFor="decimalnum">Enter Binary number:</label>
            <input type="number" id='decimalnum' value={val} onChange={(e) => setVal(e.target.value)} />

            <p><span>Ans: </span>{parseInt(val,2)}</p>
        </section>
    )
}

export default Decimal