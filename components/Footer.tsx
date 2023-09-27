import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@constants/constants";

const Footer = () => {
  return (
    <footer className="border-grey-100 mt-5 flex flex-col border-t text-black-100">
      <div className=" flex flex-wrap justify-between gap-5 px-6 py-10 max-md:flex-col sm:px-16">
        <div className="flex flex-col items-start justify-start gap-6">
          <Image
            src="./logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className=" text-base text-gray-700">
            Carhub 2023 <br />
            All Rights Reserved &copy;
          </p>
        </div>

        <div className=" footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className=" font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  href={item.url}
                  key={item.title}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between border-t border-gray-100 py-10 sm:px-16">
        <p>Carhub 2023. All Rights Reserved &copy;</p>
        <div className=" footer__copyrights-link">
          <Link href="/" className=" text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className=" text-gray-500">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
