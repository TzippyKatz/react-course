import GrandSon from "./GrandSon";
import '../css/Ex.css';

function ChildA({ value }) {
    return (
        <div className="child-container">
            <h3>Child A</h3>
            <GrandSon value={value} />
        </div>
    )
}

export default ChildA;