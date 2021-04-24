import React from 'react';
import styles from'./styles.module.scss';
                     
// function Container({children,name}) { return ( <div className={styles.divStyle} id={name}>{children}</div>   ); }
 
function Container({children}) {
  return (
  <div className={styles.divStyle}>{children}</div> 
  );
}

export default Container;