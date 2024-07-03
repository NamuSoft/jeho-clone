import { ArrowRightOutlined } from "@ant-design/icons";
import { Form, Input, List } from "antd";
import "./custom.css";
type Props = {
  // Add props here
};
const { TextArea } = Input;

export const ContactFormComponent = (props: Props) => {
  return (
    <Form layout='vertical' className='flex w-full flex-col '>
      <div className='flex flex-col justify-between text-white lg:flex-row lg:gap-[30px]'>
        <Form.Item label='Full Name*' vertical className='w-full lg:w-[50%]'>
          <Input className='w-full rounded-[13px] bg-transparent py-[15px]' />
        </Form.Item>
        <Form.Item label='Email*' vertical className='w-full lg:w-[50%]'>
          <Input className='w-full rounded-[13px] bg-transparent py-[15px]' />
        </Form.Item>
      </div>
      <div className='flex flex-col justify-between text-white lg:flex-row lg:gap-[30px]'>
        <Form.Item label='Project Type*' vertical className='w-full lg:w-[50%]'>
          <Input className='w-full rounded-[13px] bg-transparent py-[15px]' />
        </Form.Item>
        <Form.Item label='Mobile*' vertical className='w-full lg:w-[50%]'>
          <Input className='w-full rounded-[13px] bg-transparent py-[15px]' />
        </Form.Item>
      </div>
      <Form.Item label='Mobile*' vertical className='w-full'>
        <TextArea
          style={{
            height: 200,
          }}
          className='w-full rounded-[13px] bg-transparent'
        />
      </Form.Item>
      <button className='btn relative flex h-[50px] w-[200px] items-center justify-center gap-[20px] rounded-[12px] bg-accentRed text-[17px] text-white'>
        <span>Send Message</span>
        <ArrowRightOutlined />
      </button>
    </Form>
  );
};
