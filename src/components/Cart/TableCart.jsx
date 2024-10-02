import { Input } from "antd";
import { useState } from "react";
import styled from "styled-components";

const StyledInput = styled(Input)`
  &:focus {
    border-color: black !important;
    box-shadow: none !important;
  }
`;


export default function TableCart() {
  const [dataTicket, setDataTicket] = useState(0);

  return (
    <div className="w-full flex md:flex-col flex-col md:gap-20 gap-4 -mt-20 md:mt-0">
      <div className="container mx-auto p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse whitespace-nowrap mt-10">
            <thead className="border border-black text-[14px]">
              <tr className=" bg-white text-black">
                <th className="py-3 px-8  text-left">Kursus</th>
                <th className="py-3 px-8  text-left">Harga</th>
                <th className="py-3 px-8  text-left">Jumlah</th>
                <th className="py-3 px-8  text-left">Total Harga</th>
                <th className="py-3 px-8  text-left">AKsi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="min-w-[200px] md:min-w-[100px] md:w-[200px]">
                  <div className="flex flex-col py-10 text-[14px] text-left gap-4">
                    <img
                      src="/assets/img/pelatihan-1.png"
                      alt="activity"
                      className="w-full md:h-[100px] h-[120px] rounded-[10px]  cursor-pointer"
                    />
                    <h4>Makeup Sederhana By Uci</h4>
                  </div>
                </td>
                <td className="min-w-[100px] md:min-w-[100px] md:w-[200px] px-2">
                  <div className="text-center py-10 text-[14px]  gap-4">
                    Rp 50.000
                  </div>
                </td>
                <td className="min-w-[120px] md:min-w-[100px] md:w-[200px] ">
                  <div className="w-full justify-center flex flex-row gap-3 md:text-[12px] text-[12px] items-center">
                    <img
                      src="/assets/icons/minus-square.png"
                      alt="img"
                      className="md:w-[24px] md:h-[24px] cursor-pointer  w-[20px] h-[20px]"
                      onClick={() =>
                        dataTicket > 1 && setDataTicket(dataTicket - 1)
                      }
                    />{" "}
                    <h5>{dataTicket}</h5>
                    <img
                      src="/assets/icons/plus-square.png"
                      alt="img"
                      className="md:w-[24px] md:h-[24px] cursor-pointer  w-[20px] h-[20px]"
                      onClick={() => setDataTicket(dataTicket + 1)}
                    />{" "}
                  </div>
                </td>
                <td className="min-w-[120px] md:min-w-[100px] md:w-[200px]">
                  {" "}
                  <div className="text-center py-10 text-[14px]  gap-4">
                    Rp 50.000
                  </div>
                </td>
                <td>
                  <div className="w-full justify-center flex flex-row text-center py-10 text-[14px]  gap-4">
                    <img
                      src="/assets/icons/trash.png"
                      alt="img"
                      className="md:w-[24px] md:h-[24px] cursor-pointer  w-[20px] h-[20px]"
                    />{" "}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse whitespace-nowrap mt-10">
            <thead className="border border-black  text-[14px]">
              <tr className=" bg-black text-white text-left">
                <th className="py-3 px-8  text-left">Nama</th>
                <th className="py-3 px-8">Email</th>
                <th className="py-3 px-8">No HP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="min-w-[200px] md:min-w-[100px] md:w-[200px] px-4">
                  <div className="w-full flex flex-col py-10 text-[14px] text-left gap-4">
                    <StyledInput placeholder="Tulis Nama Kamu disini" />
                  </div>
                </td>
                <td className="min-w-[200px] md:min-w-[100px] md:w-[200px]  px-4  ">
                  <div className="w-full justify-center flex flex-row gap-3 md:text-[12px] text-[8px] items-center">
                    <StyledInput placeholder="Tulis Email disini" />
                  </div>
                </td>
                <td className="min-w-[200px] md:min-w-[100px] md:w-[200px]  px-4">
                  <div className="w-full justify-center flex flex-row gap-3 md:text-[12px] text-[8px] items-center">
                    <StyledInput placeholder="Tulis Nomer WA disini" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
