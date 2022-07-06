import { Button, Modal } from "antd";
import React, { useState } from "react";
import AddSongForm from "./AddSongForm";
import 'antd/dist/antd.css';

export default function AddNewSong({addSong}) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add New Song
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <AddSongForm addSong= {addSong}></AddSongForm>
      </Modal>
    </>
  );
}
