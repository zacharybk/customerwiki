export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>
          Built for the Support Wiki community with a refreshed experience for the Customer Experience Handbook.
        </p>
        <p className="text-slate-500">
          Need edits? Open a pull request in <a href="https://github.com/zacharybk/cxhandbookchatgpt">cxhandbookchatgpt</a>.
        </p>
      </div>
    </footer>
  );
}
