import './Filter.css'
import { useContext } from 'react';
import { FilterContext } from '../../context/FilterContext';
import { FilterCategory } from '../../samples/enum';


export const FilterButton = ({...props}) => {

    const { changeFilter } = useContext(FilterContext);

    const handleFilter = (filter: FilterCategory) => {
      changeFilter(filter);
    };


  return (
    <button className="button-filter"
    id= {props.id}
    onClick={()=> handleFilter(props.filter)}
    >
 {props.name}
    </button>
  )
}
