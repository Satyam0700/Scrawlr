import React from "react";

const page = () => {
  return (
    <div className="px-6 xs:px-8 mt-20 sm:px-16 py-10 flex flex-col gap-5">
      <h1 className="body-text text-gradient_blue-purple !font-bold">
        Privacy Policy
      </h1>
      <p className="text-white-800 text-sm">
        This page is used to inform website visitors regarding our policies with
        the collection, use, and disclosure of Personal Information if anyone
        decided to use our Service, the Scrawlr website.
      </p>
      <p className="text-white-800 text-sm">
        If you choose to use our Service, then you agree to the collection and
        use of information in relation with this policy. The Personal
        Information that we collect are used for providing and improving the
        Service. We will not use or share your information with anyone except as
        described in this Privacy Policy.
      </p>
      <p className="text-white-800 text-sm">
        The terms used in this Privacy Policy have the same meanings as in our
        Terms and Conditions, which is accessible at Scrawlr.com, unless
        otherwise defined in this Privacy Policy.
      </p>

      <h2 className="text-lg font-semibold text-white">
        Information Collection and Use
      </h2>
      <p className="text-white-800 text-sm">
        For a better experience while using our Service, we may require you to
        provide us with certain personally identifiable information, including
        but not limited to your name, phone number, and postal address. The
        information that we collect will be used to contact or identify you.
      </p>

      <h2 className="text-lg font-semibold text-white">Log Data</h2>
      <p className="text-white-800 text-sm">
        We want to inform you that whenever you visit our Service, we collect
        information that your browser sends to us that is called Log Data. This
        Log Data may include information such as your computer's Internet
        Protocol ("IP") address, browser version, pages of our Service that you
        visit, the time and date of your visit, the time spent on those pages,
        and other statistics.
      </p>

      <h2 className="text-lg font-semibold text-white">Cookies</h2>
      <p className="text-white-800 text-sm">
        Cookies are files with small amount of data that is commonly used an
        anonymous unique identifier. These are sent to your browser from the
        website that you visit and are stored on your computer's hard drive.Our
        website uses these "cookies" to collection information and to improve
        our Service. You have the option to either accept or refuse these
        cookies, and know when a cookie is being sent to your computer. If you
        choose to refuse our cookies, you may not be able to use some portions
        of our Service.
      </p>
    </div>
  );
};

export default page;
