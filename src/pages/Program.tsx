import { Calendar, MapPin, Users, Globe } from 'lucide-react';

const events = [
  {
    date: "2026年5月13日",
    location: "台北",
    title: "台北科學與創新對話",
    venue: "國立臺北科技大學",
    participants: "大學校長、學者、研究人員、學生與受邀嘉賓。",
    englishTitle: "Taipei Dialogue on Science and Innovation"
  },
  {
    date: "2026年5月14日",
    location: "宜蘭",
    title: "宜蘭百年科學與教育對話",
    venue: "國立宜蘭大學",
    participants: "大學校長、學者、研究人員、學生與受邀嘉賓。",
    englishTitle: "Yilan Centennial Dialogue on Science and Education"
  },
];

export default function Program() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* 標題區 */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-800">活動內容</h2>
          <p className="text-xl text-slate-500 font-light mt-2 tracking-wide">Nobel Science Dialogue Series</p>
          <div className="w-12 h-1 bg-blue-600 mt-6"></div>
        </div>

        {/* 活動內容列表 */}
        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-blue-600 font-bold">
                    <Calendar className="w-5 h-5" />
                    <span className="text-lg">{event.date} | {event.location}</span>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-1">{event.title}</h3>
                    <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">{event.englishTitle}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      <span className="text-sm font-medium">活動地點：{event.venue}</span>
                    </div>
                    <div className="flex items-start gap-2 text-slate-600">
                      <Users className="w-4 h-4 text-slate-400 mt-1" />
                      <span className="text-sm leading-relaxed">參與對象：{event.participants}</span>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block">
                   <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-200 group-hover:text-blue-500 transition">
                      <Globe className="w-8 h-8" />
                   </div>
                </div>
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}