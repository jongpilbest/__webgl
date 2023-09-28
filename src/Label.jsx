

const Label= function({name}){


  return(
    <div 
    style={{
     position:'absolute',
     bottom:'3%',
     zIndex:2
    }}
    >
      <p className='S_p'> DALTILE tile</p>
      <p 
       style={{
         fontSize:'3vw'
       }}
      className='S_p'>{name}</p>
    </div>
    

  )
}

export default Label;
