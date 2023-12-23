import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const CustomModal = ({ product, isOpen, onClose, onSave }) => {
  const [editedTitle, setEditedTitle] = useState(product ? product.title : "");

  const handleSave = () => {
    onSave({ ...product, title: editedTitle });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Edit Product Modal"
    >
      <div className="modal-content">
        <h2>Edit Product</h2>
        <label>Title:</label>
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </Modal>
  );
};

export default CustomModal;
