import type { Meta, StoryObj } from '@storybook/react';
import {AiOutlineLogin} from "react-icons/ai"
import Uploadresume from '../components/Upload_resume';

const meta: Meta<typeof Uploadresume> = {
  title: 'examples/Uploadresume',
  component: Uploadresume,
};

//exporting meta of button story
export default meta;

type Story = StoryObj<typeof Uploadresume>;

//exporting primary varient of button
export const uploadresume: Story = {
  args:{
    intent:"primary",
    fullwidth:true,
    children:"Upload Resume",
  },
  argTypes:{
    fullwidth:{
      type:"boolean",
      defaultValue:false
    }
  }
}