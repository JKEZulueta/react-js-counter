import Counter from "./Counter";



function CounterGroup (){

    function generateCounterList(){
        return new Array(5).fill(Date.now())
    }

    const counterList = generateCounterList();
    return(
        <div>
        {counterList.map(() => 
        (
            <Counter></Counter>
        ))}
        </div>
    );

}

export default CounterGroup;