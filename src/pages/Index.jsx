import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Select, Table, Thead, Tbody, Tr, Th, Td, IconButton, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@chakra-ui/react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const Index = () => {
  const [transactions, setTransactions] = useState([]);
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [category, setCategory] = useState("salary");
  const [editIndex, setEditIndex] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedTransactions = [...transactions];
      updatedTransactions[editIndex] = { date, amount, type, category };
      setTransactions(updatedTransactions);
      setEditIndex(null);
    } else {
      setTransactions([...transactions, { date, amount, type, category }]);
    }
    setDate("");
    setAmount("");
    setType("income");
    setCategory("salary");
    onClose();
  };

  const handleEdit = (index) => {
    const transaction = transactions[index];
    setDate(transaction.date);
    setAmount(transaction.amount);
    setType(transaction.type);
    setCategory(transaction.category);
    setEditIndex(index);
    onOpen();
  };

  const handleDelete = (index) => {
    const updatedTransactions = transactions.filter((_, i) => i !== index);
    setTransactions(updatedTransactions);
  };

  return (
    <Box p={4}>
      <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={onOpen} mb={4}>
        Add Transaction
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{editIndex !== null ? "Edit" : "Add"} Transaction</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl mb={4}>
                <FormLabel>Date</FormLabel>
                <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Amount</FormLabel>
                <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Type</FormLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </Select>
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Category</FormLabel>
                <Select value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="salary">Salary</option>
                  <option value="groceries">Groceries</option>
                  <option value="bills">Bills</option>
                </Select>
              </FormControl>
              <Button type="submit" colorScheme="blue">
                {editIndex !== null ? "Update" : "Add"}
              </Button>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Table>
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Amount</Th>
            <Th>Type</Th>
            <Th>Category</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {transactions.map((transaction, index) => (
            <Tr key={index}>
              <Td>{transaction.date}</Td>
              <Td>{transaction.amount}</Td>
              <Td>{transaction.type}</Td>
              <Td>{transaction.category}</Td>
              <Td>
                <IconButton icon={<FaEdit />} aria-label="Edit" onClick={() => handleEdit(index)} mr={2} />
                <IconButton icon={<FaTrash />} aria-label="Delete" onClick={() => handleDelete(index)} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Index;
