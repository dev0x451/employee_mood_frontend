import { Button } from "./Button";
import '../../../index.css';

export default {
  title: 'Button',
  component: Button,
}

const Template = (arg) => <Button {...arg} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Далее',
  mode: 'primary',
  width: '200px',
  height: '44px',
  disabled: 'false'
}

export const Secondary = Template.bind({})
Secondary.args = {
  title: 'Подробнее',
  mode: 'secondary',
  width: '200px',
  height: '44px',
  disabled: 'false'
}

export const Outline = Template.bind({})
Outline.args = {
  title: 'Нет',
  mode: 'outline',
  width: '200px',
  height: '44px',
  disabled: 'false'
}
