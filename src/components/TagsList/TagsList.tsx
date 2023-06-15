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
  return (
    <div className={styles.tagslist}>
      {tags.map((tag, index) => (
        // <input
        //   className={styles.tag}
        //   key={index}
        // >
        //   {tag}
        // </input>

        <label
          key={index}
          className={styles.tag}
        >
          <input
            type="checkbox"
            checked={selectedTags.includes(tag)}
            onChange={() => handleTagToggle(tag)}
          />
          {tag}
        </label>

      ))}
    </div>
  );
};

export default TagsList;
