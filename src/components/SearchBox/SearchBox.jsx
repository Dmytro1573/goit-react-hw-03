import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <>
      <div className={css.searchBoxContainer}>
        <p>Find contacts by name</p>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            onFilter(e.target.value);
          }}
          className={css.searchBoxInput}
        />
      </div>
    </>
  );
}
