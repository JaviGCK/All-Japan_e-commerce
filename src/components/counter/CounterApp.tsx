import { useState } from 'react'



export const CounterApp = () => {



    const initialValue = 0;
    const [counter, setCounter] = useState(initialValue);

    const increaseValue = () => {
        setCounter((prevState: number) => prevState + 1)
    }

    const decreaseValue = () => {
        setCounter((prevState: number) => prevState - 1)
        
    }

    const resetValue = () => {
        setCounter(initialValue)
    }
    

    const handleBtnBuy = (): void => {
        
		if (counter === 0) return;
        
		resetValue();
        
	}

    if(counter === -1) {
        resetValue()
     }

    const buttons = [
        { label: "AddCart", id: "add", action:handleBtnBuy, display: "add to cart" },
        { label: "Increment", id: "increase", action: increaseValue, display: "+" },
        { label: "Decrement", id: "decrease", action: decreaseValue, display: "-" },
        { label: "ResetValue", id: "reset", action: resetValue, display: "C" },
    ];

    


    return (
        <>
        <div>{counter}</div>
            {buttons.map((button) => (

                <button key={button.id}
                    className={`btn-counter btn-counter__${button.label.toLowerCase()}`}
                    onClick={button.action}
                >
                    {button.display}
                </button>
            )
            )}
        </>
    )
}
