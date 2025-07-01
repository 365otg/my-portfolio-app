import React, { useState, useEffect } from 'react';

// Main App Component
function App() {
  // State to manage the current page view
  const [currentPage, setCurrentPage] = useState('brandOverview');

  // Data for the social media followers
  const socialData = {
    twitter: 72.7,
    facebook: 10.4,
    instagram: 27.4,
    youtube: 14.4,
  };

  // Calculate total followers from the socialData
  const totalFollowers = Object.values(socialData).reduce((sum, current) => sum + current, 0);

  // --- Page Components ---

  // 1. The 365 Brand at a Glance Page
  const BrandOverviewPage = () => (
    <div className="p-6 bg-black rounded-xl shadow-lg max-w-4xl mx-auto my-8 border border-gray-700">

      {/* Total Followers Card */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white p-8 rounded-xl shadow-md mb-8 text-center border border-gray-600">
        <h3 className="text-2xl font-semibold mb-2 text-gray-200">Total Brand Followers</h3>
        <p className="text-6xl font-extrabold text-white">{totalFollowers.toFixed(1)}K</p>
      </div>

      {/* Platform Specific Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Twitter Card */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-center mb-4">
            <svg className="w-10 h-10 text-blue-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.007-.532A8.318 8.318 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 012 10.425v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.188a11.62 11.62 0 006.29 2.063z" />
            </svg>
          </div>
          <h4 className="text-xl font-semibold text-gray-200 mb-2">Twitter</h4>
          <p className="text-4xl font-bold text-blue-500">{socialData.twitter}K</p>
        </div>

        {/* Facebook Card */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-center mb-4">
            <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.505 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.262c-1.225 0-1.628.761-1.628 1.547V12h2.773l-.443 2.89h-2.33V22h4.513C19.523 21.056 22 16.992 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </div>
          <h4 className="text-xl font-semibold text-gray-200 mb-2">Facebook</h4>
          <p className="text-4xl font-bold text-blue-700">{socialData.facebook}K</p>
        </div>

        {/* Instagram Card */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-center mb-4">
            <svg className="w-10 h-10 text-pink-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.148 3.252-1.691 4.771-4.919 4.919-.058 1.265-.07 1.645-.07 4.85s.012 3.584.07 4.85c.148 3.252 1.691 4.771 4.919 4.919 1.265.058 1.645.07 4.85.07s3.584-.012 4.85-.07c3.252-.148 4.771-1.691 4.919-4.919.058-1.265.07-1.645.07-4.85s-.012-3.584-.07-4.85c-.148-3.252-1.691-4.771-4.919-4.919-1.265-.058-1.645-.07-4.85-.07zm0 2.163c-3.204 0-3.584.012-4.85.07-2.738.125-3.951 1.401-4.076 4.076-.058 1.265-.07 1.645-.07 4.85s.012 3.584.07 4.85c.125 2.738 1.401 3.951 4.076 4.076 1.265.058 1.645.07 4.85.07s3.584-.012 4.85-.07c2.738-.125 3.951-1.401 4.076-4.076.058-1.265.07-1.645.07-4.85s-.012-3.584-.07-4.85c-.125-2.738-1.401-3.951-4.076-4.076-1.265-.058-1.645-.07-4.85-.07zm0 4.326a5.526 5.526 0 100 11.052 5.526 5.526 0 000-11.052zm0 2.163a3.363 3.363 0 110 6.726 3.363 3.363 0 010-6.726zm6.54-.516a1.26 1.26 0 100 2.52 1.26 1.26 0 000-2.52z" />
            </svg>
          </div>
          <h4 className="text-xl font-semibold text-gray-200 mb-2">Instagram</h4>
          <p className="text-4xl font-bold text-pink-600">{socialData.instagram}K</p>
        </div>

        {/* YouTube Card */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-center mb-4">
            <svg className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21.581 6.128a3.471 3.471 0 00-2.449-2.449C17.935 3.5 12 3.5 12 3.5s-5.935 0-7.132.179A3.471 3.471 0 002.419 6.128C2.24 7.325 2.24 12 2.24 12s0 4.675.179 5.872a3.471 3.471 0 002.449 2.449C6.065 20.5 12 20.5 12 20.5s5.935 0 7.132-.179a3.471 3.471 0 002.449-2.449C21.76 16.675 21.76 12 21.76 12s0-4.675-.179-5.872zM9.916 15.433V8.567L15.818 12l-5.902 3.433z" />
            </svg>
          </div>
          <h4 className="text-xl font-semibold text-gray-200 mb-2">YouTube</h4>
          <p className="text-4xl font-bold text-red-600">{socialData.youtube}K</p>
        </div>
      </div>
    </div>
  );

  // 2. Posts (Blog Integration)
  const BlogPostsPage = () => {
    // Hardcoded sample posts to ensure display due to CORS issues with live fetch
    const samplePosts = [
      {
        title: "Akai MPC One: A Beginner's Guide",
        link: "https://365otg.blogspot.com/2023/02/akai-mpc-one-beginners-guide.html",
        pubDate: "2023-02-01T00:00:00Z",
      },
      {
        title: "A Beginner's Guide to the Roland SP-404 MK2",
        link: "https://365otg.blogspot.com/2023/02/a-beginners-guide-to-roland-sp-404-mk2.html",
        pubDate: "2023-02-01T00:00:00Z",
      },
      {
        title: "About Brother O.T.G.", // Moved to last
        link: "https://365otg.blogspot.com/2023/02/about-brotherotg.html",
        pubDate: "2023-02-01T00:00:00Z", // Approximate date if not available
      },
    ];

    return (
      <div className="p-6 bg-black rounded-xl shadow-lg max-w-4xl mx-auto my-8 border border-gray-700 text-gray-200">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Blog Posts</h2>
        <p className="text-gray-400 mb-4 text-center">
          Displaying sample posts. For live posts, please visit the blog directly:{" "}
          <a href="https://365otg.blogspot.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            365otg.blogspot.com
          </a>
        </p>

        <div className="space-y-4">
          {samplePosts.map((post, index) => (
            <div key={index} className="bg-gray-900 p-4 rounded-lg border border-gray-700 hover:bg-gray-800 transition-colors duration-200">
              <h3 className="text-xl font-semibold text-white mb-1">{post.title}</h3>
              {/* Removed the date display line */}
              {post.link && (
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  Read More
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // 3. Music Page
  const MusicPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Array of YouTube playlist embed URLs
    const playlists = [
      {
        title: "The 365 Experience",
        embedUrl: "https://www.youtube.com/embed/videoseries?si=yqrvxgABUfYQfNVR&amp;list=OLAK5uy_mW0i-NiUNzZr86QNVoJgNfwisidyoCREA",
      },
      {
        title: "Album 2 Title", // Placeholder title
        embedUrl: "https://www.youtube.com/embed/videoseries?si=2lUEUD44RWRQiLbs&amp;list=OLAK5uy_nXon7LkbB0jBsrL2POGQTHZhuSVeOL9A4",
      },
      {
        title: "Album 4 Title", // Placeholder title
        embedUrl: "https://www.youtube.com/embed/videoseries?si=UHesNW53joiUTdOz&amp;list=OLAK5uy_mXNnyIKsHxmjNrDiw4mHjL6K-jmr-pNqo",
      },
      {
        title: "Album 5 Title", // Placeholder title
        embedUrl: "https://www.youtube.com/embed/videoseries?si=f4lgt-f__XJ6Jblu&amp;list=OLAK5uy_mAxKGuCQrdAZSnRz3DBLXTOMh1iomn82I",
      },
      {
        title: "Album 6 Title", // Placeholder title
        embedUrl: "https://www.youtube.com/embed/videoseries?si=ZC6jZpNk6_IUuUtB&amp;list=OLAK5uy_kM31Wwh4oIUgFz8JhzLRnWGAgpONCUWxo",
      },
      {
        title: "Album 7 Title", // Placeholder title
        embedUrl: "https://www.youtube.com/embed/videoseries?si=QN42mjE4AFYiKZU9&amp;list=OLAK5uy_l860ha3GO3Ll0zEePOl5zVyy2R_lUQAYY",
      },
      {
        title: "Album 8 Title", // Placeholder title
        embedUrl: "https://www.youtube.com/embed/videoseries?si=XSGhPTutBhA0c_TE&amp;list=OLAK5uy_mPqgcHV4Dw7ytYPGmYEftQ_Bv9DhA77sE",
      },
      {
        title: "Album 9 Title", // Placeholder title
        embedUrl: "https://www.youtube.com/embed/videoseries?si=gE1eA3P6yjTiJWJ1&amp;list=OLAK5uy_m4NFIzHxkFdUX6lNn5qpub5XMijLd8SPE",
      },
      {
        title: "Album 11 Title", // Placeholder title
        embedUrl: "https://www.youtube.com/embed/videoseries?si=-ZfQvBxQ5Qsw0GqD&amp;list=OLAK5uy_ndGHtXPWKXXwXt6SdIKBTgSe3J3SvRKAA",
      },
      {
        title: "Album 12 Title", // Placeholder title
        embedUrl: "https://www.youtube.com/embed/videoseries?si=lksyjrVQzs9w7Wr5&amp;list=OLAK5uy_lPhdA7YEr0mbDpYddR_Mf5wpkNGFkHZis",
      },
      {
        title: "Album 14 Title", // Placeholder title
        embedUrl: "https://www.youtube.com/embed/videoseries?si=xDTXkm6Gf_YKfejH&amp;list=OLAK5uy_nyiCmlT9bg4lCBiLDL1voDzITdnZs1eTA",
      },
    ];

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % playlists.length);
    };

    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + playlists.length) % playlists.length);
    };

    return (
      <div className="p-6 bg-black rounded-xl shadow-lg max-w-4xl mx-auto my-8 border border-gray-700 text-gray-200">
        {/* Removed the "My Music" title */}

        {/* Music Player Carousel */}
        <div className="bg-gray-900 p-6 rounded-lg mb-8 border border-gray-700 relative overflow-hidden">
          <h3 className="text-xl font-semibold text-gray-200 mb-4 text-center">Charles Paris Music</h3>
          <div className="relative w-full mx-auto" style={{ paddingBottom: '56.25%', height: 0, maxWidth: '560px' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-md"
              src={playlists[currentSlide].embedUrl}
              title={playlists[currentSlide].title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={prevSlide}
              className="px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors duration-200"
            >
              &#9664; Prev
            </button>
            <button
              onClick={nextSlide}
              className="px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors duration-200"
            >
              Next &#9654;
            </button>
          </div>
          {/* Removed the placeholder embeds content line */}
        </div>

        {/* Streaming Sites */}
        {/* Removed the "Listen on Streaming Sites" heading */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: 'Spotify', url: 'https://open.spotify.com/artist/2JNwwyc7B43B93JYf40htY', icon: 'fab fa-spotify', color: 'text-green-500' },
            { name: 'Apple Music', url: 'https://music.apple.com/us/artist/365otg/1678777472', icon: 'fab fa-apple', color: 'text-red-500' },
            { name: 'Tidal', url: 'https://tidal.com/browse/artist/11654789', icon: 'fas fa-water', color: 'text-blue-400' },
            { name: 'Audiomack', url: 'https://audiomack.com/overtimegrind', icon: 'fas fa-headphones', color: 'text-orange-500' },
            { name: 'Bandcamp', url: 'https://brotherotg.bandcamp.com', icon: 'fab fa-bandcamp', color: 'text-teal-500' },
            { name: 'YouTube Music', url: 'https://music.youtube.com/channel/UCbQTh2vi0O0UIN7EPgb8NRA', icon: 'fab fa-youtube', color: 'text-red-600' },
          ].map((site, index) => (
            <a
              key={index}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-gray-900 p-2 rounded-lg border border-gray-700 hover:bg-gray-800 transition-colors duration-200 group text-sm"
            >
              {/* Using a simple emoji as a placeholder for icons */}
              <span className={`text-xl mr-2 ${site.color}`}>
                {site.name === 'Spotify' && '🟢'}
                {site.name === 'Apple Music' && '🍎'}
                {site.name === 'Tidal' && '🌊'}
                {site.name === 'Audiomack' && '🎧'}
                {site.name === 'Bandcamp' && '🎵'}
                {site.name === 'YouTube Music' && '▶️'}
              </span>
              <span className="font-semibold text-gray-200 group-hover:text-white">Charles Paris Music on {site.name}</span>
            </a>
          ))}
        </div>
        {/* Removed the placeholder streaming links text */}
      </div>
    );
  };

  // 4. Social Media Breakdown Page (API Integration Placeholder)
  const SocialMediaBreakdownPage = () => (
    <div className="p-6 bg-black rounded-xl shadow-lg max-w-4xl mx-auto my-8 border border-gray-700 text-gray-200">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Social Media Breakdown</h2>
      <p className="text-gray-400 mb-4 text-center">
        This page would display more detailed analytics from various social media APIs.
      </p>

      <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-gray-200 mb-4">API Integration Placeholder</h3>
        <p className="text-gray-400 mb-4">
          To integrate live social media data, you would typically:
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>Obtain API keys from each social media platform (Twitter, Facebook, Instagram, YouTube).</li>
          <li>Set up a backend server to securely fetch data from these APIs (to avoid CORS and expose keys).</li>
          <li>Your React app would then fetch data from your backend.</li>
          <li>Libraries like Chart.js or D3.js could be used for data visualization.</li>
        </ul>
        <p className="text-gray-500 mt-4">
          (This section is conceptual. Actual API integration requires backend development and API access.)
        </p>
      </div>
    </div>
  );

  // 5. Gumroad Store Page
  const GumroadStorePage = () => {
    const products = [
      { id: 1, name: 'Hip Hop Beat Pack Vol. 1', price: '$29.99', imageUrl: 'https://placehold.co/300x200/4F46E5/ffffff?text=Beat+Pack+1' },
      { id: 2, name: 'Vocal Sample Kit', price: '$19.99', imageUrl: 'https://placehold.co/300x200/6B7280/ffffff?text=Vocal+Kit' },
      { id: 3, name: 'Producer Starter Guide', price: '$9.99', imageUrl: 'https://placehold.co/300x200/D97706/ffffff?text=Guide' },
      { id: 4, name: 'Custom Beat Commission', price: '$199.00', imageUrl: 'https://placehold.co/300x200/10B981/ffffff?text=Custom+Beat' },
      { id: 5, name: 'Mixing & Mastering Service', price: '$75.00', imageUrl: 'https://placehold.co/300x200/EF4444/ffffff?text=Mixing' },
      { id: 6, name: 'Drum Kit Essentials', price: '$24.99', imageUrl: 'https://placehold.co/300x200/3B82F6/ffffff?text=Drum+Kit' },
      { id: 7, name: 'Synth Presets Vol. 2', price: '$14.99', imageUrl: 'https://placehold.co/300x200/8B5CF6/ffffff?text=Synth+Presets' },
      { id: 8, name: 'Marketing for Musicians Ebook', price: '$12.99', imageUrl: 'https://placehold.co/300x200/EC4899/ffffff?text=Ebook' },
      { id: 9, name: 'Exclusive Loop Pack', price: '$34.99', imageUrl: 'https://placehold.co/300x200/F59E0B/ffffff?text=Loop+Pack' },
      { id: 10, name: 'Sound Design Tutorial', price: '$49.99', imageUrl: 'https://placehold.co/300x200/06B6D4/ffffff?text=Tutorial' },
      { id: 11, name: 'Sample Pack Vol. 3', price: '$27.99', imageUrl: 'https://placehold.co/300x200/6EE7B7/ffffff?text=Sample+Pack+3' },
      { id: 12, name: 'Vocal Chops Kit', price: '$21.99', imageUrl: 'https://placehold.co/300x200/F87171/ffffff?text=Vocal+Chops' },
      { id: 13, name: 'MIDI Chord Progressions', price: '$10.99', imageUrl: 'https://placehold.co/300x200/A78BFA/ffffff?text=MIDI' },
      { id: 14, name: 'One-Shot Drum Samples', price: '$15.99', imageUrl: 'https://placehold.co/300x200/FB923C/ffffff?text=One-Shots' },
      { id: 15, name: 'Custom Sound Pack', price: '$59.99', imageUrl: 'https://placehold.co/300x200/C084FC/ffffff?text=Custom+Sound' },
    ];

    const carouselProducts = products.slice(0, 10);
    const listProducts = products.slice(10);

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % carouselProducts.length);
    };

    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + carouselProducts.length) % carouselProducts.length);
    };

    return (
      <div className="p-6 bg-black rounded-xl shadow-lg max-w-4xl mx-auto my-8 border border-gray-700 text-gray-200">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Gumroad Store</h2>
        <p className="text-gray-400 mb-4 text-center">
          Explore my exclusive products on Gumroad:{" "}
          <a href="https://gumroad.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            gumroad.com/your-store
          </a>
        </p>

        {/* Carousel for 10 Products */}
        <div className="relative w-full overflow-hidden rounded-lg mb-8 border border-gray-700 bg-gray-900">
          <h3 className="text-xl font-semibold text-gray-200 p-4 text-center">Featured Products</h3>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carouselProducts.map((product) => (
              <div key={product.id} className="w-full flex-shrink-0 text-center p-4">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mx-auto mb-4 border border-gray-600"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/300x200/4F46E5/ffffff?text=Product'; }}
                />
                <h4 className="text-xl font-semibold text-white">{product.name}</h4>
                <p className="text-blue-400 text-lg font-bold">{product.price}</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
                  View Product
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-75 text-white p-2 rounded-full ml-2 hover:bg-opacity-100 transition-colors duration-200"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-75 text-white p-2 rounded-full mr-2 hover:bg-opacity-100 transition-colors duration-200"
          >
            &#10095;
          </button>
        </div>

        {/* List for 5 more Products */}
        <h3 className="text-2xl font-bold text-white mb-4 text-center">More Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {listProducts.map((product) => (
            <div key={product.id} className="bg-gray-900 p-4 rounded-lg border border-gray-700 flex items-center space-x-4 hover:bg-gray-800 transition-colors duration-200">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-20 h-20 object-cover rounded-md border border-gray-600"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/80x80/4F46E5/ffffff?text=Prod'; }}
              />
              <div>
                <h4 className="text-lg font-semibold text-white">{product.name}</h4>
                <p className="text-blue-400 font-bold">{product.price}</p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline">
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // 6. Videos Page (YouTube Embeds)
  const VideosPage = () => {
    // Featured video details
    const featuredVideo = {
      id: 'cHb9LnYY5ns', // Updated featured video ID
      title: 'Akai Professional MPC Live 2 Overview', // Updated title
      description: 'The Akai Professional MPC Live 2 Standalone Sampler and Sequencer Hybrid Standalone Hardware DAW with Software Integration has 16 Velocity-/Pressure-sensitive Pads, a 7" Multitouch Display, CV/Gate Outputs, MIDI Multi Capability, Internal Storage, SD Card Slot, and MPC 2.0 Internal Software.', // Updated description
      thumbnail: 'https://img.youtube.com/vi/cHb9LnYY5ns/hqdefault.jpg', // Using YouTube thumbnail service
      channelName: 'OTGbeatsnloops',
      subscribers: '14.3K',
      views: '101 views',
    };

    // Recommended videos data
    const recommendedVideos = [
      { id: 'wwBSybgZ4Dk', title: 'How To Mix Samples On Akai Force 3.3', thumbnail: 'https://img.youtube.com/vi/wwBSybgZ4Dk/hqdefault.jpg' }, // Video 1
      { id: 'g94YgXtidGk', title: 'Akai Force 3.3 Overview', thumbnail: 'https://img.youtube.com/vi/g94YgXtidGk/hqdefault.jpg' }, // Video 3 (Original was duplicate of video 1)
      { id: 'cHb9LnYY5ns', title: 'Akai Professional MPC Live 2 Overview', thumbnail: 'https://img.youtube.com/vi/cHb9LnYY5ns/hqdefault.jpg' }, // Video 4 (Original was duplicate of featured)
      { id: 'iAeROsWuX6c', title: 'Music Production Workflow Tips', thumbnail: 'https://img.youtube.com/vi/iAeROsWuX6c/hqdefault.jpg' }, // Video 5
      { id: 'mKafwK4lz6g', title: 'Software and Hardware Music Tutorials', thumbnail: 'https://img.youtube.com/vi/mKafwK4lz6g/hqdefault.jpg' }, // Video 6
      { id: '4G2GDLycg3k', title: 'Sampling Techniques for Beginners', thumbnail: 'https://img.youtube.com/vi/4G2GDLycg3k/hqdefault.jpg' }, // Video 7
      { id: 'UV3u4gVeMP4', title: 'Akai Force MPC Live 2 Tutorial', thumbnail: 'https://img.youtube.com/vi/UV3u4gVeMP4/hqdefault.jpg' }, // Video 8 - Updated ID and explicit thumbnail
    ];


    return (
      <div className="p-6 bg-black rounded-xl shadow-lg max-w-4xl mx-auto my-8 border border-gray-700 text-gray-200">
        {/* Channel Header Section */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-md mb-8 border border-gray-700">
          <div className="relative w-full h-32 bg-gray-800 rounded-lg overflow-hidden mb-4 flex items-center justify-center text-white text-3xl font-bold">
            Charles Paris Videos {/* Updated banner text */}
          </div>
          <div className="flex items-center -mt-16 ml-4">
            {/* Channel Profile Picture - YouTube Button */}
            <div className="relative w-24 h-24 rounded-full border-4 border-gray-900 bg-red-600 overflow-hidden shadow-lg flex items-center justify-center">
              <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.5 12.4l-6.173 3.705c-.27.162-.602.162-.872 0l-6.173-3.705c-.27-.162-.27-.428 0-.59l6.173-3.705c.27-.162.602-.162.872 0l6.173 3.705c.27.162.27.428 0 .59z"/>
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-white">Charles Paris</h3>
              <p className="text-gray-400 text-sm">@365otgcharlesparis • {featuredVideo.subscribers} subscribers • over 3 million views</p> {/* Updated handle and views */}
            </div>
          </div>
          <div className="flex justify-start gap-4 mt-4 ml-4">
            <button className="px-4 py-2 bg-gray-700 text-gray-200 rounded-full text-sm hover:bg-gray-600 transition-colors">Music Production Videos</button> {/* Changed text */}
            <button className="px-4 py-2 bg-gray-700 text-gray-200 rounded-full text-sm hover:bg-gray-600 transition-colors">Software and Hardware Music tutorials</button> {/* Changed text */}
            <button
              onClick={() => window.open('https://www.youtube.com/channel/UCbQTh2vi0O0UIN7EPgb8NRA', '_blank')} // Open in new window
              className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition-colors"
            >
              View channel
            </button>
          </div>
        </div>

        {/* Channel Navigation Tabs */}
        <nav className="bg-gray-900 border-b border-gray-700 mb-8">
          <div className="flex justify-between -mb-px text-sm">
            <button className="py-3 px-4 text-gray-400 hover:text-white border-b-2 border-transparent hover:border-gray-600 transition-colors">Home</button>
            <button className="py-3 px-4 text-yellow-400 border-b-2 border-yellow-500 transition-colors">Videos</button> {/* Active tab */}
            <button
              onClick={() => window.open('https://www.youtube.com/@365charlesparis/shorts', '_blank')} // Link to Shorts
              className="py-3 px-4 text-gray-400 hover:text-white border-b-2 border-transparent hover:border-gray-600 transition-colors"
            >
              Shorts
            </button>
            <button
              onClick={() => window.open('https://www.youtube.com/@365charlesparis/releases', '_blank')} // Link to Releases
              className="py-3 px-4 text-gray-400 hover:text-white border-b-2 border-transparent hover:border-gray-600 transition-colors"
            >
              Releases
            </button>
            <button
              onClick={() => window.open('https://www.youtube.com/@365charlesparis/podcasts', '_blank')} // Link to Podcasts
              className="py-3 px-4 text-gray-400 hover:text-white border-b-2 border-transparent hover:border-gray-600 transition-colors"
            >
              Podcasts
            </button>
            <button
              onClick={() => window.open('https://www.youtube.com/@365charlesparis/playlists', '_blank')} // Link to Playlists
              className="py-3 px-4 text-gray-400 hover:text-white border-b-2 border-transparent hover:border-gray-600 transition-colors"
            >
              Playlists
            </button>
            <button
              onClick={() => setCurrentPage('posts')} // Link to Blog Posts
              className="py-3 px-4 text-gray-400 hover:text-white border-b-2 border-transparent hover:border-gray-600 transition-colors"
            >
              Posts
            </button>
            <button
              onClick={() => window.open('https://www.youtube.com/@365charlesparis/membership', '_blank')} // Link to Membership
              className="py-3 px-4 text-gray-400 hover:text-white border-b-2 border-transparent hover:border-gray-600 transition-colors"
            >
              Membership
            </button>
            <button
              onClick={() => setCurrentPage('gumroadStore')} // Link to Gumroad Store
              className="py-3 px-4 text-gray-400 hover:text-white border-b-2 border-transparent hover:border-gray-600 transition-colors"
            >
              Store
            </button>
          </div>
        </nav>

        {/* Featured Video Section */}
        <div className="mb-8 bg-gray-900 p-6 rounded-xl border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Featured Video</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2 relative" style={{ paddingBottom: '28.125%', height: 0 }}> {/* 16:9 aspect ratio */}
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-md"
                src={`https://www.youtube.com/embed/${featuredVideo.id}`}
                title={featuredVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold text-white mb-2">{featuredVideo.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{featuredVideo.description}</p>
              <a href={`https://www.youtube.com/watch?v=${featuredVideo.id}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm">
                READ MORE
              </a>
            </div>
          </div>
        </div>

        {/* For You / Recommended Videos Section */}
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">For You</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {recommendedVideos.map((video) => (
              <div key={video.id} className="bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-700 hover:shadow-lg transition-all duration-200">
                <img
                  src={video.thumbnail} // Use the specific thumbnail URL provided in the video object
                  alt={video.title}
                  className="w-full h-32 object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/160x90/555555/ffffff?text=Video+Thumbnail+Fallback'; }} // Updated fallback
                />
                <div className="p-3">
                  <h4 className="text-sm font-semibold text-white truncate">{video.title}</h4>
                  <p className="text-xs text-gray-400 mt-1">Charles Paris</p>
                  <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-xs hover:underline mt-2 inline-block">
                    Watch Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // 7. Visitor Map Page (Interactive Map Placeholder)
  const VisitorMapPage = () => (
    <div className="p-6 bg-black rounded-xl shadow-lg max-w-4xl mx-auto my-8 border border-gray-700 text-gray-200">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Recent Visitors Map</h2>
      <p className="text-gray-400 mb-4 text-center">
        See where visitors from around the world are interacting with my site.
      </p>

      <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-gray-200 mb-4">Interactive Map Placeholder</h3>
        <div className="w-full h-96 bg-gray-800 rounded-md flex items-center justify-center overflow-hidden relative">
          {/* Placeholder image for a world map */}
          <img
            src="https://placehold.co/800x400/333333/ffffff?text=Interactive+World+Map"
            alt="World Map Placeholder"
            className="w-full h-full object-cover opacity-70"
          />
          <p className="absolute text-white text-center text-lg px-4">
            (Interactive map functionality for real-time IP tracking requires a backend server, IP geolocation services, and a mapping library (e.g., Leaflet, Google Maps API). This is a visual placeholder.)
          </p>
        </div>
        <p className="text-gray-500 mt-4 text-center">
          Implementing live visitor tracking and mapping involves complex backend development, data privacy considerations, and integration with third-party services.
        </p>
      </div>
    </div>
  );

  // 8. Contact & Consultation Page
  const ContactConsultationPage = () => (
    <div className="p-6 bg-black rounded-xl shadow-lg max-w-4xl mx-auto my-8 border border-gray-700 text-gray-200">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Contact & Consultation</h2>

      {/* About Me Section - Moved Here */}
      <div className="bg-gray-900 p-8 rounded-xl shadow-md mb-8 text-center border border-gray-600">
        <h3 className="text-2xl font-semibold mb-4 text-white">About Me</h3>
        <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Greetings! I'm O.T.G., a dedicated professional from Philadelphia, deeply rooted in the vibrant world of hip-hop sales.
          This platform serves as my digital portfolio, a comprehensive look into my journey, my craft, and my contributions to the culture.
          Here, you'll find everything from my brand's digital presence at a glance to my latest music, blog insights, and exclusive offerings.
          Welcome to my world, where passion meets purpose.
        </p>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 mb-8 text-center">
        <h3 className="text-xl font-semibold text-gray-200 mb-4">Email Me</h3>
        <p className="text-gray-400 mb-4">Have a question or a project in mind?</p>
        <a
          href="mailto:365otg@gmail.com"
          className="inline-block px-6 py-3 bg-yellow-500 text-gray-900 font-bold rounded-full shadow-lg hover:bg-yellow-600 transition-colors duration-200 text-lg"
        >
          Email: 365otg@gmail.com
        </a>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center">
        <h3 className="text-xl font-semibold text-gray-200 mb-4">Book a Consultation</h3>
        <p className="text-gray-400 mb-4">Ready to discuss your music or business needs?</p>
        <button
          onClick={() => alert("Booking functionality would integrate with a scheduling tool (e.g., Calendly, Acuity Scheduling).")}
          className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 text-lg"
        >
          Book a Consultation
        </button>
      </div>
    </div>
  );


  // Function to render the current page based on `currentPage` state
  const renderPage = () => {
    switch (currentPage) {
      case 'brandOverview':
        return <BrandOverviewPage />;
      case 'posts':
        return <BlogPostsPage />;
      case 'music':
        return <MusicPage />;
      case 'socialMediaBreakdown':
        return <SocialMediaBreakdownPage />;
      case 'gumroadStore':
        return <GumroadStorePage />;
      case 'videos':
        return <VideosPage />;
      case 'visitorMap':
        return <VisitorMapPage />;
      case 'contactConsultation':
        return <ContactConsultationPage />;
      default:
        return <BrandOverviewPage />; // Fallback
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 font-inter antialiased text-gray-200">
      {/* Tailwind CSS CDN script */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Inter font CDN */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />

      {/* Main Header Area */}
      <div className="bg-black shadow-lg border-b border-gray-800 pt-4 pb-4"> {/* Adjusted padding */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"> {/* Centered content */}
          <h1 className="text-5xl font-bold text-white mb-4 text-center w-full">
            <span className="italic font-serif">The</span> 365 <span className="italic font-serif">Brand</span> {/* Added font-serif for a more cursive look */}
          </h1>

          <div className="w-full flex justify-between items-start"> {/* Changed items-center to items-start */}
            {/* Left side: O.T.G. @365CharlesParis and other info */}
            <div className="flex flex-col items-start">
              <div className="flex items-center">
                <h2 className="text-2xl font-bold text-white">O.T.G</h2>
                {/* Verified Badge SVG */}
                <svg className="ml-2 w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-400 text-sm">@365CharlesParis</p>
              <p className="mt-2 text-gray-300">EST. 1980 ❗📣 <a href="#" className="text-blue-400 hover:underline">@the365brand</a></p>
              <div className="mt-2 flex space-x-4 text-gray-300">
                <a href="mailto:365otg@gmail.com" className="font-bold text-blue-400 hover:underline">365otg@gmail.com</a>
                <p><span className="font-bold text-white">{totalFollowers.toFixed(1)}K</span> Total Followers</p>
                <button onClick={() => setCurrentPage('contactConsultation')} className="font-bold text-yellow-400 hover:underline">Book a Consultation</button>
              </div>
            </div>

            {/* Contact Button */}
            <button
              onClick={() => setCurrentPage('contactConsultation')}
              className="px-6 py-2 bg-yellow-500 text-gray-900 rounded-full font-semibold hover:bg-yellow-600 transition-colors duration-200 shadow-md"
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Navigation Tabs */}
      <nav className="bg-black border-b border-gray-800 mt-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between -mb-px">
            <button
              onClick={() => setCurrentPage('brandOverview')}
              className={`py-3 px-4 text-sm font-medium leading-5 transition-colors duration-200 ease-in-out border-b-2 ${
                currentPage === 'brandOverview' ? 'border-yellow-500 text-yellow-400' : 'border-transparent text-gray-500 hover:text-gray-300 hover:border-gray-600'
              }`}
            >
              The 365 Brand
            </button>
            <button
              onClick={() => setCurrentPage('posts')}
              className={`py-3 px-4 text-sm font-medium leading-5 transition-colors duration-200 ease-in-out border-b-2 ${
                currentPage === 'posts' ? 'border-yellow-500 text-yellow-400' : 'border-transparent text-gray-500 hover:text-gray-300 hover:border-gray-600'
              }`}
            >
              Posts
            </button>
            <button
              onClick={() => setCurrentPage('music')}
              className={`py-3 px-4 text-sm font-medium leading-5 transition-colors duration-200 ease-in-out border-b-2 ${
                currentPage === 'music' ? 'border-yellow-500 text-yellow-400' : 'border-transparent text-gray-500 hover:text-gray-300 hover:border-gray-600'
              }`}
            >
              Music
            </button>
            <button
              onClick={() => setCurrentPage('socialMediaBreakdown')}
              className={`py-3 px-4 text-sm font-medium leading-5 transition-colors duration-200 ease-in-out border-b-2 ${
                currentPage === 'socialMediaBreakdown' ? 'border-yellow-500 text-yellow-400' : 'border-transparent text-gray-500 hover:text-gray-300 hover:border-gray-600'
              }`}
            >
              Socials
            </button>
            <button
              onClick={() => setCurrentPage('gumroadStore')}
              className={`py-3 px-4 text-sm font-medium leading-5 transition-colors duration-200 ease-in-out border-b-2 ${
                currentPage === 'gumroadStore' ? 'border-yellow-500 text-yellow-400' : 'border-transparent text-gray-500 hover:text-gray-300 hover:border-gray-600'
              }`}
            >
              Store
            </button>
            <button
              onClick={() => setCurrentPage('videos')}
              className={`py-3 px-4 text-sm font-medium leading-5 transition-colors duration-200 ease-in-out border-b-2 ${
                currentPage === 'videos' ? 'border-yellow-500 text-yellow-400' : 'border-transparent text-gray-500 hover:text-gray-300 hover:border-gray-600'
              }`}
            >
              Videos
            </button>
            <button
              onClick={() => setCurrentPage('visitorMap')}
              className={`py-3 px-4 text-sm font-medium leading-5 transition-colors duration-200 ease-in-out border-b-2 ${
                currentPage === 'visitorMap' ? 'border-yellow-500 text-yellow-400' : 'border-transparent text-gray-500 hover:text-gray-300 hover:border-gray-600'
              }`}
            >
              Visitor
            </button>
            <button
              onClick={() => setCurrentPage('contactConsultation')}
              className={`py-3 px-4 text-sm font-medium leading-5 transition-colors duration-200 ease-in-out border-b-2 ${
                currentPage === 'contactConsultation' ? 'border-yellow-500 text-yellow-400' : 'border-transparent text-gray-500 hover:text-gray-300 hover:border-gray-600'
              }`}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Main content area where pages will be rendered */}
      <main className="container mx-auto px-4">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
