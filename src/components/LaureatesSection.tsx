interface Laureate {
  id: number;
  nameCH: string;
  nameEN: string;
  title: string;
  image: string;
  bio: string;
}

interface Props {
  pageTitle?: string;
  laureates: Laureate[];
}

export default function LaureatesSection({ pageTitle = "科學大師陣容", laureates }: Props) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 標題區塊 */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">{pageTitle}</h2>
          <div className="w-12 h-1 bg-[#002B5B] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* 橫向並排網格：手機版1欄、平板2欄、電腦4欄 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {laureates.map((person) => (
            <div key={person.id} className="flex flex-col items-center text-center group">
              
              {/* 照片區塊：限制最大寬度，確保手機版照片大小適中 */}
              <div className="relative w-2/3 sm:w-full max-w-[240px] aspect-[3/4] mb-8">
                {/* 底部旋轉裝飾框 */}
                <div className="absolute inset-0 border-2 border-slate-200 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
                {/* 照片本體 */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-50">
                  <img 
                    src={person.image} 
                    alt={person.nameCH} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </div>

              {/* 文字資訊區塊 */}
              <div className="flex flex-col items-center w-full px-2">
                
                {/* 中英文姓名 */}
                <h3 className="text-xl font-bold text-slate-800 mb-1">{person.nameCH}</h3>
                <p className="text-xs font-bold text-[#002B5B] uppercase tracking-widest mb-4">
                  {person.nameEN}
                </p>
                
                {/* 分隔線與頭銜 (取代原本的底色橢圓框) */}
                <div className="w-8 h-[1px] bg-slate-200 mb-3"></div>
                <p className="text-[11px] text-slate-400 font-medium tracking-widest mb-4">
                  {person.title}
                </p>
                
                {/* 簡介 */}
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">
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