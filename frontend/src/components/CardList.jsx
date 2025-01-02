import React, { useState, useEffect } from 'react';
import { Container, Button, Box } from '@mui/material';
import ContactCard from './ContactCard';
import CardForm from './CardForm';
import { getCards, createCard, updateCard, deleteCard } from '../services/api';

const CardList = () => {
  const [cards, setCards] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await getCards();
      setCards(response.data);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  const handleOpen = () => {
    setSelectedCard(null);
    setOpen(true);
  };

  const handleEdit = (card) => {
    setSelectedCard(card);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCard(null);
  };

  const handleSubmit = async (formData) => {
    try {
      if (selectedCard) {
        await updateCard(selectedCard.id, formData);
      } else {
        await createCard(formData);
      }
      fetchCards();
    } catch (error) {
      console.error('Error saving card:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteCard(id);
      fetchCards();
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Button variant="contained" onClick={handleOpen} sx={{ mb: 2 }}>
          Add Contact
        </Button>
        {cards.map((card) => (
          <ContactCard
            key={card.id}
            card={card}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
        <CardForm
          open={open}
          handleClose={handleClose}
          handleSubmit={handleSubmit}
          card={selectedCard}
        />
      </Box>
    </Container>
  );
};

export default CardList;