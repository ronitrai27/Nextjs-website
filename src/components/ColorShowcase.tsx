export default function ColorShowcase() {
  return (
    <div className="bg-white min-h-screen w-full p-8 space-y-6">
      {/* Header Section */}
      <h1 className="font-inter text-4xl font-bold text-near-black text-center">
        ZipServe Color Showcase
      </h1>
      <p className="font-roboto text-lg text-near-black text-center max-w-2xl mx-auto">
        Discover our bold, tech-inspired palette with darker blues and energetic
        gold.
      </p>

      {/* Color Demonstrations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Primary Blue */}
        <div className="space-y-2">
          <h2 className="font-inter text-2xl font-bold text-primary-blue">
            Primary Blue (#1E40AF)
          </h2>
          <p className="font-roboto text-base text-near-black">
            Deep navy-blue for buttons and primary UI elements.
          </p>
          <button className="bg-primary-blue text-white px-6 py-2 rounded-lg shadow-button hover:bg-near-black">
            Primary Blue Button
          </button>
        </div>

        {/* Accent Gold */}
        <div className="space-y-2">
          <h2 className="font-inter text-2xl font-bold text-accent-gold">
            Accent Gold (#F59E0B)
          </h2>
          <p className="font-roboto text-base text-near-black">
            Vibrant gold for rewards and energetic highlights.
          </p>
          <button className="bg-accent-gold text-near-black px-6 py-2 rounded-lg shadow-button hover:bg-white hover:border hover:border-accent-gold">
            Accent Gold Button
          </button>
        </div>

        {/* White */}
        <div className="space-y-2">
          <h2 className="font-inter text-2xl font-bold text-near-black bg-white border border-cool-gray p-2 rounded">
            White (#FFFFFF)
          </h2>
          <p className="font-roboto text-base text-near-black">
            Pure white for clean backgrounds.
          </p>
          <div className="bg-white p-4 rounded-lg shadow-card text-near-black">
            White Background Example
          </div>
        </div>

        {/* Cool Gray */}
        <div className="space-y-2">
          <h2 className="font-inter text-2xl font-bold text-near-black bg-cool-gray p-2 rounded">
            Cool Gray (#F1F5F9)
          </h2>
          <p className="font-roboto text-base text-near-black">
            Techy gray for secondary backgrounds.
          </p>
          <div className="bg-cool-gray p-4 rounded-lg shadow-card text-near-black">
            Cool Gray Background
          </div>
        </div>

        {/* Near Black */}
        <div className="space-y-2">
          <h2 className="font-inter text-2xl font-bold text-near-black">
            Near Black (#1E293B)
          </h2>
          <p className="font-roboto text-base text-near-black">
            Deep near-black for text and UI elements.
          </p>
          <button className="bg-near-black text-white px-6 py-2 rounded-lg shadow-button hover:bg-primary-blue">
            Near Black Button
          </button>
        </div>

        {/* Gradient Primary Start */}
        <div className="space-y-2">
          <h2 className="font-inter text-2xl font-bold text-gradient-primary-start">
            Gradient Primary Start (#1E40AF)
          </h2>
          <p className="font-roboto text-base text-near-black">
            Navy-blue for gradient starts.
          </p>
          <div className="bg-gradient-primary-start p-4 rounded-lg shadow-card text-white">
            Primary Gradient Start
          </div>
        </div>

        {/* Gradient Primary End */}
        <div className="space-y-2">
          <h2 className="font-inter text-2xl font-bold text-gradient-primary-end">
            Gradient Primary End (#4C1D95)
          </h2>
          <p className="font-roboto text-base text-near-black">
            Deep purple-blue for gradient ends.
          </p>
          <div className="bg-gradient-primary-end p-4 rounded-lg shadow-card text-white">
            Primary Gradient End
          </div>
        </div>

        {/* Gradient Accent Start */}
        <div className="space-y-2">
          <h2 className="font-inter text-2xl font-bold text-gradient-accent-start">
            Gradient Accent Start (#F59E0B)
          </h2>
          <p className="font-roboto text-base text-near-black">
            Gold for accent gradient starts.
          </p>
          <div className="bg-gradient-accent-start p-4 rounded-lg shadow-card text-near-black">
            Accent Gradient Start
          </div>
        </div>

        {/* Gradient Accent End */}
        <div className="space-y-2">
          <h2 className="font-inter text-2xl font-bold text-gradient-accent-end">
            Gradient Accent End (#D97706)
          </h2>
          <p className="font-roboto text-base text-near-black">
            Amber for accent gradient ends.
          </p>
          <div className="bg-gradient-accent-end p-4 rounded-lg shadow-card text-near-black">
            Accent Gradient End
          </div>
        </div>
      </div>

      {/* Gradient Sections */}
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Primary Gradient */}
        <div className="gradient-primary text-white p-8 rounded-lg shadow-card">
          <h2 className="font-inter text-2xl font-bold">
            Primary Gradient (Navy-to-Purple)
          </h2>
          <p className="font-roboto text-base mt-2">
            Perfect for hero sections and premium CTAs.
          </p>
          <button className="bg-white text-primary-blue px-6 py-2 rounded-lg shadow-button mt-4">
            Explore Now
          </button>
        </div>

        {/* Accent Gradient */}
        <div className="gradient-accent text-near-black p-8 rounded-lg shadow-card">
          <h2 className="font-inter text-2xl font-bold">
            Accent Gradient (Gold-to-Amber)
          </h2>
          <p className="font-roboto text-base mt-2">
            Ideal for rewards and vibrant highlights.
          </p>
          <button className="bg-near-black text-white px-6 py-2 rounded-lg shadow-button mt-4 hover:bg-primary-blue">
            Claim Rewards
          </button>
        </div>
      </div>
    </div>
  );
}
