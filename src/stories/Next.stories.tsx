import type { Meta, StoryObj } from '@storybook/react';
import {AiOutlineLogin} from "react-icons/ai"
import Next from '../components/Next';

const meta: Meta<typeof Next> = {
  title: 'examples/Next',
  component: Next,
};

//exporting meta of button story
export default meta;

type Story = StoryObj<typeof Next>;

//exporting primary varient of button
export const next: Story = {
  args:{
    intent:"primary",
    fullwidth:true,
    children:"Next ",
  },
  argTypes:{
    fullwidth:{
      type:"boolean",
      defaultValue:false
    }
  }
}