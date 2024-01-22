import React, {useState } from "react";
// import React, {useMemo} from "react";
import FilteredList from "./FilteredList";

function FilteredListMain() {
    // let [count, setCount] = useState(0);
    let [inputText, setInputText] = useState('');
    // let updateCount = () => {
    //     setCount(count + 1)
    //     console.log("Count updated")
    // }
    // let minusFiveValue = useMemo(() => {
    //     console.log('Minus Five Value')
    //     return 100 - count;
    // }, [count])
    let itemList = ['Apple', 'Banana', 'Orange', 'Grapes', 'Watermelon'];
    return (
        <>
            {/* <h3 style={{ display: "inline-block" }}>Count : {count} &nbsp;</h3>
            <button onClick={updateCount}>Update</button><br /><br />
            <span>Minus One : </span>{minusFiveValue}<br /><br /> */}
            <label htmlFor="inSec">Filter Text: </label>
            <input type="text" id="inSec" value={inputText} onChange={(e) => setInputText(e.target.value)} />
            <FilteredList list={itemList} filterText={inputText} />
        </>
    );
};

export default FilteredListMain;