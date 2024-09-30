import { db } from '@/lib/db';

export async function getPasswordResetToken(token: string) {
  try {
    const passwordResetToken = await db.passwordResetToken.findUnique({
      where: { token: token },
    });
    return passwordResetToken;
  } catch (error) {
    return null;
  }
}

export async function getPasswordResetTokenByEmail(email: string) {
  try {
    const passwordResetToken = await db.passwordResetToken.findFirst({
      where: { email: email },
    });
    return passwordResetToken;
  } catch (error) {
    return null;
  }
}
