import type { Meta, StoryObj } from '@storybook/react';
import {AiOutlineLogin} from "react-icons/ai"
import Applyfilter from '../components/Apply_filter';

const meta: Meta<typeof Applyfilter> = {
  title: 'examples/Applyfilter',
  component: Applyfilter,
};

//exporting meta of button story
export default meta;

type Story = StoryObj<typeof Applyfilter>;

//exporting primary varient of button
export const applyfilter: Story = {
  args:{
    intent:"primary",
    fullwidth:true,
    children:"Apply filter",
  },
  argTypes:{
    fullwidth:{
      type:"boolean",
      defaultValue:false
    }
  }
}