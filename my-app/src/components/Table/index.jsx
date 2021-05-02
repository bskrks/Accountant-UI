import React, { useState, useEffect } from 'react';
import styles from'./styles.module.scss';

function Table({data,head}){  
    
// useEffect component'in render olduğu an veya bir state'e bağlı olduğu anda kullanılır. Tabloya sorgu atmak amacıyla kullanacağız;

return (
    <>
        <table className={styles.tableStyle}>
            <thead className={styles.theadStyle}>
                {
                    head.length>0 && (
                            <tr className={styles.trStyle}>
                                {head.map((headItem) => (
                                <th className={styles.thStyle}>{headItem}</th>
                            ))}
                            </tr>
                    )
                }
            </thead>
            <tbody className={styles.tbodyStyle}>
                {
                    
                    data.length>0 && (
                        data.map((item) => (
                            <tr className={styles.trStyle}>

                                <td className={styles.tdStyle}>{item.firstName}</td>
                                <td className={styles.tdStyle}>{item.lastName}</td>
                                <td className={styles.tdStyle}>{item.email}</td>
                                {item.confirmed !== null && <td className={styles.tdStyle}>{item.confirmed ? "true":"false"}</td>}
                            </tr> 
                        ))
                    )  
                }
            </tbody>
        </table>
    </>
    );
}
  export default Table;