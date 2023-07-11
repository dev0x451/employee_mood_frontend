import React, {useEffect, useState} from 'react';
import styles from "./searchUseful.module.scss";

interface Props {
  onSearch: any;
}

const SearchUseful: React.FC<Props> = ({onSearch}) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    onSearch(inputValue);
  }, [inputValue])

  function handleInputChange(evt: { target: HTMLInputElement; }) {
    setInputValue(evt.target.value);

  }


  return (
    <div>
      <form className=""
        // onSubmit={handleSubmitSearch}
            noValidate>
        <input
          className={styles.input}
          type="text"
          placeholder="Поиск"
          value={inputValue}
          onChange={handleInputChange}
        />
        {/*<span className="search__error">{searchError.errorMessage}</span>*/}

      </form>
    </div>
  );
};

export default SearchUseful;

