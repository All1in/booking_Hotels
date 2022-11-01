import React from 'react';
/// no styles yet

interface TableHotel {
    // props
}

/// Interfaces
interface OnlyInterfaceNeeded {
    Size: number
    Capacity: string
    Bed: string
    Services: string[]
}

const forTable: OnlyInterfaceNeeded[] = [
    {
        Size: 30,
        Capacity: "Max persion 5",
        Bed: "King Beds",
        Services: 	["Wifi", "Television", "Bathroom"]
    },
]
///

const TableHotel = ({}) => {
    return (
        <div
            style={{ marginBottom: "20px" }}
        >
            <table
                cellSpacing="0"
                cellPadding="0"
                border={0}
            >
                        {forTable.map((tableOff) => {
                            const { Size, Capacity, Bed, Services} = tableOff
                                return (
                                    <table
                                        // key={}
                                        cellSpacing="3"
                                        border={0}
                                    >
                                        <tbody>
                                            {/*/// Hyeta*/}
                                            <tr>
                                                {/*<td> { Object.keys(tableOff) } </td>*/}
                                                {/*<td> { Object.values(tableOff) } </td>*/}
                                                <td> Size: </td>
                                                <td> { Size }</td>
                                            </tr>
                                            <tr>
                                                <td> Capacity: </td>
                                                <td> { Capacity }</td>
                                            </tr>
                                            <tr>
                                                <td> Bed: </td>
                                                <td> { Bed }</td>
                                            </tr>
                                            <tr>
                                                <td> Services: </td>
                                                <td> { Services.join(", ") }</td>
                                            </tr>
                                            {/*/// Hyeta*/}
                                        </tbody>
                                    </table>
                                )
                        })}
            </table>
        </div>
    );
};

export default TableHotel;