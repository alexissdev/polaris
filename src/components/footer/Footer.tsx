import config from "@/libs/config/config";

export default function Footer() {
  return (
    <footer className="bg-primary shadow mt-5">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-start">
          {/*           <img/> Add the icon of web. */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            {config.information.companyName}
          </span>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-400 sm:text-center">
          © 2023{" "}
          <a href="#" className="hover:underline">
            {config.information.companyName}
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
