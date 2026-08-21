export interface StudentProfile {
  id: string;

  firstName: string;
  lastName: string;

  email: string;
  phone: string;

  dateOfBirth: string;

  bio: string;

  avatarUrl?: string;

  memberSince: string;
}