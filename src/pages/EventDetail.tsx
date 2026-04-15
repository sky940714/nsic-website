import { useParams, useNavigate } from 'react-router-dom';
import { archiveData } from '../components/DialogueArchive';
import type { EventType } from '../components/DialogueArchive'; 

// 輪播套件
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // 尋找對應的活動資料
  const event = (archiveData as EventType[]).find(e => e.id === Number(id));

  if (!event) {
    return (
      <div className="py-20 text-center text-slate-500">
        找不到活動內容
      </div>
    );
  }

  return (
    // pt-32 確保不被導覽列壓到
    <div className="bg-white min-h-screen pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* 返回按鈕 */}
        <button 
          onClick={() => navigate(-1)}
          className="mb-10 text-[#002B5B] hover:text-blue-700 transition-colors flex items-center gap-2 font-medium group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> 返回歷年回顧
        </button>

        <div className="space-y-6">
          {/* 日期與地點 */}
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-[#002B5B] font-mono font-bold text-3xl">{event.date}</span>
            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full font-semibold">
              {event.location}
            </span>
          </div>

          {/* 標題 */}
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            {event.title}
          </h1>

          {/* 圖片輪播區塊 */}
          <div className="w-full rounded-3xl overflow-hidden shadow-xl my-10 bg-slate-50 border border-slate-100">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              className="aspect-video w-full"
            >
              {event.images?.map((src: string, index: number) => (
                <SwiperSlide key={index}>
                  <img 
                    src={src} 
                    alt={`${event.title}-${index}`} 
                    className="w-full h-full object-cover" 
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* 文字內容區塊（請確認這一段有在你的檔案裡） */}
          <div className="prose prose-slate max-w-none">
            {/* 活動簡介 */}
            <p className="text-xl text-slate-600 font-medium mb-6">
              {event.description}
            </p>
            
            <div className="h-[1px] w-full bg-slate-100 my-8"></div>
            
            {/* 活動詳情 */}
            <h4 className="text-lg font-bold text-slate-800 mb-4">活動詳情與紀錄</h4>
            <p className="text-slate-600 leading-loose text-justify whitespace-pre-wrap">
              {event.details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}