import Counter from "./Counter";



function CounterGroup (props){

    function generateCounterList(){
        return new Array(5).fill(Date.now())
    }

    const counterList = generateCounterList();
    return(
        <div>
        {counterList.map((item, index) => 
        (
            <Counter key={item + index}></Counter>
        ))}
        </div>
    );

}

export default CounterGroup;