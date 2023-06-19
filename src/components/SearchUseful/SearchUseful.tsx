import React, {useState} from 'react';
import styles from "./searchUseful.module.scss";

interface SearchUsefulProps {
  data: string[];
}

const SearchUseful: React.FC<SearchUsefulProps> = ({data}) => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState<string[]>(data);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    setQuery(searchTerm);

    const filteredItems = data.filter((item) =>
      item.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filteredItems);
  };

  return (
    <div>
      <input
        className={styles.input}
        type="text"
        placeholder="Поиск"
        value={query}
        onChange={handleSearch}
      />
      <ul>
        {filteredData.map((item, index) => (
          // Ready for cards from array map
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchUseful;

