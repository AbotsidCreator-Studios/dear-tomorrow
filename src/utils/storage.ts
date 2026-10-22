import type { Letter, User, WaitlistEntry } from '../types';

const USERS_KEY = 'dear-tomorrow-users';
const CURRENT_USER_KEY = 'dear-tomorrow-current-user';
const LETTERS_KEY = 'dear-tomorrow-letters';
const WAITLIST_KEY = 'dear-tomorrow-waitlist';

const safeParse = <T,>(key: string, fallback: T): T => {
  const value = localStorage.getItem(key);

  if (!value) return fallback;

  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
};

export const getUsers = (): User[] => safeParse<User[]>(USERS_KEY, []);

export const saveUsers = (users: User[]) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const getCurrentUser = (): User | null => safeParse<User | null>(CURRENT_USER_KEY, null);

export const setCurrentUser = (user: User | null) => {
  if (!user) {
    localStorage.removeItem(CURRENT_USER_KEY);
    return;
  }

  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
};

export const getLetters = (): Letter[] => safeParse<Letter[]>(LETTERS_KEY, []);

export const saveLetters = (letters: Letter[]) => {
  localStorage.setItem(LETTERS_KEY, JSON.stringify(letters));
};

export const getWaitlist = (): WaitlistEntry[] => safeParse<WaitlistEntry[]>(WAITLIST_KEY, []);

export const saveWaitlist = (entries: WaitlistEntry[]) => {
  localStorage.setItem(WAITLIST_KEY, JSON.stringify(entries));
};

export const createUser = (name: string, email: string, password: string): User => {
  const user: User = {
    id: crypto.randomUUID(),
    name,
    email,
    password,
    createdAt: new Date().toISOString(),
  };

  const users = getUsers();
  users.push(user);
  saveUsers(users);
  setCurrentUser(user);
  return user;
};

export const loginUser = (email: string, password: string): User | null => {
  const users = getUsers();
  const user = users.find((item) => item.email.toLowerCase() === email.toLowerCase() && item.password === password);

  if (!user) return null;

  setCurrentUser(user);
  return user;
};

export const logoutUser = () => {
  setCurrentUser(null);
};

export const createWaitlistEntry = (email: string): WaitlistEntry => {
  const payload: WaitlistEntry = {
    id: crypto.randomUUID(),
    email,
    createdAt: new Date().toISOString(),
  };

  const current = getWaitlist();

  if (!current.some((entry) => entry.email.toLowerCase() === email.toLowerCase())) {
    current.push(payload);
    saveWaitlist(current);
  }

  return payload;
};

export const createLetter = (payload: Omit<Letter, 'id' | 'createdAt'>): Letter => {
  const normalized: Letter = {
    ...payload,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };

  const letters = getLetters();
  letters.push(normalized);
  saveLetters(letters);
  return normalized;
};

export const updateLetter = (letterId: string, updates: Partial<Letter>) => {
  const letters = getLetters();
  const next = letters.map((letter) => (letter.id === letterId ? { ...letter, ...updates } : letter));
  saveLetters(next);
};

export const deleteLetter = (letterId: string) => {
  const letters = getLetters().filter((letter) => letter.id !== letterId);
  saveLetters(letters);
};

export const deleteCurrentUserAccount = () => {
  const current = getCurrentUser();

  if (!current) return;

  const users = getUsers().filter((user) => user.id !== current.id);
  saveUsers(users);

  const letters = getLetters().filter((letter) => letter.userId !== current.id);
  saveLetters(letters);

  setCurrentUser(null);
};
