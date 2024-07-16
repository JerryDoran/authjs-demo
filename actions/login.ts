'use server';

import * as z from 'zod';

import { LoginSchema } from '@/schemas';

export async function login(values: z.infer<typeof LoginSchema>) {
  // Validate field values on the server
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  return { success: 'Login successful!' };
}
