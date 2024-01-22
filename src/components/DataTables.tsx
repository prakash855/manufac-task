import React from "react";

interface DataTableProps {
    title: string;
    classes: string[];
    data: number[][];
    calculateMean: (item: number[]) => string;
    calculateMedian: (item: number[]) => string;
    calculateMode: (item: number[]) => string;
}

const DataTables: React.FC<DataTableProps> = ({
    title,
    classes,
    data,
    calculateMean,
    calculateMedian,
    calculateMode,
}) => {
    return (
        <div className="data">
            <table>
                <thead>
                    <tr>
                        <th>Measures</th>
                        {classes.map((item) => (
                            <th key={item}>Class {item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{title} Mean</th>
                        {data.map((item, index) => (
                            <td key={index}>{calculateMean(item)}</td>
                        ))}
                    </tr>
                    <tr>
                        <th>{title} Median</th>
                        {data.map((item, index) => (
                            <td key={index}>{calculateMedian(item)}</td>
                        ))}
                    </tr>
                    <tr>
                        <th>{title} Mode</th>
                        {data.map((item, index) => (
                            <td key={index}>{calculateMode(item)}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default DataTables;
