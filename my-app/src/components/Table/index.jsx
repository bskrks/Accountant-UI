import React, { useState, useEffect } from 'react';
import styles from'./styles.module.scss';
import { FaCheck} from 'react-icons/fa'; 
import { GoX } from "react-icons/go";

function Table({head,tableData}){  
    
// useEffect component'in render olduğu an veya bir state'e bağlı olduğu anda kullanılır. Tabloya sorgu atmak amacıyla kullanacağız;

return (
    <div className={styles.tableDiv}>
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
                    tableData.length>0 && (
                        tableData.map((item) => (
                            <tr className={styles.trStyle}>
                                <td className={styles.tdStyle}>{item.first}</td>
                                <td className={styles.tdStyle}>{item.second}</td>
                                <td className={styles.tdStyle}>{item.third}</td>
                                {item.fourth != null && <td className={styles.tdStyle}>{item.fourth ? <FaCheck color="#cc3300"/>:<GoX fontSize="1.3em"/>}</td>}
                            </tr> 
                        ))
                    )  
                }
            </tbody>
        </table>
    </div>
    );
}
  export default Table;