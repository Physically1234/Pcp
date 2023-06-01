import type { Meta, StoryObj } from '@storybook/react';
import {AiOutlineLogin} from "react-icons/ai"
import Email from '../components/Email';

const meta: Meta<typeof Email> = {
  title: 'examples/Email',
  component: Email,
};

//exporting meta of button story
export default meta;

type Story = StoryObj<typeof Email>;

//exporting primary varient of button
export const email: Story = {
  args:{
    intent:"primary",
    fullwidth:true,
    children:"Email",
  },
  argTypes:{
    fullwidth:{
      type:"boolean",
      defaultValue:false
    }
  }
}