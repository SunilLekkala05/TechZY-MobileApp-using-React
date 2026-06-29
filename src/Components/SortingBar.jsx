// Sorting Bar Component - Brand search input and sort/filter dropdowns
import BrandSearchInput from "./SortingBar_Components/BrandSearchInput";
import BrandFilterDropdown from "./SortingBar_Components/BrandFilterDropdown";
import SortDropdown from "./SortingBar_Components/SortDropdown";

export default function SortingBar({
  searchTerm,
  onSearchChange,
  selectedBrand,
  onBrandChange,
  sortBy,
  onSortChange,
  brands,
}) {
  return (
    <div className="controls-bar">
      <BrandSearchInput searchTerm={searchTerm} onSearchChange={onSearchChange} />
      <BrandFilterDropdown selectedBrand={selectedBrand} onBrandChange={onBrandChange} brands={brands} />
      <SortDropdown sortBy={sortBy} onSortChange={onSortChange} />
    </div>
  );
}
