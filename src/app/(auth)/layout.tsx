export default function AuthLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
      {children}
    </div>
  );
}
