import React from 'react';
import styles from'./styles.module.scss';
                     
/* 
  function Container({children,name}) { 
  return ( <div className={styles.divStyle} id={name}>{children}</div>   
    ); 
}  */
 
/*
function Container(props) {                        --- bu component'i çağırdığımız yerde component'in tagları içersinde bir şey yazarsak bu onun çocuğu anlamına gelir.
  return (
  <div className={styles.divStyle}>{props.children}</div>       --- bu fonksiyona düşen her şey props ile alınır.
  );                                                            --- props'un children adlı özelliği var
}
*/

/* 
  function Container({children, buse}) {                             // props'un ismi buse
  return (
  <div className={styles.divStyle} id={buse}>{children}</div>       //
  );
}
*/

function Container({children}) {                             // --- süslü parantez burada; children, props'un bir elemanı anlamı katar
  return (
  <div className={styles.divStyle}>{children}</div> 
  );
}

export default Container;