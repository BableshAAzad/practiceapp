import React, { useMemo } from 'react';

let FilteredList = ({ list, filterText }) => {
    let filteredListItems = useMemo(() => {
        console.log('Filtering list...');
        return list.filter(item => item.toLowerCase().includes(filterText.toLowerCase()));
    }, [filterText]);
    // console.log("Child rendered")
    return (
        <>
            <p style={{ color: "blue" }}>Filtered List:</p>
            <ol type='1'>
                {filteredListItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ol>
        </>
    );
};
// export default React.memo(FilteredList);
export default FilteredList;