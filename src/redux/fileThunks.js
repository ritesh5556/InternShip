// src/redux/fileThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFiles = createAsyncThunk('files/fetchFiles', async () => {
  const response = await axios.get('http://localhost:4000/api/v1/fetchImages');
  console.log("data=>", response.data.data)
  return response.data.data;
});



export const incrementViewCount = createAsyncThunk('files/incrementViewCount', async (fileId) => {
  const response = await axios.post(`http://localhost:4000/api/v1/view/${fileId}`);
  return response.data.views;
});
