import styles from "./test.module.css";
import { Navbar } from "../Navbar/Navbar";
import { Button } from "@/shared/ui/Button/Button";
import { useEffect } from "react";

const questions = [
  {
    text: 'Как вы себя вчера чувствовали?',
    id: 'one'
  },
  {
    text: 'Как вы себя чувтсвуете?',
    id: 'two'
  },
  {
    text: 'Как вы себя завтра будете чувствовать?',
    id: 'three'
  },
]

export const Test = () => {



  function handleSubmit(event) {
    event.preventDefault();
    console.log('submit')

    // console.log(event.target.elements)
  }
  useEffect(() => {
    const form = document.querySelector("form");
    let output:string[] = [];

    form?.addEventListener("submit", function(event) {
      event.preventDefault();
      const data = new FormData(form);

      for (const entry of data) {
        output.push(entry.toString().slice(-2))
      }
      console.log(output);

      output = [];
    }, false);
  }, [])

  return (
    <div className='page-container'>
      <Navbar />
      <form onSubmit={handleSubmit} className={styles.container}>
        {questions && questions.map((question, index) => (
          <fieldset key={question.id} className={styles.question}>
            {index}
            <p className={styles.text}>{question.text}</p>

            <label>
              <p className={styles.text}>YES</p>
              <input required name={question.id} type="radio" className={styles.checkbox} value='YES'/>
            </label>

            <label>
              <p className={styles.text}>NO</p>
              <input required name={question.id} type="radio" className={styles.checkbox} value='NO'/>
            </label>

          </fieldset>
        ))}
        <Button title="Далее" mode='primary' type='submit'/>
      </form>
    </div>

  );
};
