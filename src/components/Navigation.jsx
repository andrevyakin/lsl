import logo from '../assets/lskNoBg.png'

const Navigation = () => {

    return (
        <nav className="sticky top-1.5 opacity-70 w-full z-50 bg-linear-to-b from-[#00d9eb] to-[#016bfb] min-w-[742px]">
            <div className="mx-auto px-2 md:py-5 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/*Mobile menu button*/}
                        <button type="button"
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                                aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            {/*
                              Icon when menu is closed.
                  
                              Menu open: "hidden", Menu closed: "block"
                            */}
                            <svg className="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                            </svg>
                            {/*
                              Icon when menu is open.
                  
                              Menu open: "block", Menu closed: "hidden"
                            */}
                            <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                    {/*<div className="flex flex-1 items-center justify-center">
                        <div className="flex justify-start items-center">
                            <img className="h-14 w-auto sm:hidden"
                                 src={logo}
                                 alt="Your Company"/>
                        </div>*/}
                    <div className="hidden flex-1 sm:ml-6 sm:block">
                        <div className="flex justify-evenly">
                            {/* Current: "bg-gray-900 text-white", D1efault: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                            <a href="#header"
                               className="rounded-md px-3 py-2 text-2xl font-medium text-[#f3fcff] hover:bg-gray-700 hover:text-white">О
                                нас</a>
                            <a href="#products"
                               className="rounded-md px-3 py-2 text-2xl font-medium text-[#f3fcff] hover:bg-gray-700 hover:text-white">Продукция</a>
                            <a href="#footer"
                               className="rounded-md px-3 py-2 text-2xl font-medium text-[#f3fcff] hover:bg-gray-700 hover:text-white">Контакты</a>
                        </div>
                    </div>
                    {/*</div>*/}

                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state. */}
            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}

                    <a href="#way"
                       className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">О
                        нас</a>
                    <a href="#products"
                       className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Продукция</a>
                    <a href="#footer"
                       className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Контакты</a>
                </div>
            </div>
        </nav>

    )
}
export default Navigation
