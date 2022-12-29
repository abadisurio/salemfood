import React from 'react'
import TableItem from './TableItem'

const Table = ({ tableName = 'A Table', data = [], type }) => {
    return (
        <div>
            <div>{tableName}</div>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th>
                            <input type={'checkbox'} />
                        </th>
                        {Object.keys(type.properties).map(key => {
                            // console.log(key)
                            return (
                                <th key={key}>{key}</th>
                            )
                        })}
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <TableItem key={index} {...{ item, index, type }} />
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default Table