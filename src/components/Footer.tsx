export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="mx-auto max-w-3xl flex items-center justify-between text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} Your Name</p>
        <p>Built with Next.js & Tailwind</p>
      </div>
    </footer>
  );
}
