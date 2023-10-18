import React from 'react'

function Header({number, data, newnumber, increment}) {
    console.log("rendered");
  return (
    <div>
      Header - {number}
      <p>{data}</p>
      <h2> New Number {newnumber} </h2>
     <div>
      <button onClick={ increment}>Increase</button>
     </div>
    </div>
    
  )
}

export default React.memo(Header)
