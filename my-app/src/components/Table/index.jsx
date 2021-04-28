import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from'./styles.module.scss';

function Table(){

    const [datas,setDatas] =useState([])

    // useEffect component'in render olduğu an veya bir staste'e bağlı olduğu anda kullanılır. Tabloya sorgu atmak amacıyla kullanacağız;

    useEffect(() => {
        axios.get('http://localhost:8010/bills')   // get methoduyla tüm tablo alınmış olur
    .then(function (response) {
        // handle success
        console.log(response);
        if(response.data.length > 0){
            setDatas(response.data);
            
            if(!response.status==200)
            {
                alert("Failed !!");
            }
        }
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });
    }, []);


return (
    <>
        <table className={styles.tableStyle}>
            <thead className={styles.theadStyle}>
                <tr className={styles.trStyle}>
                    <th className={styles.thStyle}>Full Name</th>
                    <th className={styles.thStyle}>E-Mail</th>
                    <th className={styles.thStyle}>Bill No</th>
                    <th className={styles.thStyle}>Product Name</th>
                    <th className={styles.thStyle}>Amount</th>
                    <th className={styles.thStyle}>Confirmed</th>
                </tr>
            </thead>
            <tbody className={styles.tbodyStyle}>
                {
                    datas.length>0 && (
                        datas.map((item) => (
                            <tr className={styles.trStyle}>
                                <td className={styles.tdStyle}>{`${item.firstName} ${item.lastName}`}</td>
                                <td className={styles.tdStyle}>{item.email}</td>
                                <td className={styles.tdStyle}>{item.billNo}</td>
                                <td className={styles.tdStyle}>{item.productName}</td>
                                <td className={styles.tdStyle}>{item.amount}</td>
                                <td className={styles.tdStyle}>{item.confirmed}</td>
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