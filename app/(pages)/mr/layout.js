// app/(pages)/mr/layout.js
export default function MRLayout({ children }) {
  return (
    <div className="tw-bg-gray-50 tw-min-h-screen">
      <header className="tw-bg-blue-500 tw-p-4 tw-text-white tw-font-[var(--font-bricolage)]">
        MR Dashboard
      </header>
      <main className="tw-p-6">{children}</main>
    </div>
  );
}
