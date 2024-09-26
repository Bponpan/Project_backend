import * as React from "react";
import Link from 'next/link';
import Image from 'next/image';
const pictu = '/path/to/pictu.jpg';  // ตั้งค่าเป็น path ของรูปภาพที่ถูกต้อง
const balls = '/path/to/balls.jpg';  // ตั้งค่าเป็น path ของรูปภาพที่ถูกต้อง


function MyNewComponent() {
  return (
    <header className="flex flex-col pb-12 bg-white">
      <nav>
      <div className="bg-[#70C174] bg-cover p-8 ">
        <div className="text-white text-5xl xl:font-serif font-bold">
          <Link href="/page">DEMISTORY SYSTEM</Link></div>
      </div>

      <div className="bg-green-200 flex grid-cols-2 gap-4 place-items-stretch px-10">
        <div className="flex justify-between gap-px px-8">
          <Image src={pictu} alt="" width="85" height="85" ></Image>
        </div>

        <div className="px-10">
          <div className="text-green-50 text-base font-semibold my-10 ">
            <Link href="/report_repair">Report repair</Link>
            </div>
        </div>

        <div className="px-10 ">
          <div className="text-green-50 text-base font-semibold relative my-10">
          <Link href="/report_list">Report List</Link>
          </div>
        </div>

        <div className="px-8 flex ml-auto items-center">
          <div className="px-5 flex justify-end ">
            <div className="relative my-8 ">
            <Image src={balls} alt="" width="30" height="30" ></Image>
            </div>
          </div>

          <div className="px-5 flex justify-end ">
            <div className="text-[#525560] font-semibold relative my-8">
            <div className="text-right text-sm">WORAMET Y</div>
            <div className="text-right text-sm">User</div>
            </div>
          </div>

          <div className="flex justify-self-center ">
            <div className="w-14 h-14 bg-[#525560] rounded-[10px] my-6 ">
            </div>
          </div>
        </div>
        
      </div>
      </nav>
      <div className="flex flex-col items-center self-center px-16 pt-5 pb-12 mt-20 w-full text-sm bg-gray-100 rounded-3xl max-w-[1070px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[814px]">
          <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col flex-1">
              <div className="text-black">Room number</div>
              <div className="justify-center py-5 mt-4 whitespace-nowrap bg-white text-zinc-600">
                {/* ใส่เลขห้อง */}
              </div>
            </div>
            <div className="flex flex-col flex-1 self-start">
              <div className="text-black">Name</div>
              <div className="justify-center py-5 mt-4 bg-white text-zinc-600">
                {/* ชื่อเจ้าของห้อง */}
              </div>
            </div>
          </div>
          <div className="mt-14 text-black max-md:mt-10 max-md:max-w-full">
            Description
          </div>
          <form>
            <label htmlFor="description">
              <input
                type="text"
                id="description"
                placeholder="description"
                name="description"
                className="box-border flex relative flex-col shrink-0 self-center pb-52 pl-2.5 mt-5 -mr-px w-full h-auto rounded border border-solid border-stone-300 grow-0"
                required={false}
                aria-label="Description"
              />
            </label>
          </form>
          <button className="justify-center self-center px-8 py-4 mt-12 text-base font-medium text-right text-white whitespace-nowrap bg-green-400 rounded backdrop-blur-2xl max-md:px-5 max-md:mt-10">
            Submit
          </button>
        </div>
      </div>
    </header>
  );
}




export default MyNewComponent;
