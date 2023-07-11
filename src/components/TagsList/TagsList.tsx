import * as React from 'react';
import {useEffect, useState} from 'react';
import styles from "./tagsList.module.scss";
import {Category} from "@/types";


interface TagsListProps {
  tags: Category[];
  onChecked: any;
}

const TagsList: React.FC<TagsListProps> = ({tags, onChecked}) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  //const [categoryNames, setCategoryNames] = useState<string[]>([]);

  useEffect(() => {
    onChecked(selectedTags)
    // console.log(selectedTags)
  }, [selectedTags])

  const handleTagToggle = (tag: string) => {
    // console.log(tags)
    // Проверка тегов
    console.log(selectedTags)
    const updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter((selectedTag) => selectedTag !== tag)
      : [...selectedTags, tag];
    setSelectedTags(updatedTags);
  };

  return (
    <div className={styles.tagslist}>
      {/*<button type="button" onClick={handleClick}>Check inputs</button>*/}
      {tags.map((tag, index) => (

        <label
          key={index}
          className={styles.tag}>

          <input
            className={styles.checkbox}
            name={tag.name}
            value={tag.name}
            type="checkbox"
            onChange={() => handleTagToggle(tag.name)}

          />
          <span className={styles.spanmark}>{tag.name}</span>
        </label>
      ))}
    </div>
  );
};

export default TagsList;
