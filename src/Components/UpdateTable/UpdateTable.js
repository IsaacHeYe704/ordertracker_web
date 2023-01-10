import React from 'react'
import UpdateTableStyle from './UpdateTable.module.css'
const UpdateTable = (props) => {
    return (
        <div className={UpdateTableStyle.container}>
            <h3 className={UpdateTableStyle.h3}>Updates</h3>
            <table className={UpdateTableStyle.updateTable}>
                <tr>
                    <td className={UpdateTableStyle.subtitle}>Exact status:</td>
                    <td className={UpdateTableStyle.data}>{props.status}</td>
                </tr>
                <tr>
                    <td className={UpdateTableStyle.subtitle}>Country arraival date:</td>
                    <td className={UpdateTableStyle.data}>{props.coutryArraival}</td>
                </tr>
                <tr>
                    <td className={UpdateTableStyle.subtitle}>Estimately delivery date:</td>
                    <td className={UpdateTableStyle.data}>{props.estimatelyDate}</td>
                </tr>
            </table>
        </div>
    )
}

export default UpdateTable
