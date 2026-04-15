interface Laureate {
  id: number;
  nameCH: string;
  nameEN: string;
  title: string;
  image: string;
  bio: string;
}

interface Props {
  pageTitle: string;
  laureates: Laureate[];
}

export default function LaureatesSection({ laureates }: Props) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800">科學大師陣容</h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 橫向並排網格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {laureates.map((person) => (
            <div key={person.id} className="text-center group">
              {/* 圓角正方形照片，縮小尺寸 */}
              <div className="relative w-70 h-90 mx-auto mb-6">
                <div className="absolute inset-0 border-2 border-blue-100 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform"></div>
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                  <img 
                    src={person.image} 
                    alt={person.nameCH} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-800">{person.nameCH}</h3>
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{person.nameEN}</p>
                <p className="text-[10px] text-slate-400 font-medium px-4 py-1 bg-slate-50 inline-block rounded-full">
                  {person.title}
                </p>
                {/* 介紹放在下方，字體縮小 */}
                <p className="text-xs text-slate-500 leading-relaxed mt-4 px-2 line-clamp-3 group-hover:line-clamp-none transition-all">
                  {person.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}