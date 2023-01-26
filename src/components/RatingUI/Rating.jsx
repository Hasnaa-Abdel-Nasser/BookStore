import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Book from '../Books/BookData';
const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};
let x = 0,y=0;
export default function TextRating() {
  if(x >= 5 && y<Book.length){
    y++;
  }
  x++;
  const value = (x<5)? 4 : Book[y].rate;
  let eq = (x<5)?'white': Book[y].colors;
  return (
    <Box
      sx={{
        width: 130,
        display: 'flex',
        alignItems: 'center',
        color: eq,
        fontSize: '13px',
        fontWeight: '500',
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        icon = {<StarIcon style={{color: eq, width: '17px'}}/>}
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 ,width: '17px', color: 'rgb(174 174 174 / 80%)'}} fontSize="inherit" />}
      />
      <Box sx={{ ml: 1 }}>{labels[value]}</Box>
    </Box>
  );
}