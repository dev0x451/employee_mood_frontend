import { Button } from "./Button";
import '../../../index.css';

export default {
  title: 'Shared/UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    title: {
      type: 'string',
      description: 'Текст внутри кнопки',
    },
    width: {
      type: 'string',
      description: 'Ширина кнопки в пикселях',
    },
    height: {
      type: 'string',
      description: 'Высота кнопки в пискелях',
    },
    type: {
      type: 'string',
      description: 'Возможные типы кнопок, не влияют на внешний вид',
      control: {type: 'select'},
      defaultValue: 'primary',
      options: ['submit', 'reset', 'button']
    },
    mode: {
      type: 'string',
      description: 'Вариант внешнего вида кнопки',
      control: {type: 'radio'},
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'outline', 'empty']
    },
    disabled: {
      type: 'boolean',
      description: 'Кнопка активна или неактивна',
      control: {type: 'inline-radio'},
      defaultValue: 'false',
      options: [false, true]
    },
    handleClick: {
      action: 'clicked',
      description: 'Функция вызова обработчика клика',
    }
  }
}

const Template = (arg) => <Button {...arg} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Далее',
  mode: 'primary',
  width: '200px',
  height: '44px',
  disabled: false
}

export const Secondary = Template.bind({})
Secondary.args = {
  title: 'Подробнее',
  mode: 'secondary',
  width: '200px',
  height: '44px',
  disabled: false
}

export const Outline = Template.bind({})
Outline.args = {
  title: 'Нет',
  mode: 'outline',
  width: '200px',
  height: '44px',
  disabled: false
}

export const Empty = Template.bind({})
Empty.args = {
  title: 'Назад',
  mode: 'empty',
  width: '200px',
  height: '44px',
  disabled: false
}
