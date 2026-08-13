const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api";

export type AuthRole = "admin" | "student";

export class ApiRequestError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}


async function apiRequest<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(body),
  });

  const data = await res.json();

  if (!res.ok || !data.success) {
    throw new ApiRequestError(res.status, data.message || "Something went wrong");
  }

  return data;
}

export function loginRequest(email: string, password: string) {
  return apiRequest<{ success: true; message: string; data: { email: string } }>(
    "/auth/login",
    { email, password }
  );
}

export function verifyLoginOtpRequest(email: string, otp: string) {
  return apiRequest<{
    success: true;
    data: { id: string; name: string; email: string; role: AuthRole; isEmailVerified: boolean };
  }>("/auth/verify-login-otp", { email, otp });
}

export function resendOtpRequest(email: string) {
  return apiRequest<{ success: true; message: string }>("/auth/resend-otp", { email });
}

export function registerRequest(name: string, email: string, password: string) {
  return apiRequest<{ success: true; message: string; data: { email: string } }>(
    "/auth/register",
    { name, email, password }
  );
}

export function verifyRegistrationOtpRequest(email: string, otp: string) {
  return apiRequest<{ success: true; message: string }>("/auth/verify-otp", { email, otp });
}

export function forgotPasswordRequest(email: string) {
  return apiRequest<{ success: true; message: string }>("/auth/forgot-password", { email });
}

export function verifyResetOtpRequest(email: string, otp: string) {
  return apiRequest<{ success: true; message: string; data: { resetToken: string } }>(
    "/auth/verify-reset-otp",
    { email, otp }
  );
}

export function resetPasswordRequest(email: string, resetToken: string, newPassword: string) {
  return apiRequest<{ success: true; message: string }>("/auth/reset-password", {
    email,
    resetToken,
    newPassword,
  });
}
