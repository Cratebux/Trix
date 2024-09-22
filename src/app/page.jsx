export default function Home() {
  return (
    <>
    <header
      className="header-paddings bg-paleGray flex items-center justify-between">
      <img src="./svg/logo-trix-black.svg" width="160" alt="trix logo" />
      <nav className="hidden lg:inline-block">
        <ul className="flex items-center gap-6 mr-6">
          <li><a href="#features">Features</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li className="mr-10"><a href="#">Why Choose Trix?</a></li>
          <li>
            <a href="/src/pages/sign-up.html">
              <button className="px-8 py-3 rounded-lg text-white bg-purple">
                <a href="/src/pages/sign-up.html"> Get Started </a>
              </button>
            </a>
          </li>
        </ul>
      </nav>
      {/* Mobile nav bar */}
      <div className="lg:hidden z-10">
        <button className="openBtn size-10">
          <img src="/svg/icon-hamburger-dark.svg" alt="icon hamburger" />
        </button>
        <button className="closeBtn hidden relative z-30 size-10">
          <img src="/svg/icon-close-dark.svg" alt="icon close" />
        </button>

        <ul
          className="menu hidden flex-col z-20 text-center items-center justify-center gap-6 absolute h-screen top-0 left-0 right-0 bg-[#ffffffc0] text-black [&_li]:text-xl">
          <li><a href="#">Features</a></li>
          <li><a href="#">How It Works</a></li>
          <li><a href="#">Why Choose Trix?</a></li>
          <li>
            <a href="/src/pages/sign-up.html">
              {/* onclick="window.location.href='./pages/get-started.html'" */}
              <button className="px-8 py-3 rounded-lg text-white bg-purple">
                <a href="/src/pages/sign-up.html"> Get Started </a>
              </button>
            </a>
          </li>
        </ul>
      </div>
      {/* Mobile nav bar */}
    </header>

    <main
      className="grid justify-center pt-20 text-center bg-paleGray overflow-hidden">
      <h1 className="font-bold text-3xl mb-3">
        Trix: Your Ultimate Reward Platform
      </h1>
      <p className="pb-10">
        Connecting Gamers and Users to Vendors for <br />
        Exclusive Rewards
      </p>
      <Link href="/src/pages/sign-up.html">
        <button className="px-8 py-3 rounded-lg text-white bg-purple">
          Get Started
        </button>
      </Link>
      <div className="flex lg:pr-20 justify-center lg:pb-0 pb-5">
        <img
          className="mx-auto mt-8 w-[80%] max-md:scale-[1.2]"
          src="/img/Hero-image2.png"
          alt="Phone" />
      </div>
    </main>

    <section className="grid paddings justify-center text-center">
      <h1 className="font-bold text-3xl mb-3">Unlock Rewards for Every Purchase</h1>
      <p>
        Shop at your favorite stores, upload your receipts, and earn points for
        every <br />
        transaction. Enjoy exclusive discounts, gift cards, and more! <br />
        Get Started I Learn More
      </p>
    </section>

    <section
      id="features"
      className="flex flex-col lg:flex-row lg:justify-between mt-10 w-screen max-w-[100vw]">
      <div className="lg:w-1/2 w-full paddings text-center lg:text-left">
        <p
          className="border-Dpurple font-bold bg-Hgrey border-2 border-dotted px-3 py-2 rounded-full inline">
          OUR FEATURES
        </p>
        <h1 className="font-semibold pb-3 text-3xl mt-10 pt-5">
          Track Your Progress, Crush Your Goals, and Earn Rewards!
        </h1>
        <p>Key features that propel your reward journey</p>

        <div className="grid md:grid-cols-2 gap-5 pt-20">
          <div className="border-paleGray px-5 py-5 border-2">
            <img className="mx-auto lg:mx-0" src="/svg/crown.svg" alt="" />
            <h1 className="font-bold pt-3">Exclusive Deals and Discounts</h1>
            <p>
              Collaborate with a diverse range of vendors to offer users special
              promotions and savings.
            </p>
          </div>
          <div className="border-paleGray px-5 py-5 border-2">
            <img className="mx-auto lg:mx-0" src="/svg/Steamless.svg" alt="" />
            <h1 className="font-bold pt-3">Seamless Navigation</h1>
            <p>
              Enjoy an intuitive, easy-to-use platform that simplifies shopping
              and earning rewards.
            </p>
          </div>
          <div className="border-paleGray px-5 py-5 border-2">
            <img className="mx-auto lg:mx-0" src="/svg/Go.svg" alt="" />
            <h1 className="font-bold pt-3">Rewards On the Go</h1>
            <p>
              Access Trix anytime, anywhere with our mobile app, ensuring you
              never miss an opportunity to earn points.
            </p>
          </div>
          <div className="border-paleGray px-5 py-5 border-2">
            <img className="mx-auto lg:mx-0" src="/svg/Save.svg" alt="" />
            <h1 className="font-bold pt-3">Seamless Navigation</h1>
            <p>
              Experience peace of mind with our secure, transparent transaction
              processes, protecting your data and purchases.
            </p>
          </div>
        </div>
      </div>

      <div
        id="dafault-carousel"
        className="lg:relative lg:w-1/2 h-[600px] md:h-[900px] max-h-[1200px] lg:h-auto"
        data-carousel="slide">
        {/* <!-- Carousel wrapper */}
        <div className="relative h-full overflow-hidden">
          {/* <!-- Item 1 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/img/carousel-image-1.png"
              className="w-full h-full max-md:object-contain"
              alt="..." />
          </div>
          {/* Item 2 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/img/carousel-image-2.png"
              className="w-full h-full max-md:object-contain"
              alt="..." />
          </div>
          {/* Item 3 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/img/carousel-image-3.png"
              className="w-full h-full max-md:object-contain"
              alt="..." />
          </div>
        </div>
      </div>
    </section>

    <section id="how-it-works" className="paddings grid">
      <div className="text-center pt-10">
        <p
          className="border-Dpurple mx-auto font-bold bg-Hgrey border-2 border-dotted px-3 py-2 rounded-full inline">
          HOW TO START
        </p>
        <h1 className="font-bold text-3xl pt-10 pb-3">
          Getting Started is Simple!
        </h1>
        <p>Easy steps to start earning rewards with Trix.</p>
      </div>

      <div
        className="mt-16 flex lg:flex-row gap-10 flex-col justify-evenly w-full px-10">
        <div className="text-center md:mt-32">
          <div
            className="bg-black size-14 p-4 flex items-center justify-center text-white mx-auto rounded-full">
            <p className="p-2 text-white text-2xl font-semibold">1</p>
          </div>
          <p className="font-bold pt-10 pb-3">Visit our Website</p>
          <p>Access Trix at <u>trix.ng</u></p>
        </div>
        <div className="text-center">
          <div
            className="bg-black size-14 p-4 flex items-center justify-center text-white mx-auto rounded-full">
            <p className="p-2 text-white text-2xl font-semibold">2</p>
          </div>
          <p className="font-bold pt-10 pb-3">Create and Claim ID</p>
          <p>
            Create your account and <br />
            start personalizing your <br />preferences!
          </p>
        </div>
        <div className="text-center md:mt-32">
          <div
            className="bg-black size-14 p-4 flex items-center justify-center text-white mx-auto rounded-full">
            <p className="p-2 text-white text-2xl font-semibold">3</p>
          </div>
          <p className="font-bold pt-10 pb-3">Visit Our Website</p>
          <p>
            Make purchases at our <br />partnered vendors and <br />
            upload your receipts.
          </p>
        </div>
        <div className="text-center">
          <div
            className="bg-black size-14 p-4 flex items-center justify-center text-white mx-auto rounded-full">
            <p className="p-2 text-white text-2xl font-semibold">4</p>
          </div>
          <p className="font-bold pt-10 pb-3">Analyze and Redeem</p>
          <p>
            Gain insights into your <br />
            progress and redeem <br />
            rewards.
          </p>
        </div>
      </div>
    </section>

    <section className="grid md:grid-cols-2 h-max">
      <div
        id="dafault-carousel"
        className="lg:relative md:mx-auto w-full h-[70vh] md:h-auto"
        data-carousel="slide">
        {/* Carousel wrapper */}
        <div className="relative h-full overflow-hidden">
          {/* Item 1 */}
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item>
            <img
              src="/img/carousel-image-4.png"
              className="w-full h-full object-cover"
              alt="..." />
          </div>
          {/* Item 2 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/img/carousel-image-5.png"
              className="w-full h-full object-cover"
              alt="..." />
          </div>
          {/* Item 3 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/img/carousel-image-6.png"
              className="w-full h-full object-cover"
              alt="..." />
          </div>
          {/* Item 4 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/img/carousel-image-7.png"
              className="w-full h-full object-cover"
              alt="..." />
          </div>
        </div>
      </div>

      <div
        id="controls-carousel"
        className="relative w-full bg-black"
        data-carousel="static">
        {/* Carousel wrapper */}
        <div
          className="relative flex items-stretch h-[70vh] overflow-hidden md:h-[76vh]">
          {/* Item 1 */}
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item="active">
            <div
              className="testimony w-full gap-8 paddings h-full flex flex-col items-start text-center lg:text-left justify-evenly">
              <img width="50" height="50" src="/svg/quote.svg" alt="quote" />
              <h2
                className="lg:text-4xl md:text-3xl text-2xl mt-8 lg:mt-0 font-medium">
                Since using Trix, I've earned incredible rewards for my everyday
                purchases!
              </h2>
              <div
                className="lg:text-3xl text-xl inline-block mx-auto lg:block lg:mx-0">
                Sarah J.
              </div>
              <span className="gap-3 flex mx-auto lg:mx-0">
                <img src="/svg/rating.svg" alt="rating" />
                <small className="underline text-base">Rating</small>
              </span>
            </div>
          </div>

          {/* Item 2 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <div
              className="testimony2 w-full gap-8 paddings flex flex-col items-start text-center lg:text-left justify-evenly">
              <img width="50" height="50" src="/svg/quote.svg" alt="quote" />
              <h2
                className="lg:text-4xl md:text-3xl text-2xl mt-8 lg:mt-0 font-medium">
                Trix is a must-have! I love how I can discover new vendors and
                deals while earning points for every purchase. Plus, the
                community vibe is awesome!
              </h2>
              <div
                className="lg:text-3xl text-xl inline-block mx-auto lg:block lg:mx-0">
                Chinwe I.
              </div>
              <span className="gap-3 flex mx-auto lg:mx-0">
                <img src="/svg/rating.svg" alt="rating" />
                <small className="underline text-base">Rating</small>
              </span>
            </div>
          </div>

          {/* Item 3 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <div
              className="testimony3 w-full gap-8 paddings flex flex-col items-start text-center lg:text-left justify-evenly">
              <img width="50" height="50" src="/svg/quote.svg" alt="quote" />
              <h2
                className="lg:text-4xl md:text-3xl text-2xl mt-8 lg:mt-0 font-medium">
                I’ve invited my friends to Trix, and we’re all earning points
                together! The community is awesome, and the TRX points keep
                adding up for bigger rewards.
              </h2>
              <div
                className="lg:text-3xl text-xl inline-block mx-auto lg:block lg:mx-0">
                Fatima S.
              </div>
              <span className="gap-3 flex mx-auto lg:mx-0">
                <img src="/svg/rating.svg" alt="rating" />
                <small className="underline text-base">Rating</small>
              </span>
            </div>
          </div>
        </div>

        {/* Slider controls */}
        <div className="relative flex items-center gap-5 p-8 bg-black">
          <hr className="border-t-2 w-[60%] text-white" />
          <button
            type="button"
            className="flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10">
              <svg
                width="25"
                height="20"
                viewBox="0 0 25 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.1416 3.34996C10.703 2.78858 10.703 1.87841 10.1416 1.31703C9.58025 0.755651 8.67007 0.755651 8.1087 1.31703L0.44203 8.9837C0.161341 9.26439 0.0209961 9.63227 0.0209961 10.0002C0.0209961 10.1951 0.0597877 10.3809 0.130072 10.5504C0.200221 10.72 0.304208 10.8788 0.44203 11.0166L8.1087 18.6833C8.67007 19.2447 9.58025 19.2447 10.1416 18.6833C10.703 18.1219 10.703 17.2117 10.1416 16.6504L4.92893 11.4377H23.5002C24.2941 11.4377 24.9377 10.7941 24.9377 10.0002C24.9377 9.20625 24.2941 8.56266 23.5002 8.56266H4.92893L10.1416 3.34996Z"
                  fill="white" />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10">
              <svg
                width="42"
                height="32"
                viewBox="0 0 42 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M24.6541 5.01336C23.7266 4.08587 23.7266 2.5821 24.6541 1.65461C25.5816 0.727111 27.0854 0.727111 28.0129 1.65461L40.6795 14.3213C41.607 15.2488 41.607 16.7525 40.6795 17.68L28.0129 30.3467C27.0854 31.2742 25.5816 31.2742 24.6541 30.3467C23.7266 29.4192 23.7266 27.9154 24.6541 26.9879L33.2664 18.3757H2.5835C1.27182 18.3757 0.208496 17.3123 0.208496 16.0007C0.208496 14.689 1.27182 13.6257 2.5835 13.6257H33.2664L24.6541 5.01336Z"
                  fill="white" />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </section>

    <section className="earn-section text-center lg:text-left paddings text-white">
      <div className="space-y-8">
        <h2 className="lg:text-5xl md:text-3xl text-2xl font-semibold">
          Ready to Earn Rewards?
        </h2>
        <p className="lg:w-[30%] w-[50%] mx-auto lg:mx-0 leading-[1.4] text-xl">
          Sign up now and start earning points for your everyday purchases.
        </p>
        <button className="px-8 py-3 rounded-lg text-white bg-purple">
          <a href="/src/pages/sign-up.html"> Get Started </a>
        </button>
        <img className="mx-auto lg:mx-0" src="/svg/rating-2.svg" alt="" />
      </div>
    </section>

    <footer className="relative paddings max-w-screen">
      <div
        className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
        <h2 className="font-semibold mb-4 text-3xl">cratebux</h2>

        <div
          className="lg:pr-8 flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-10 [&_ul]:space-y-2 [&_li]:border-b-2 lg:[&_li]:w-fit [&_li]:border-dashed [&_li]:text-center">
          <div>
            <h2 className="font-semibold mb-4 text-xl">MENU</h2>
            <ul>
              <li><a href="/src/pages/about.html">ABOUT US</a></li>
              <li>CONTACT</li>
              <li>FAQ</li>
              <li><a href="/src/pages/policy.html">Privacy Policy</a></li>
              <li><a href="/src/pages/terms.html">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-4 text-xl">FOLLOW</h2>

            <ul>
              <li>X</li>
              <li>TELEGRAM</li>
              <li>FACEBOOK</li>
              <li>INSTAGRAM</li>
              <li>PINTREST</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="lg:absolute mx-auto left-0 paddings right-0 top-[20%] space-y-6 -z-10">
        <img className="w-[83%]" src="/svg/trix-logo-footer.svg" alt="trix logo" />
        <p className="text-right text-xl font-semibold">
          Cookie setting © 2024 Trix.
        </p>
      </div>
    </footer>
  </>
  );
}
