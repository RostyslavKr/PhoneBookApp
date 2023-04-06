import { createSlice } from '@reduxjs/toolkit';

const showModalSlice = createSlice({
  name: 'showModal',
  initialState: { showModal: false },
  reducers: {
    setShowModal(state) {
      state.showModal = !state.showModal;
    },
  },
});

export const { setShowModal } = showModalSlice.actions;
export const showModalReducer = showModalSlice.reducer;
