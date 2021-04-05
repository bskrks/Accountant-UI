import React from 'react';
import styles from'./styles.module.scss';

function Table() {
return (
    <>

        <table className={styles.tableStyle}>
            <tr className={styles.firstRow}>
                <th className={styles.thStyle}>Full Name</th>
                <th className={styles.thStyle}>E-Mail</th>
                <th className={styles.thStyle}>Bill No</th>
                <th className={styles.thStyle}>Product Name</th>
                <th className={styles.thStyle}>Amount</th>
            </tr>
            <tr className={styles.trStyle}>
                <td className={styles.tdStyle}>Buse Karakaş</td>
                <td className={styles.tdStyle}>buse@karakas.com</td>
                <td className={styles.tdStyle}>TR003</td>
                <td className={styles.tdStyle}>Telephone</td>
                <td className={styles.tdStyle}>70</td>
            </tr>
            <tr className={styles.trStyle}>
                <td className={styles.tdStyle}>Buse Karakaş</td>
                <td className={styles.tdStyle}>buse@karakas.com</td>
                <td className={styles.tdStyle}>TR003</td>
                <td className={styles.tdStyle}>Telephone</td>
                <td className={styles.tdStyle}>70</td>
            </tr>
            <tr className={styles.trStyle}>
                <td className={styles.tdStyle}>Buse Karakaş</td>
                <td className={styles.tdStyle}>buse@karakas.com</td>
                <td className={styles.tdStyle}>TR003</td>
                <td className={styles.tdStyle}>Telephone</td>
                <td className={styles.tdStyle}>70</td>
            </tr>
            <tr className={styles.trStyle}>
                <td className={styles.tdStyle}>Buse Karakaş</td>
                <td className={styles.tdStyle}>buse@karakas.com</td>
                <td className={styles.tdStyle}>TR003</td>
                <td className={styles.tdStyle}>Telephone</td>
                <td className={styles.tdStyle}>70</td>
            </tr>
            <tr className={styles.trStyle}>
                <td className={styles.tdStyle}>Buse Karakaş</td>
                <td className={styles.tdStyle}>buse@karakas.com</td>
                <td className={styles.tdStyle}>TR003</td>
                <td className={styles.tdStyle}>Telephone</td>
                <td className={styles.tdStyle}>70</td>
            </tr>
        </table>

    </>
    );
}
    export default Table;