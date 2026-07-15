interface User {
  id: string;
  name: string;
  email: string;
  age: number;
}

type UserUpdate = Partial<Omit<User, 'id'>>;
type UserPreview = Pick<User, 'name' | 'age'>;
type UserDatabase = Record<string, User>;


