import type { Meta, StoryObj } from '@storybook/react';
import {AiOutlineLogin} from "react-icons/ai"
import Filterby from "../components/Filter_by"; 

const meta: Meta<typeof Filterby> = {
  title: 'examples/Filterby',
  component: Filterby,
};

//exporting meta of button story
export default meta;

type Story = StoryObj<typeof Filterby>;

//exporting primary varient of button
export const filterby: Story = {
  args:{
    intent:"primary",
    fullwidth:true,
    children:"Filter by",
  },
  argTypes:{
    fullwidth:{
      type:"boolean",
      defaultValue:false
    }
  }
}