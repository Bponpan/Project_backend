<div className="flex flex-col items-center self-center px-16 pt-5 pb-12 mt-20 w-full text-sm ">
                    <div className="bg-[#EFF7F2] rounded-lg px-20">
                    <div className="flex flex-col max-w-full w-[814px]">
                    <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full my-10">
                        <div className="flex flex-col flex-1 px-8 ">
                        <div className="text-black">Room number</div>
                        <div className="justify-center py-5 mt-4 whitespace-nowrap bg-white text-zinc-600">
                          <div className="text-left pl-5 my-0"> 
                          {/* */}
                          </div>
                        </div>
                        </div>
                        <div className="flex flex-col flex-1 self-start px-8">
                        <div className="text-black">Name</div>
                        <div className="justify-center py-5 mt-4 bg-white text-zinc-600">
                            <div className="text-left pl-5 my-0"> 
                            <UserList></UserList>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="mt-14 text-black max-md:mt-10 max-md:max-w-full px-5">
                        Description
                    </div>
                    <form className="px-5">
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
                    <button className="justify-center self-center px-8 py-4 mt-12 text-base font-medium text-right text-white whitespace-nowrap bg-green-400 rounded backdrop-blur-2xl max-md:px-5 max-md:mt-10 my-8">
                        Submit
                    </button>
                    </div>
                    </div>
            </div>
