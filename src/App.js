import React, { Component } from "react";
import ProductList from "./components/ProductList";
import CustomModal from "./components/Modal";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      editingProduct: null,
      products: [],
    };
  }

  handleEdit = (product) => {
    this.setState({ showModal: true, editingProduct: product });
  };

  handleModalClose = () => {
    this.setState({ showModal: false, editingProduct: null });
  };

  handleSaveEdit = (editedProduct) => {
    // Implement save edit logic and show notification
    console.log("Product edited:", editedProduct);
    this.handleModalClose();
  };

  render() {
    const { showModal, editingProduct } = this.state;

    return (
      <div>
        <ProductList onEdit={this.handleEdit} />
        <CustomModal
          product={editingProduct}
          isOpen={showModal}
          onClose={this.handleModalClose}
          onSave={this.handleSaveEdit}
        />
      </div>
    );
  }
}

export default App;
