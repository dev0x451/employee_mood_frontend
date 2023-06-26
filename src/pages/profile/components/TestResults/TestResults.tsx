import styles from './testresults.module.scss';
import {ExpressDiagnoseResponse} from "@/types.ts";
import {ReactElement} from "react";
import {WarningBall} from "@/pages/profile/WarningBall/WarningBall.tsx";

interface Props {
  results: ExpressDiagnoseResponse[];
}
export const TestResults = ({results}: Props): ReactElement => {
  return (
    <div>
      <h2 className={styles.title}>Пройденные опросы за последние 12 месяцев</h2>
      <ul className={styles.testsList}>
        {results.map((result) => (
          <li className={styles.testsListItem}>
            <h4 className={styles.testsListItemName}>{result.survey.title}</h4>
            <p className={styles.testsListItemDate}>{result.completion_date}</p>
            <div className={styles.testsListItemMental}><WarningBall level={result.mental_state.level} title={result.mental_state.name} /></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestResults;
