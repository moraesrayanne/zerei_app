import { supabase } from '../../supabase';

export const signInWithPassword = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error('INVALID_CREDENTIALS');
  }

  return data;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error('ERROR_SIGNING_OUT');
  }
};
