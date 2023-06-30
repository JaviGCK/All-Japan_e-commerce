import { createContext, useState } from "react";
import { FilterCategory } from "../samples/enum"


export const FilterContext = createContext({
    filter: {} as FilterCategory,
    changeFilter: (filter: FilterCategory) => {}
})

export function FilterProvider(props:any) {
    const [filter, setFilter] = useState<FilterCategory>(FilterCategory.ALL);

    const changeFilter = (newFilter: FilterCategory) => {
        setFilter(newFilter);
    }
    return (
        <FilterContext.Provider value={{
            filter,
            changeFilter
        }}>
            {props.children}
        </FilterContext.Provider>

    )
}