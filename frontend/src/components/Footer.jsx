import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export default function FooterComponent() {
  const date = new Date();
  return (
    <Footer bgDark>
      <div className="w-full pt-2">
        <div className="mt-4 ml-4">
          <Link
            to={"/"}
            className="self-center whitespace-nowrap text-lg sm:text-xl font-bold mr-5"
          >
            <span className="px-2 mr-1 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Yuvraj's
            </span>
            <span className="text-white">Blog</span>
          </Link>
        </div>
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Company" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Careers</Footer.Link>
              <Footer.Link href="#">Brand Center</Footer.Link>
              <Footer.Link href="#">Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="help center" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Discord Server</Footer.Link>
              <Footer.Link href="#">Twitter</Footer.Link>
              <Footer.Link href="#">Facebook</Footer.Link>
              <Footer.Link href="#">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="download" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">iOS</Footer.Link>
              <Footer.Link href="#">Android</Footer.Link>
              <Footer.Link href="#">Windows</Footer.Link>
              <Footer.Link href="#">MacOS</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Yuvraj™" year={date.getFullYear()} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/rathore.singh19/"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://www.instagram.com/rathoresingh19/"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="https://twitter.com/YuvrajS28338738"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="https://github.com/rathoreyuvraj19"
              icon={BsGithub}
            />
          </div>
        </div>
      </div>
    </Footer>
    // <Footer container className="border border-t-8 border-teal-500">
    //   <div>
    //     <div>
    //       <div>
    //         <Link
    //           to={"/"}
    //           className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
    //         >
    //           <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
    //             Yuvraj's
    //           </span>
    //           Blog
    //         </Link>
    //       </div>
    //       <div className="grid grid-cols-2 gap-3 sm:mt-4 sm:grid-cols-3">
    //         <Footer.Title title="About"></Footer.Title>
    //         <Footer.LinkGroup>
    //           <Footer.Link>Balle Balle</Footer.Link>
    //         </Footer.LinkGroup>
    //       </div>
    //     </div>
    //   </div>
    //   Footer
    // </Footer>
  );
}
