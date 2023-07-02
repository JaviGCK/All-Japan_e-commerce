import './Filter.css'
import { useContext } from 'react';
import { FilterCategory } from '../../samples/enum';
import { FilterContext } from '../../context/index';
import { FilterButtonProps } from '../../types/filter';

/**
 * 
 * @param {FilterButtonProps} param0 - Props from component.
 * @returns button to filter from name category
 */

export const FilterButton = ({ name, filter, id }: FilterButtonProps) => {

  const { changeFilter } = useContext(FilterContext);

  const handleFilter = (filter: FilterCategory) => {
    changeFilter(filter);
  };

  return (
    <button className="button-filter" id={id} onClick={() => handleFilter(filter)}>
      {name}
    </button>
  );
};

