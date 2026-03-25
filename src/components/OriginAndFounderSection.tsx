import { Lightbulb, Heart, Leaf, Globe, BookOpen, Building2, Target, ShieldCheck, Star } from 'lucide-react';

export default function OriginAndFounderSection() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                
                {/* 區塊一：峰會緣起 (中英雙語對照) */}
               <div id="origin" className="mb-24 animate-on-scroll is-visible scroll-mt-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-blue-900 mb-4">起心動念</h2>
                        <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
                        {/* 中文版 */}
                        <div className="space-y-4 text-slate-600 leading-relaxed text-justify">
                            <p>在科技浪潮席捲全球的今日，掌握先機、洞悉未來趨勢，成為各國競逐的焦點。台灣，作為全球科技產業的重要樞紐，更需要一個平台，匯聚國際頂尖智慧，引領科技創新，邁向更美好的未來。</p>
                            <p>有鑑於此，「諾科獎國際文教交流協會」將於 2025 年舉辦首屆「諾科獎台北峰會」。</p>
                            <p>本次峰會以「超級運算改變研究方式AI」為主題，期望搭建一個國際級的交流平台，邀請3位諾貝爾獎、1位圖靈獎得主等世界級科學巨擘，以及各領域的專家學者、企業領袖齊聚一堂，共同探討人工智慧、量子計算、生物科技等前瞻科技的發展趨勢，以及如應對科技進步帶來的挑戰與機遇。</p>
                            <p>峰會不僅是國際頂尖科技的展示平台，更是台灣與世界接軌的重要橋樑。我們相信，透過「2025 諾科獎台北峰會」，將能激發台灣的科技創新能量，促進國際科技合作，讓台灣在全球科技舞台上，扮演更舉足輕重的角色！</p>
                            <p className="font-bold text-blue-800 mt-4">「2025 諾科獎台北峰會」，邀請您一同見證科技的力量，共創美好未來！</p>
                        </div>
                        {/* 英文版 */}
                        <div className="space-y-4 text-slate-500 leading-relaxed text-justify md:border-l md:border-slate-200 md:pl-12">
                            <h3 className="text-xl font-bold text-slate-700 mb-4">2025 Nobel Prize Taipei Summit Origin</h3>
                            <p>Today, as the wave of science and technology sweeps across the world, seizing opportunities and understanding future trends has become the focus of competition among countries. Taiwan, as an important hub of the global technology industry, needs a platform to gather top international wisdom, lead technological innovation, and move towards a better future.</p>
                            <p>In view of this, the "Nobel Prize International Cultural and Educational Exchange Association" will hold the first "Nobel Prize Taipei Summit" in 2025.</p>
                            <p>With the theme of "Supercomputing Changes Research Methods", this summit hopes to build an international exchange platform and invite world-class scientific giants such as Nobel Prize and Turing Award winners, as well as experts, scholars, and business leaders in various fields to gather together, to jointly discuss the development trends of forward-looking technologies such as artificial intelligence, quantum computing, and biotechnology, as well as how to deal with the challenges and opportunities brought about by scientific and technological progress.</p>
                            <p>The summit is not only a display platform for top international technologies, but also an important bridge connecting Taiwan with the world. We believe that through the "2025 Nobel Prize Taipei Summit", Taiwan's scientific and technological innovation energy will be stimulated, international scientific and technological cooperation will be promoted, and Taiwan will play a more decisive role on the global scientific and technological stage!</p>
                            <p className="font-bold text-slate-700 mt-4">"2025 Nobel Prize Taipei Summit" invites you to witness the power of technology and create a better future together!</p>
                        </div>
                    </div>
                </div>

                {/* 區塊二：會長的話 */}
                <div id="founder" className="animate-on-scroll is-visible delay-100 scroll-mt-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-blue-900 mb-4">會長的話｜我們為何而來</h2>
                        <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
                        <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
                            <strong className="text-blue-800">一、我們的起心動念：</strong>諾科獎的誕生，不是為了一場活動，而是一個信念的開始。我們相信，台灣不只是科技的島，更是一片孕育智慧的土地。我們的使命，是讓知識成為公益的力量，讓科學成為社會前進的語言。從城市到鄉鎮，從學校到企業，從研究室到世界的舞台，諾科獎是一條橋，讓思想、文化與行動得以交會。
                        </p>
                    </div>

                    {/* 核心信念卡片群組 */}
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition group">
                            <Lightbulb className="w-10 h-10 text-amber-500 mb-6 group-hover:scale-110 transition transform" />
                            <h4 className="text-xl font-bold text-slate-800 mb-4">二、核心信念：科學為人</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">科學不是冰冷的理性，而是一種理解與改善人類生活的方式。每一項研究、每一次實驗、每一場對話，都承載著對社會與生命的尊重。我們以科學為語言，讓知識走入生活，讓理解與關懷並行，讓世界的進步回到人的本質。</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition group">
                            <Heart className="w-10 h-10 text-red-500 mb-6 group-hover:scale-110 transition transform" />
                            <h4 className="text-xl font-bold text-slate-800 mb-4">三、核心信念：智慧為愛</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">真正的智慧，不在於知識的多少，而在於能以愛為起點。懂得傾聽、尊重與創造，是文明向前的底蘊。當理解取代偏見，思想才會有深度。智慧是一種願意看見他人、承擔未來的力量。它是一股溫厚而堅定的力量。</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition group">
                            <Leaf className="w-10 h-10 text-green-600 mb-6 group-hover:scale-110 transition transform" />
                            <h4 className="text-xl font-bold text-slate-800 mb-4">四、核心信念：永續為志</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">諾科獎追求的不是掌聲，而是傳承。我們要建立的不只是活動，而是一種持續的文化能量。讓青年、學術與產業彼此連結，形成共學、共創、共榮的循環。唯有讓理想成為文化，文化才能成為力量。</p>
                        </div>
                    </div>

                    {/* 連結力量卡片群組 */}
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-md hover:bg-blue-800 transition group">
                            <Globe className="w-10 h-10 text-blue-300 mb-6 group-hover:rotate-12 transition transform" />
                            <h4 className="text-xl font-bold mb-4">五、國際連結</h4>
                            <p className="text-blue-100 text-sm leading-relaxed">世界的知識，應該彼此流動。我們與全球頂尖的學者、科學家、思想家同行，共學與共創。讓世界的智慧進入台灣，也讓台灣的精神走向世界。我們所追求的，不是被看見，而是能夠共鳴。</p>
                        </div>
                        <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-md hover:bg-blue-800 transition group">
                            <BookOpen className="w-10 h-10 text-blue-300 mb-6 group-hover:rotate-12 transition transform" />
                            <h4 className="text-xl font-bold mb-4">六、學術連結</h4>
                            <p className="text-blue-100 text-sm leading-relaxed">學術不該停留於學院，而應走進社會。我們與各大學、研究機構攜手，讓知識在生活中被理解，在行動中被實踐。研究的價值在於改變的可能，諾科獎的存在，是為了讓學術的語言能被社會聽見。</p>
                        </div>
                        <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-md hover:bg-blue-800 transition group">
                            <Building2 className="w-10 h-10 text-blue-300 mb-6 group-hover:rotate-12 transition transform" />
                            <h4 className="text-xl font-bold mb-4">七、企業連結</h4>
                            <p className="text-blue-100 text-sm leading-relaxed">企業的投入是一種共同的志向。我們與企業並肩同行，讓科技、環保、醫療等領域的力量相互對話，找到新的意義與責任。每一個選擇永續的企業，都是文明的推動者與這個時代的知識實踐者。</p>
                        </div>
                    </div>

                    {/* 願景與承諾 */}
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200">
                            <Target className="w-8 h-8 text-slate-700 mb-4" />
                            <h4 className="text-lg font-bold text-slate-800 mb-3">八、社會願景</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">當世界提起諾科獎，我們希望他們看到的是一種精神。台灣能用科學表達思想，用文化傳遞價值。我們的願景，是讓世界看到台灣的努力，也讓台灣的努力成為世界的希望。</p>
                        </div>
                        <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200">
                            <ShieldCheck className="w-8 h-8 text-slate-700 mb-4" />
                            <h4 className="text-lg font-bold text-slate-800 mb-3">九、我們的承諾</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">我們將持續以國際學術為軸，以地方行動為根，讓科學精神走入社會。我們不追逐風潮，而是靜靜地為時代播種，讓理想在現實中生長，讓台灣的文化成為未來文明的一部分。</p>
                        </div>
                        <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200">
                            <Star className="w-8 h-8 text-slate-700 mb-4" />
                            <h4 className="text-lg font-bold text-slate-800 mb-3">十、我們的信仰</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">諾科獎存在的理由，是讓世界重新理解從知識到人性。真正的科學，是帶著信念與責任的行動。諾科獎的使命，不是讓科學變成舞台，而是讓舞台成為科學的起點。</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}