// 1st Component - Brand Search Input (Text input to search mobiles by brand)
export default function BrandSearchInput({ searchTerm, onSearchChange }) {
  return (
    <div className="control-group">
      <input
        type="text"
        className="search-input"
        placeholder="🔍 Search by brand..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}
