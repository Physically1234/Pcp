import type { Meta, StoryObj } from '@storybook/react';
import {AiOutlineLogin} from "react-icons/ai"
import Reset from '../components/Reset';

const meta: Meta<typeof Reset> = {
  title: 'examples/Reset',
  component: Reset,
};

//exporting meta of button story
export default meta;

type Story = StoryObj<typeof Reset>;

//exporting primary varient of button
export const reset: Story = {
  args:{
    intent:"primary",
    fullwidth:true,
    children:"Reset",
  },
  argTypes:{
    fullwidth:{
      type:"boolean",
      defaultValue:false
    }
  }
}