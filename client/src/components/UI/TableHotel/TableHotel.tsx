import React from 'react';
/// no styles yet

interface TableHotel {
    /// props
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
        <div>
            <table
                cellSpacing="0"
                cellPadding="0"
                border={0}
            >
                <tr>
                    <td>
                        {forTable.map((tableOff) => {
                            const { Size, Capacity, Bed, Services} = tableOff
                                return (
                                    <table
                                        cellSpacing="3"
                                        border={0}
                                    >
                                        {/*/// Hyeta*/}
                                        <tr>
                                            <th> { Size } </th>
                                        </tr>
                                        <tr>
                                            <th> { Services.join(", ") } </th>
                                        </tr>
                                        {/*/// Hyeta*/}
                                    </table>
                                )
                        })}
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default TableHotel;