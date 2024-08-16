import { io } from 'socket.io-client';
import { API_URL, SOCKET_URL } from '../config';
export const socket = io(SOCKET_URL,);