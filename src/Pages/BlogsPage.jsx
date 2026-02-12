import React from 'react';
import { Link } from 'react-router-dom';
import aboutusBanner from '../assets/aboutuss.png';
import blogData from '../assets/blogs.json';

import { blogImages } from '../utils/blogImages';

const BlogsPage = () => {
    return (
        <div className="min-h-screen bg-white">

            {/* Blog Content Section */}
            <div className="py-16 px-4 sm:px-6 lg:px-8  pt-32">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#0B3D4C] mb-4">
                            Health Insights & Medical Updates
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Discover insights, expert advice, and the latest updates in healthcare, 
                            medical advancements, and wellness from OLIR Super Speciality Hospital.
                        </p>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogData.map((blog, index) => (
                            <Link 
                                key={index} 
                                to={`/blog/${blog.slug}`}
                                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#0B3D4C]/30 flex flex-col h-full"
                            >
                                {/* Blog Image */}
                                <div className="relative w-full aspect-[3/2] overflow-hidden">
                                    {blogImages[blog.slug] ? (
                                        <img 
                                            src={blogImages[blog.slug]} 
                                            alt={blog.article.h1}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-[#0B3D4C] to-[#1B6B7A] flex items-center justify-center">
                                            <div className="absolute inset-0 bg-[url('/assets/Gradient.svg')] bg-cover bg-center opacity-30"></div>
                                            <span className="text-white/80 text-6xl font-bold z-10">
                                                {blog.article.h1.charAt(0)}
                                            </span>
                                        </div>
                                    )}
                                </div>
                                
                                <div className="p-6">
                                    {/* Category/Keyword Badge */}
                                    <div className="flex items-center mb-3">
                                        <span className="inline-block px-3 py-1 bg-[#FFE666] text-gray-800 text-xs font-semibold rounded-full capitalize">
                                            {blog.focus_keyword.split(' ').slice(0, 2).join(' ').replace(/hospital/i, '').trim()}
                                        </span>
                                    </div>
                                    
                                    {/* Title */}
                                    <h3 className="text-lg font-semibold text-[#0B3D4C] mb-3 group-hover:text-[#1B6B7A] transition-colors line-clamp-2">
                                        {blog.article.h1}
                                    </h3>
                                    
                                    {/* Excerpt */}
                                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                        {blog.article.introduction.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1').substring(0, 150)}...
                                    </p>
                                    
                                    {/* Read More */}
                                    <div className="flex items-center text-[#0B3D4C] text-sm font-medium group-hover:text-[#1B6B7A] transition-colors">
                                        Read More
                                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogsPage;
