import type { Meta, StoryObj } from '@storybook/react';
import {AiOutlineLogin} from "react-icons/ai"
import Submit from '../components/Submit';

const meta: Meta<typeof Submit> = {
  title: 'examples/Submit',
  component: Submit,
};

//exporting meta of button story
export default meta;

type Story = StoryObj<typeof Submit>;

//exporting primary varient of button
export const submit: Story = {
  args:{
    intent:"primary",
    fullwidth:true,
    children:"Submit ",
  },
  argTypes:{
    fullwidth:{
      type:"boolean",
      defaultValue:false
    }
  }
}