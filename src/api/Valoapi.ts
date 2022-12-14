import axios from 'axios';
import React, { useState } from 'react';
import { API_URL } from '../constants';

const VALO_API = 'https://valorant-api.com/v1';

// VALORANT
export const getValoApi = (params: string, apiId?: string) => {
  const get = `${VALO_API}${params}`;
  const getById = `${VALO_API}${params}${apiId};`;
  return { get, getById };
};

export const getValoApiById = async (params: string, apiId: string) => {
  const response = await fetch(`${VALO_API}${params}/${apiId}`);
  const data = await response.json();

  let isLoading: boolean;
  if (!response.ok && !data) {
    isLoading = true;
  } else {
    isLoading = false;
  }
  return { response, data, isLoading };
};

// get api
export const getAPI = async (param: string) => {
  const response = await fetch(`${API_URL}${param}`);
  const data = await response.json();
  return data;
};

// USER
