const btn_temaDegistirici=document.querySelector("#themeToggle");
const tum_sayfa=document.querySelector("#mainHtml");
const ogrenci_gridi=document.querySelector("#studentGrid");
const ogr_sayisi= document.querySelector("#studentCount");
const ogr_filtrele= document.querySelector("#searchInput");

btn_temaDegistirici.addEventListener("click",()=>tum_sayfa.classList.toggle("dark"));
console.log("ogrenciler");

function ogrencileri_goster(ogr_liste){
    ogr_sayisi.innerText=`${ogr_liste.length} KAYIT`;
    ogrenci_gridi.innerHTML="";
    ogr_liste.forEach(ogr => {
        console.log(ogr.adSoyad);

        let ogrenci_card= `
                        <div class="relative shadow-xl w-32 h-32 mb-5 bg-gray-50 dark:bg-gray-900 rounded-full overflow-hidden border-2 border-transparent group-hover:border-blue-500 transition-colors mx-auto">
                            <img src="${ogr.avatarNormal}" 
                                class="absolute inset-0 w-full h-full object-cover transition-all duration-500 z-20 group-hover:opacity-0 group-hover:-translate-y-8" alt="normal">
                            <img src="${ogr.avatarHover}" 
                                class="absolute inset-0 w-full h-full object-cover transition-all duration-500 z-10 opacity-0 scale-95 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0" alt="hover">
                        </div>

                        <div class="space-y-0.5 text-left w-full">
                            <h3 class="font-black text-xl leading-tight group-hover:text-blue-600 transition-colors capitalize">
                                ${ogr.adSoyad}
                            </h3>
                            <p class="text-sm font-bold text-blue-500 font-mono tracking-tighter">Okul No: ${ogr.no}</p>
                            <p class="text-xs font-semibold text-gray-400">${ogr.sinif}</p>
                            
                            <div class="mt-3 pt-3 border-t dark:border-gray-700">
                                <p class="text-[13px] text-gray-600 dark:text-gray-300 leading-tight">${ogr.alan}</p>
                                <p class="text-[13px] font-bold text-slate-800 dark:text-slate-200 leading-tight italic">${ogr.dal}</p>
                            </div>
                        </div>
                `;
            const card=document.createElement("div");
            card.className="group shadow-md bg-white dark:bg-gray-800 border dark:border-gray-700 p-5 rounded-[2rem] hover:shadow-xl transition-all duration-300 relative overflow-hidden";
            card.innerHTML=ogrenci_card;
            ogrenci_gridi.appendChild(card);
    });
}


ogr_filtrele.addEventListener("input",(e)=>{
    const girilen=e.target.value.toLowerCase();
    const suzulenListe=ogrenciler.filter(ogr=>ogr.adSoyad.toLowerCase().includes(girilen));
    console.log(suzulenListe);
    ogrencileri_goster(suzulenListe);
});
ogrencileri_goster(ogrenciler);