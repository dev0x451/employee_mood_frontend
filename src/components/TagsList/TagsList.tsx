import React, {useState} from 'react';
import styles from "./tagsList.module.scss";


interface TagsListProps {
  tags: string[];
}

const TagsList: React.FC<TagsListProps> = ({tags}) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagToggle = (tag: string) => {
    const updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter((selectedTag) => selectedTag !== tag)
      : [...selectedTags, tag];
    setSelectedTags(updatedTags);
  };

  // Check Inputs
  // const handleClick = () => {
  //   console.log(selectedTags)
  // };

  return (
    <div className={styles.tagslist}>
      {/*<button type="button" onClick={handleClick}>Check inputs</button>*/}
      {tags.map((tag, index) => (

        <label
          key={index}
          className={styles.tag}>

          <input
            className={styles.checkbox}
            name={tag}
            value={tag}
            type="checkbox"
            onChange={() => handleTagToggle(tag)}

          />
          <span className={styles.spanmark}>{tag}</span>
        </label>
      ))}
    </div>
  );
};

export default TagsList;
