import React from 'react';
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const ContactCard = ({ card, onEdit, onDelete }) => (
  <Card sx={{ minWidth: 275, mb: 2 }}>
    <CardContent>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5">{card.name}</Typography>
        <Box>
          <IconButton onClick={() => onEdit(card)}><Edit /></IconButton>
          <IconButton onClick={() => onDelete(card.id)}><Delete /></IconButton>
        </Box>
      </Box>
      <Typography color="text.secondary">{card.title}</Typography>
      <Typography>{card.company}</Typography>
      <Typography>{card.email}</Typography>
      <Typography>{card.phone}</Typography>
      <Typography>{card.address}</Typography>
    </CardContent>
  </Card>
);

export default ContactCard;