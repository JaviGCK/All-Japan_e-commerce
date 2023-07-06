import { useState } from 'react'
import { Button, Wrapp } from '../style';
import { useCartEffects } from '../../useeffects';
import { ProductProps } from '../../types';
/**
 * 
 * @param param0 addLS, counterValue, updateCounterValue, product 
 * @returns a counter and buttons to add product to the cart and LS
 */
export const CounterApp = ({ addLS, counterValue, updateCounterValue, product }: { addLS: (product: any, counterValue: number) => void; counterValue: number; updateCounterValue: (value: number) => void; product: any }) => {

    const initialValue = 0;
    const [counter, setCounter] = useState(initialValue);
    const [cartProducts, setCartProducts] = useState<ProductProps[]>([]);

    
    const increaseValue = () => {
        setCounter((prevState: number) => prevState + 1)
        updateCounterValue(counter + 1);
    }
    
    const decreaseValue = () => {
        setCounter((prevState: number) => prevState - 1)
        updateCounterValue(counter - 1);
    }
    
    const handleBtnBuy = (): void => {
        addLS(product, counterValue);
        updateCounterValue(counterValue);
        resetValue();
    };
    
    
    const resetValue = () => {
        setCounter(initialValue)
    }
    
    if (counter === -1) {
        resetValue()
    }
    useCartEffects(cartProducts, setCartProducts)
    
    const buttons = [
        { label: "AddCart", id: "add", action: handleBtnBuy, display: "add" },
        { label: "Increment", id: "increase", action: increaseValue, display: "+" },
        { label: "Decrement", id: "decrease", action: decreaseValue, display: "-" },
        { label: "ResetValue", id: "reset", action: resetValue, display: "C" },
    ];

    return (
        <>
            <Wrapp $counter>
                <Wrapp $counterNum>{counter}</Wrapp>
                {buttons.map((button) => (
                    <Button $counter key={button.id}
                        className={`btn-counter btn-counter__${button.label.toLowerCase()}`}
                        onClick={button.action}
                    >
                        {button.display}
                    </Button>
                )
                )}
            </Wrapp>
        </>
    )
}
