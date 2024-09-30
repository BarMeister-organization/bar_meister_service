export type User = {
  id?: number;
  username?: string | null;
  email: string | null;
  password: string | number | null;
  birth_date?: string | null;
  first_name?: string;
  is_active?: boolean;
  is_staff?: boolean;
  last_name?: string;
  profile_picture?: string;
};
