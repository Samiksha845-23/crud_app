import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create action
export const createUser = createAsyncThunk("createUser", async (data) => {
  const reponse = await fetch(
    "https://65bfecc225a83926ab95dc58.mockapi.io/crud",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  try {
    const result = await response.json();
    return result;
  } catch (error) {}
});

export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
});

export default userDetail.reducer;
