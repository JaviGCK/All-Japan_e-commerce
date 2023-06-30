import './Filter.css';
import { FilterCategory } from '../../samples/enum';
import { FilterButton } from './FilterButton';

export const Filter = () => {
  const NamesFilter = [{
    name: "All Products",
    filter: FilterCategory.ALL,
    id: 1
  },
  {
    name: "Tea",
    filter: FilterCategory.TEA,
    id: 2
  },
  {
    name: "Vegatables",
    filter: FilterCategory.VEGETABLES,
    id: 3
  },
  {
    name: "Noddles",
    filter: FilterCategory.NOODLES,
    id: 4
  }
]




  

  return (
    <>
      <nav className="section-filter">
        {NamesFilter.map((filter) => (
          <FilterButton
            name={filter.name}
            filter={filter.filter}
            key={filter.id.toString()}
            id={filter.id.toString()}
          />
        ))}
      </nav>
    </>
  );
};

