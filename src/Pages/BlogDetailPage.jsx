import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import aboutusBanner from '../assets/aboutuss.png';
import blogData from '../assets/blogs.json';
import { BlogContentRenderer } from '../Components/BlogContentRenderer';
import BlogFAQ from '../Components/BlogFAQ';

import { blogImages } from '../utils/blogImages';

const BlogDetailPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    
    // Find the blog post by slug
    const blog = blogData.find(b => b.slug === slug);

    if (!blog) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <h1 className="text-4xl font-bold text-[#0B3D4C] mb-4">Blog Not Found</h1>
                <p className="text-gray-600 mb-8">The article you are looking for does not exist.</p>
                <Link to="/blogs" className="px-6 py-3 bg-[#0B3D4C] text-white rounded-full hover:bg-[#1B6B7A] transition-colors">
                    Back to Blogs
                </Link>
            </div>
        );
    }

    const { article } = blog;
    // Get specific image for this blog or fallback to aboutus banner
    const heroImage = blogImages[slug] || aboutusBanner;

    // Get related posts (filter out current blog, take first 3)
    const relatedPosts = blogData
        .filter(b => b.slug !== slug)
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Banner Section */}
            <div className="relative pt-32 pb-8 bg-white">
                <div className="flex items-center justify-center px-4">
                    <div className="text-center max-w-4xl">
                        <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-[#FFE666] text-gray-800 text-xs md:text-sm font-semibold rounded-full mb-4">
                            {blog.focus_keyword}
                        </span>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0B3D4C] leading-relaxed px-4 break-words">
                            {article.h1}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Blog Content */}
            <div className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Back Button */}
                    <button 
                        onClick={() => navigate('/blogs')}
                        className="flex items-center text-[#0B3D4C] hover:text-[#1B6B7A] mb-8 transition-colors cursor-pointer"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Blogs
                    </button>

                    {/* Blog Main Image */}
                    <div className="mb-10 w-full rounded-2xl overflow-hidden shadow-md">
                        <img 
                            src={heroImage} 
                            alt={article.h1} 
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Content Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 border border-gray-100">
                        {/* Introduction */}
                        <div className="mb-10">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                <BlogContentRenderer content={article.introduction} />
                            </p>
                        </div>

                        {/* Sections */}
                        {article.sections.map((section, index) => (
                            <div key={index} className="mb-10">
                                <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D4C] mb-4">
                                    {section.h2}
                                </h2>
                                
                                <div className="prose prose-lg max-w-none">
                                    {section.content && (
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            <BlogContentRenderer content={section.content} />
                                        </p>
                                    )}

                                    {/* Section Bullets */}
                                    {section.bullets && (
                                        <ul className="space-y-3 mb-4 ml-1">
                                            {section.bullets.map((bullet, bulletIndex) => (
                                                <li key={bulletIndex} className="flex items-start text-gray-700">
                                                    <span className="w-2 h-2 bg-[#FFE666] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                    <span className="leading-relaxed">
                                                        <BlogContentRenderer content={bullet} />
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        ))}



                        {article.conclusion && (
                            <div className="bg-gradient-to-r from-[#0B3D4C] to-[#1B6B7A] text-white rounded-2xl p-8 mb-10">
                                <h2 className="text-xl font-bold mb-4 flex items-center">
                                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Conclusion
                                </h2>
                                <p className="leading-relaxed opacity-95">
                                    <BlogContentRenderer content={article.conclusion} />
                                </p>
                            </div>
                        )}

                    </div>

                    {/* FAQ Accordion Section */}
                    <div className="w-full">
                        <BlogFAQ faqs={article.faqs} />
                    </div>

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                        <div className="mt-12">
                            <h3 className="text-2xl font-bold text-[#0B3D4C] mb-6">Related Articles</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {relatedPosts.map((relatedBlog, index) => (
                                    <Link 
                                        key={index}
                                        to={`/blog/${relatedBlog.slug}`}
                                        className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#0B3D4C]/30"
                                    >
                                        {/* Blog Image Placeholder */}
                                        {/* Blog Image */}
                                        <div className="relative h-40 w-full bg-gray-100 flex items-center justify-center">
                                            {blogImages[relatedBlog.slug] ? (
                                                <img 
                                                    src={blogImages[relatedBlog.slug]} 
                                                    alt={relatedBlog.article.h1}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gradient-to-br from-[#0B3D4C] to-[#1B6B7A] flex items-center justify-center">
                                                    <span className="text-white/80 text-5xl font-bold">
                                                        {relatedBlog.article.h1.charAt(0)}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        
                                        <div className="p-5">
                                            <span className="inline-block px-2 py-0.5 bg-[#FFE666] text-gray-800 text-xs font-semibold rounded-full mb-2">
                                                {relatedBlog.focus_keyword.split(' ').slice(0, 2).join(' ')}
                                            </span>
                                            <h4 className="font-semibold text-[#0B3D4C] group-hover:text-[#1B6B7A] transition-colors line-clamp-2 mb-2">
                                                {relatedBlog.article.h1}
                                            </h4>
                                            <p className="text-gray-600 text-sm line-clamp-2">
                                                {relatedBlog.article.introduction.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1').substring(0, 100)}...
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* CTA Section */}
                    <div className="text-center bg-gray-50 rounded-2xl p-8 mt-12 border border-gray-100">
                        <h3 className="text-xl font-bold text-[#0B3D4C] mb-3">
                            Need Expert Medical Care?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Book an appointment with our specialists today.
                        </p>
                        <Link 
                            to="/bookappointment"
                            className="inline-block bg-[#FFE666] text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-[#ffdf4d] transition-colors"
                        >
                            Book Appointment
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailPage;
