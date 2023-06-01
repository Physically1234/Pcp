import type { Meta, StoryObj } from '@storybook/react';
import {AiOutlineLogin} from "react-icons/ai"
import Sortby from '../components/Sort_by';

const meta: Meta<typeof Sortby> = {
  title: 'examples/Sortby',
  component: Sortby,
};

//exporting meta of button story
export default meta;

type Story = StoryObj<typeof Sortby>;

//exporting primary varient of button
export const sortby: Story = {
  args:{
    intent:"primary",
    fullwidth:true,
    children:"Sort by",
  },
  argTypes:{
    fullwidth:{
      type:"boolean",
      defaultValue:false
    }
  }
}