// 2nd Component - Brand Filter Dropdown (Select a specific brand to filter)
export default function BrandFilterDropdown({ selectedBrand, onBrandChange, brands }) {
  return (
    <div className="control-group">
      <select
        className="filter-select"
        value={selectedBrand}
        onChange={(e) => onBrandChange(e.target.value)}
      >
        <option value="All">All Brands</option>
        {brands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </div>
  );
}
