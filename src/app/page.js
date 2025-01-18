import Image from "next/image";
import Icon from "@mdi/react";
import { mdiLogin, mdiKeyVariant, mdiAccount } from "@mdi/js";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex h-screen">
        <div className="hidden md:flex md:w-6/12 login_bg"></div>

        <div className="flex w-full md:w-6/12 justify-center items-center">
          <div>
            <h1 className="text-3xl font-extrabold text-center text-gray-900">
              Welcome to E-commerce
            </h1>
            <p className="text-lg text-gray-600 text-center mt-4">
              This is a sample website. You can customize it as per your needs.
            </p>
            <form className="max-w-sm mx-auto py-10 space-y-3">
              <div className="relative">
                <input
                  type="email"
                  className="peer py-3 px-4 ps-11 block w-full bg-purple-100 border-transparent rounded-lg text-sm focus:border-fuchsia-200 focus:ring-fuchsia-200 focus:outline focus:outline-2 focus:outline-fuchsia-200 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Enter name"
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                  <Icon
                    path={mdiAccount}
                    size={0.8}
                    className="text-gray-400"
                  />
                </div>
              </div>

              <div className="relative">
                <input
                  type="password"
                  className="peer py-3 px-4 ps-11 block w-full bg-purple-100 border-transparent rounded-lg text-sm focus:border-fuchsia-200 focus:ring-fuchsia-200 focus:outline focus:outline-2 focus:outline-fuchsia-200 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Enter password"
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                  <Icon
                    path={mdiKeyVariant}
                    size={0.7}
                    className="text-gray-400"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div class="flex items-center me-4">
                  <input
                   
                    id="purple-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-fuchsia-600 bg-gray-100 border-gray-300 rounded focus:ring-fuchsia-500 dark:focus:ring-fuchsia-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="purple-checkbox"
                    className="ms-2 text-sm font-medium text-fuchsia-500 dark:text-fuchsia-600"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <Link
                    href="#"
                    className="font-semibold text-fuchsia-600 hover:text-fuchsia-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <button
                type="submit"
                className="flex w-full justify-center items-center py-2.5 text-sm font-medium text-white bg-fuchsia-400 rounded-lg border border-fuchsia-500 hover:bg-fuchsia-500 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-fuchsia-400 dark:hover:bg-fuchsia-500 dark:focus:ring-fuchsia-500"
              >
                <Icon path={mdiLogin} size={0.8} className="me-2" />
                Login
              </button>
            </form>
            <div className="text-sm text-center">
              Not a Member?
                  <Link
                    href="#"
                    className="ms-2 font-semibold text-fuchsia-600 hover:text-fuchsia-500"
                  >
                    Register Now!
                  </Link>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}
