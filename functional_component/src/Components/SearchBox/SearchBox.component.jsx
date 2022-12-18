import "./SearchBox.style.css";

const SearchBoxComponent = (props) => {
  const { onSearchHandler, placeholder } = props;
  return (
    <div>
      <input
        type="search"
        placeholder={placeholder}
        className="search-box"
        onChange={onSearchHandler}
      />
    </div>
  );
};

export default SearchBoxComponent;
