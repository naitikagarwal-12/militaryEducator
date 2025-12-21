import Header from "../components/Header";

const ContactUs = () => {
  return (
    <div className="bg-[#27395f]">
      <Header />
      <section className="bg-[#0b0b0b]/50 text-white py-6 px-6 md:px-12 lg:px-24 w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            Contact <span className="text-[#b0be64]">Us</span>
          </h1>
          <p className="mt-4 text-gray-400 text-sm md:text-base">
            Reach out for defense exam guidance, tactical intelligence queries,
            or platform support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12">
          <div className="bg-[#121212]/50 rounded-2xl py-2 px-4 shadow-lg">
            <h2 className="text-xl md:text-2xl font-semibold mb-1">
              Get In Touch
            </h2>
            <p className="text-sm md:text-md text-gray-400 mb-6 leading-relaxed">
              We support students preparing for defense examinations and
              professionals seeking structured tactical knowledge.
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-[#b0be64] font-medium">Email</p>
                <p className="text-gray-200">support@militaryeducator.in</p>
              </div>

              <div>
                <p className="text-[#b0be64] font-medium">Phone</p>
                <p className="text-gray-200">+91 9XXXXXXXXX</p>
              </div>

              <div>
                <p className="text-[#b0be64] font-medium">Location</p>
                <p className="text-gray-200">Kota, Rajasthan</p>
              </div>
            </div>
          </div>

          <div className="bg-[#121212]/50g rounded-2xl py-2 px-4 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#b0be64]"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#b0be64]"
                required
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#b0be64]"
                required
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#b0be64]"
                required
              />

              <button
                type="submit"
                className="w-full bg-[#b0be64] text-black font-semibold py-2 rounded-lg hover:bg-[#9aaa50] transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
