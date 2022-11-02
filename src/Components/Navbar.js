import React from "react";

export default function Navbar() {
  return (
    <div>
      <header aria-label="Site Header" className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="flex gap-2 text-[#5e6572] text-lg" href="/">
                <svg
                  width="25"
                  height="35"
                  viewBox="0 0 62 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2060_4064)">
                    <rect width="62" height="70" fill="#FFD819" />
                    <path
                      d="M48.5067 21.5605L41.0058 15.2578L51.1638 9.92578L62 15.9688L48.5067 21.5605V21.5605ZM26.5714 16.6934L32.896 12.8379L37.6982 17.5684L30.0312 21.5332L26.5714 16.6934V16.6934ZM17.5621 17.5957L21.9768 14.5742L24.3571 18.457L19.2781 21.5332L17.5621 17.5957ZM14.3375 29.6543L13.1196 24.8965L17.2161 22.3945L19.029 27.2207L14.3375 29.6543V29.6543ZM11.4036 18.2109L14.7112 15.7363L15.9429 19.0176L12.2478 21.5195L11.4036 18.2109V18.2109ZM8.16518 28.2324L7.66696 24.3496L10.7531 22.2305L11.5973 26.1543L8.16518 28.2324ZM3.93036 30.502L6.80893 28.752L7.26562 33.3184L4.09643 34.959L3.93036 30.502V30.502ZM0.19375 36.6406L2.85089 35.2461L2.90625 40.4687L0 41.6719L0.19375 36.6406ZM8.37277 44.748L4.45625 45.8828L4.23482 39.4844L7.70848 38.0215L8.37277 44.748ZM13.7009 35.9844L9.39687 37.7617L8.67723 32.1836L12.4692 30.2148L13.7009 35.9844ZM17.05 51.543L11.2929 52.3496L10.1719 43.668L15.0433 42.1914L17.05 51.543ZM20.9942 32.416L23.9281 40.2227L17.5344 42.082L15.6384 34.6855L20.9942 32.416V32.416ZM32.8545 63.9297L23.0424 63.4785L19.6795 50.3809L27.3187 49.2051L32.8545 63.9297V63.9297ZM21.1049 25.6895L26.9451 22.627L30.8201 28.9023L23.7897 31.8145L21.1049 25.6895ZM26.779 38.6641L35.2625 36.1074L42.5696 47.9473L31.5259 49.4922L26.779 38.6641V38.6641ZM33.8924 26.9609L43.2062 23.0234L52.271 31.9648L40.0094 35.5469L33.8924 26.9609V26.9609Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2060_4064">
                      <rect width="62" height="70" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                EightUp
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Site Nav" className="hidden md:block">
                <ul className="flex text-[#5e6572] items-center gap-6 text-sm">
                  <li>
                    <a className="transition hover:text-gray-500/75" href="/">
                      About
                    </a>
                  </li>

                  <li>
                    <a className="transition hover:text-gray-500/75" href="/">
                      Careers
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <a
                    className="rounded-md bg-[#ffd400] px-5 py-2.5 text-sm font-medium text-[#5e6572] shadow"
                    href="/"
                  >
                    Login
                  </a>

                  <div className="hidden sm:flex">
                    <a
                      className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#5e6572]"
                      href="/"
                    >
                      Register
                    </a>
                  </div>
                </div>

                <div className="block md:hidden">
                  <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="black"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
