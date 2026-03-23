const AccreditationStrip = () => (
  <section className="bg-white py-12 border-b border-gray-100">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-sal-navy mb-8">Awards & Accreditation</h2>
      <div className="flex justify-center items-center w-full overflow-hidden">
        <img 
          src="/src/assets/nabh-strip.png" 
          alt="Accreditations including NABH and NABL" 
          className="max-h-24 md:max-h-32 w-auto object-contain mix-blend-multiply"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement!.innerHTML = '<div class="flex items-center gap-4 bg-gray-50 rounded-xl px-8 py-5 border border-gray-200 shadow-sm"><div class="text-sal-red"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg></div><div class="text-left"><p class="text-sal-navy font-bold text-lg">NABH & NABL</p><p class="text-gray-600 text-sm">National Accreditation Board for Hospitals</p></div></div>';
          }}
        />
      </div>
    </div>
  </section>
);

export default AccreditationStrip;
