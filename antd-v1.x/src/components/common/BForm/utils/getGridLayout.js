import gridLayout from '../gridLayout/';

export default function getGridLayout(col, colSpan) {
    if (col < 1 || col > 5) {
        console.log('getGridLayout col only 1 to 4');
        return {};
    }
    const newCols = gridLayout[`col_${col}`];
    const newColProps = newCols[`colSpan_${colSpan}`] || newCols.normal;

    return newColProps;
}