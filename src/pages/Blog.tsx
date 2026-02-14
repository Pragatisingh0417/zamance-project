import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "How Intelligent Consulting Is Redefining Global Enterprises",
    excerpt:
      "Discover how data-driven strategy and intelligent systems are reshaping enterprise decision-making worldwide.",
    category: "Strategy & Transformation",
    date: "Jan 20, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    id: 2,
    title: "Digital Transformation: Beyond Technology Adoption",
    excerpt:
      "True digital transformation requires alignment of people, process, and governance — not just tools.",
    category: "Digital Consulting",
    date: "Jan 15, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984",
  },
  {
    id: 3,
    title: "Governance & Compliance in a Data-Driven World",
    excerpt:
      "Learn how modern enterprises maintain compliance while enabling innovation at scale.",
    category: "Governance & Compliance",
    date: "Jan 10, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758",
  },
];

const categories = [
  "All",
  "Strategy & Transformation",
  "Digital Consulting",
  "Governance & Compliance",
  "AI & Intelligent Systems",
  "Case Studies",
];

const Blog = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A8A] to-[#1FA45B] text-white h-30 md:h-40 lg:h-60">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
            Blogs
          </h1>
          {/* <p className="mt-4 max-w-2xl text-slate-300 text-lg">
            Expert perspectives on strategy, digital transformation,
            governance, and intelligent solutions.
          </p> */}
        </div>
      </section>

      {/* Category Filter */}
      {/* <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex gap-4 overflow-x-auto text-sm font-medium text-slate-700">
            {categories.map((cat) => (
              <button
                key={cat}
                className="whitespace-nowrap border-b-2 border-transparent pb-2 hover:border-slate-900 hover:text-slate-900 transition"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section> */}

      {/* Featured Blog */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src={blogPosts[0].image}
            alt={blogPosts[0].title}
            className="rounded-xl object-cover w-full h-80"
          />
          <div>
            <span className="text-sm font-semibold text-slate-600">
              Featured Insight
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">
              {blogPosts[0].title}
            </h2>
            <p className="mt-4 text-slate-600">
              {blogPosts[0].excerpt}
            </p>
            <button className="mt-6 inline-flex items-center text-slate-900 font-medium hover:underline">
              Read Insight →
            </button>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group rounded-xl border bg-white overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <span className="text-xs font-semibold text-slate-500 uppercase">
                  {post.category}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-slate-900 group-hover:underline">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      
    </div>
  );
};

export default Blog;
