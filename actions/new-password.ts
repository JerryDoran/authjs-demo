'use server';

import * as z from 'zod';
import { NewPasswordSchema } from '@/schemas';
import { getPasswordResetToken } from '@/data/password-reset-token';

export async function newPassword(
  values: z.infer<typeof NewPasswordSchema>,
  token: string | null
) {
  if (!token) {
    return { error: 'Missing token!' };
  }

  const validatedFields = NewPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  const { password } = validatedFields.data;

  const existingToken = await getPasswordResetToken(token);

  if (!existingToken) {
    return { error: 'Invalid token!' };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: 'Token has expired!' };
  }
}
