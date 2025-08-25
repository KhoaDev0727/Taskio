import AuthContainer from "@/features/auth/auth-container";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-muted">
      <AuthContainer initialForm="register" />
    </div>
  );
}