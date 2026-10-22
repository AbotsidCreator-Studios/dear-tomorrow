export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
};

export type LetterStatus = 'draft' | 'sealed' | 'opened';

export type Letter = {
  id: string;
  userId: string;
  title: string;
  content: string;
  futureOpenDate: string;
  status: LetterStatus;
  createdAt: string;
  sealedAt?: string;
  openedAt?: string;
};

export type WaitlistEntry = {
  id: string;
  email: string;
  createdAt: string;
};
