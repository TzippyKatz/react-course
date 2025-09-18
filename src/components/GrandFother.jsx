import '../css/Ex.css';

import { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

function Grandfother() {
    const [val, setVal] = useState(0);

    return (
        <div className="grandfother">
            <h1>Grandfother</h1>
            <div className="children-container">
                <ChildA value={val} />
                <ChildB value={val} setValue={setVal} />
            </div>
        </div>
    )
}

export default Grandfother;