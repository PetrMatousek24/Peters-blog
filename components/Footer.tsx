export default function Footer() {
  return (
    <footer className="py-4 px-4 md:px-16 lg:px-32 xl:px-64 2xl:px-72 text-center text-sm text-gray-500">
      &copy; {new Date().getFullYear()} Petr's Blog. All rights reserved.
    </footer>
  );
}