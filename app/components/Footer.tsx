function Footer() {
  return (
    <footer className="mt-10 border-t border-body py-6">
      <div className="flex items-center justify-center text-sm text-gray-500">
        © {new Date().getFullYear()} —{" "}
        <span className="ml-1 font-semibold text-primary">
          Eng / Mahmoud Gamal
        </span>
      </div>
    </footer>
  );
}

export default Footer;
