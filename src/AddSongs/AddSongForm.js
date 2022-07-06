import React, { useState } from "react";
import { Button, Form, Input,notification  } from "antd";

import "antd/dist/antd.css";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
};
/* eslint-disable no-template-curly-in-string */

const AddSongForm = ({addSong}) => {
  const [songInput, setSongInput] = useState('');
  const [singerInput, setSingerInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [authorInput, setAuthorInput] = useState('');
  const onFinish = (values) => {
    console.log(values);
  };

  const handleSongInput = (e) =>{
    setSongInput(e.target.value)
  }
  const handleSingerInput = (e) =>{
    setSingerInput(e.target.value)
  }
  const handleDescriptionInput = (e) =>{
    setDescriptionInput(e.target.value)
  }
  const handleAuthorInput = (e) =>{
    setAuthorInput(e.target.value)
  }

  const openNotification = (type) => {
    notification[type]({
      message: 'Notification Title',
      description:
        'thêm bài hát thành công',
      
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(songInput,singerInput,descriptionInput,authorInput)
    setSongInput('')
    setSingerInput('')
    setDescriptionInput('')
    setAuthorInput('')
    openNotification('success')
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["user", "name"]}
        label="Name"
        value ={songInput}
        onChange ={handleSongInput}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "singer"]}
        label="Singer"
        value ={singerInput}
        onChange ={handleSingerInput}

        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "description"]}
        label="Description"
        value ={descriptionInput}
        onChange ={handleDescriptionInput}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={["user", "author"]}
        label="Author"
        value ={authorInput}
        onChange ={handleAuthorInput}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddSongForm;
