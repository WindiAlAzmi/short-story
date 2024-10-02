export default function FlowGlam() {
  return (
    <div className="mx-auto md:my-4 md:px-0 px-4 mt-14 md:mt-20 md:text-[22px] text-[14px] gap-6 font-medium capitalize flex flex-col w-full max-w-7xl">
      <h4 className="md:text-left md:px-40 px-0 md:text-4xl text-2xl mb-5 mt-8">Alur</h4>
      <div className="flex md:px-40 px-3 gap-10 md:gap-10 flex-col w-full">
        {/* Alur  */}
        <div className="flex flex-col w-full">
          {/* Title */}
          <div className="flex flex-row w-full gap-4">
            <h4 className="text-left">1</h4>
            <h4 className="text-left md:w-40 w-full">Sesi Demonstrasi</h4>
          </div>
          <h4 className="text-left text-[#21272A] mt-4 px-8 md:text-base text-xs">
            Di sesi ini, peserta akan menyaksikan mentor melakukan makeup pada
            klien secara langsung. Mentor akan menjelaskan langkah-langkah,
            teknik yang digunakan, serta produk yang dipilih. Peserta akan
            memiliki kesempatan untuk mengajukan pertanyaan selama atau setelah
            demonstrasi
          </h4>
        </div>
        {/* Alur 2 */}
        <div className="flex flex-col w-full items-end justify-end">
          {/* Title */}
          <div className="flex flex-row w-full md:pr-0 pr-10 justify-end  gap-4">
            <h4 className="text-left">2</h4>
            <h4 className="md:text-left md:w-40 ">Sesi Praktik</h4>
          </div>
          <h4 className="text-right text-[#21272A] md:w-5/6 w-full mt-4 px-8 md:text-base text-xs">
            Setelah sesi demonstrasi, peserta akan diberikan kesempatan untuk
            berlatih teknik yang telah diperlihatkan. Mereka bisa mencoba teknik
            tersebut di wajah klien lain (jika tersedia) atau di wajah mereka
            sendiri. Mentor akan memberikan bimbingan langsung, memberikan umpan
            balik, dan menjawab pertanyaan peserta.
          </h4>
        </div>
      </div>
    </div>
  );
}
