import type { Meta, StoryObj } from '@storybook/react';
import {AiOutlineLogin} from "react-icons/ai"
import Allow from '../components/Allow';

const meta: Meta<typeof Allow> = {
  title: 'examples/Allow',
  component: Allow,
};

//exporting meta of button story
export default meta;

type Story = StoryObj<typeof Allow>;

//exporting primary varient of button
export const allow: Story = {
  args:{
    intent:"primary",
    fullwidth:true,
    children:"Allow",
  },
  argTypes:{
    fullwidth:{
      type:"boolean",
      defaultValue:false
    }
  }
}