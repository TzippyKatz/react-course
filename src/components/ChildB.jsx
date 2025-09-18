import '../css/Ex.css';

function ChildB({ value, setValue }) {
    return (
        <div className="child">
            <h3>Child B</h3>
            <button onClick={() => setValue(value + 1)}>Increase</button>
        </div >
    )
}

export default ChildB;