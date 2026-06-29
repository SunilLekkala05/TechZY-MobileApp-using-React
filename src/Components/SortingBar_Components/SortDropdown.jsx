// 3rd Component - Sort Dropdown (Sort by rating, discount, or price)
const SORT_OPTIONS = [
  { value: "", label: "Sort By" },
  { value: "rating-high", label: "⭐ Rating: High → Low" },
  { value: "rating-low", label: "⭐ Rating: Low → High" },
  { value: "discount-high", label: "🏷️ Discount: High → Low" },
  { value: "discount-low", label: "🏷️ Discount: Low → High" },
  { value: "price-low", label: "💰 Price: Low → High" },
  { value: "price-high", label: "💰 Price: High → Low" },
];

export default function SortDropdown({ sortBy, onSortChange }) {
  return (
    <div className="control-group">
      <select
        className="filter-select"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
      >
        {SORT_OPTIONS.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
