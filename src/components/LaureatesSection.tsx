import { Award } from 'lucide-react';

// 定義資料型別，讓 TypeScript 保護我們
interface Laureate {
  id: number;
  nameCH: string;
  nameEN: string;
  title: string;
  bio: string;
  awards: { year: string; detail: string }[];
  image: string;
}

interface Props {
  pageTitle: string;
  laureates: Laureate[];
}

export default function LaureatesSection({ pageTitle, laureates }: Props) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800">{pageTitle}</h2>
          <div className="w-12 h-1 bg-blue-600 mt-4"></div>
        </div>

        <div className="space-y-32">
          {laureates.map((person) => (
            <div key={person.id} className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start">
              <div className="w-full md:w-2/5 shrink-0">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-slate-100 rounded-2xl -z-10"></div>
                  <img src={person.image} alt={person.nameCH} className="w-full aspect-[4/5] object-cover rounded-xl shadow-lg grayscale-[10%] group-hover:grayscale-0 transition-all duration-500" />
                </div>
              </div>
              <div className="w-full md:w-3/5">
                <div className="bg-[#003399] text-white inline-block px-6 py-1.5 text-sm tracking-widest mb-6">{person.title}</div>
                <h3 className="text-3xl font-bold text-[#003399] mb-1">{person.nameCH}</h3>
                <p className="text-2xl font-bold text-blue-900/80 mb-8">{person.nameEN}</p>
                <p className="text-slate-600 leading-relaxed text-justify mb-10">{person.bio}</p>
                <div className="border border-blue-100 rounded-lg overflow-hidden bg-blue-50/30">
                  <table className="w-full text-sm text-left">
                    <tbody>
                      {person.awards.map((award, idx) => (
                        <tr key={idx} className="border-b border-blue-100 last:border-0">
                          <td className="px-6 py-4 font-bold text-blue-800 w-28">{award.year}</td>
                          <td className="px-6 py-4 text-slate-700">{award.detail}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}