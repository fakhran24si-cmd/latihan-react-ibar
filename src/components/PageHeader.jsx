// File: src/components/PageHeader.jsx

export default function PageHeader({ title, breadcrumb, children }) {
  // ANALISA: Menambahkan pengecekan agar elemen tidak dirender jika data kosong
  const renderBreadcrumb = () => {
    if (!breadcrumb) return null; 
    
    if (Array.isArray(breadcrumb)) {
      return breadcrumb.map((item, index) => (
        <span key={index} className="flex items-center space-x-2">
          <span className="text-slate-400 font-serif italic">{item}</span>
          {index < breadcrumb.length - 1 && (
            <span className="text-amber-500/50 text-xs mx-1">/</span>
          )}
        </span>
      ));
    }
    return <span className="text-slate-400 font-serif italic">{breadcrumb}</span>;
  };

  return (
    <div className="flex items-center justify-between p-6 bg-white rounded-2xl mb-6 shadow-sm border border-slate-50">
      <div className="flex flex-col">
        <span className="text-4xl font-serif font-black text-[#0B0F19] tracking-wide">
          {title}
        </span>

        {/* ANALISA: Menggunakan Logical AND (&&) untuk mencegah render container kosong */}
        {breadcrumb && (
          <div className="mt-2 flex items-center text-sm">
            {renderBreadcrumb()}
          </div>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
}