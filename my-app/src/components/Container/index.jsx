import React from 'react';
import styles from'./styles.module.scss';
                     

function Container({children}) {                     // süslü parantez burada; children, props'un bir elemanı anlamı katar
  return (
  <div className={styles.divStyle}>{children}</div> 
  );
}

export default Container;