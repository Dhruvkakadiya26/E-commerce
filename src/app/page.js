import Image from "next/image";

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
          </div>         
        </div>
      </div>
    </div>
  );
}
