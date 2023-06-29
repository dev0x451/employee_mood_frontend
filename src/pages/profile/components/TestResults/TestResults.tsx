import styles from './testresults.module.scss';
import {ExpressDiagnoseResponse} from "@/types.ts";
import {ReactElement} from "react";
import {WarningBall} from "@/pages/profile/components/WarningBall/WarningBall.tsx";
import {Button} from "@/shared/ui/Button/Button";
import {usePagination} from "@/shared/constants";

interface Props {
  results: ExpressDiagnoseResponse[];
}
export const TestResults = ({results}: Props): ReactElement => {
  const { countCardPage, addCard } = usePagination(2);
  return (
    <div>
      <h2 className={styles.title}>Пройденные опросы за последние 12 месяцев</h2>
      {results.length !== 0
        ?
          <>
            <ul className={styles.testsList}>
              {results.map((result, index) => (
                index < countCardPage ?
                  <li className={styles.testsListItem}>
                    <h4 className={styles.testsListItemName}>{result.survey.title}</h4>
                    <p className={styles.testsListItemDate}>{result.completion_date}</p>
                    <div className={styles.testsListItemMental}><WarningBall level={result.mental_state.level} title={result.mental_state.name} /></div>
                  </li>
                  : null
              ))}
            </ul>
            <Button mode="empty" title="Загрузить еще" handleClick={addCard}/>
          </>
        :
          <div className={styles.emptyTests}>Нет пройденных опросов</div>
      }
    </div>
  );
};
