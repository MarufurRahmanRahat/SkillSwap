import React from 'react';
import { Target, Eye, Heart, Users, Award, TrendingUp, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router';


const AboutUs = () => {
    const stats = [
        { number: '10,000+', label: 'Active Users' },
        { number: '500+', label: 'Skill Providers' },
        { number: '50+', label: 'Skill Categories' },
        { number: '25,000+', label: 'Sessions Completed' }
    ];

     const values = [
        {
            icon: Heart,
            title: 'Community First',
            description: 'We believe in the power of community and fostering connections between people who want to learn and teach.'
        },
        {
            icon: Shield,
            title: 'Trust & Safety',
            description: 'Your security is our priority. We verify all providers and maintain strict quality standards.'
        },
        {
            icon: TrendingUp,
            title: 'Continuous Growth',
            description: 'We are committed to helping individuals grow their skills and achieve their personal goals.'
        },
        {
            icon: Zap,
            title: 'Innovation',
            description: 'We continuously improve our platform with new features to enhance your learning experience.'
        }
    ];

    const team = [
        {
            name: 'Sarah Johnson',
            role: 'Founder & CEO',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300',
            description: 'Passionate about education and community building'
        },
        {
            name: 'Michael Chen',
            role: 'Head of Technology',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
            description: 'Expert in building scalable platforms'
        },
        {
            name: 'Emily Rodriguez',
            role: 'Community Manager',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300',
            description: 'Dedicated to creating meaningful connections'
        },
        {
            name: 'David Kim',
            role: 'Product Designer',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300',
            description: 'Focused on intuitive user experiences'
        }
    ];

     const milestones = [
        { year: '2020', event: 'SkillSwap Founded', description: 'Started with a vision to democratize skill sharing' },
        { year: '2021', event: 'Reached 1,000 Users', description: 'Growing community of learners and teachers' },
        { year: '2022', event: 'Expanded to 20 Cities', description: 'Bringing skills to communities nationwide' },
        { year: '2023', event: '10,000+ Active Users', description: 'Became the leading skill exchange platform' },
        { year: '2024', event: 'International Expansion', description: 'Connecting people across borders' }
    ];
    return (
           <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4" data-aos="fade-down">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        About SkillSwap
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                        Empowering communities through skill sharing and lifelong learning
                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8" data-aos="fade-up">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-blue-50 rounded-2xl p-8" data-aos="fade-right">
                            <Target className="h-12 w-12 text-blue-600 mb-4" />
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                To create a world where everyone has access to quality education and skill development 
                                through community-driven learning. We believe that everyone has something valuable to 
                                teach and something important to learn. By connecting people locally, we're building 
                                stronger communities and fostering personal growth.
                            </p>
                        </div>

                        <div className="bg-purple-50 rounded-2xl p-8" data-aos="fade-left">
                            <Eye className="h-12 w-12 text-purple-600 mb-4" />
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                To become the world's leading platform for peer-to-peer skill exchange, where borders 
                                don't limit learning opportunities. We envision a future where traditional education 
                                barriers are broken down, and knowledge flows freely between individuals who are 
                                passionate about sharing and learning.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Story Section */}
            <div className="py-16 bg-gray-50 px-4">
                <div className="max-w-4xl mx-auto" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
                        Our Story
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-600">
                        <p className="text-lg leading-relaxed mb-6">
                            SkillSwap was born from a simple observation: everyone has unique skills and knowledge, 
                            yet traditional education systems often fail to connect those who want to learn with 
                            those who can teach. In 2020, our founder Sarah Johnson experienced this firsthand when 
                            she struggled to find a local guitar teacher who fit her schedule and budget.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            She realized that in her own neighborhood, there were talented musicians, language 
                            speakers, artists, and professionals willing to share their expertise. The problem wasn't 
                            a lack of skilled people—it was a lack of connection. That's when the idea of SkillSwap 
                            was born.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Today, SkillSwap has grown into a thriving community of over 10,000 learners and teachers. 
                            We've facilitated thousands of meaningful connections and helped people discover new 
                            passions, advance their careers, and build lasting friendships. But we're just getting 
                            started—our journey continues as we work to make skill sharing accessible to everyone, 
                            everywhere.
                        </p>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12" data-aos="fade-down">
                        Our Core Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                    <value.icon className="h-8 w-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Timeline Section */}
            <div className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12" data-aos="fade-down">
                        Our Journey
                    </h2>
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-300"></div>
                        
                        {milestones.map((milestone, index) => (
                            <div
                                key={index}
                                className={`relative mb-12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                            >
                                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'}`}>
                                    <div className="bg-white rounded-xl shadow-lg p-6">
                                        <div className="text-3xl font-bold text-blue-600 mb-2">
                                            {milestone.year}
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                            {milestone.event}
                                        </h3>
                                        <p className="text-gray-600">
                                            {milestone.description}
                                        </p>
                                    </div>
                                </div>
                                {/* Timeline Dot */}
                                <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4" data-aos="fade-down">
                        Meet Our Team
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Passionate individuals working together to revolutionize skill sharing
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="text-center group"
                                data-aos="zoom-in"
                                data-aos-delay={index * 100}
                            >
                                <div className="relative mb-4 overflow-hidden rounded-2xl">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-blue-600 font-medium mb-2">
                                    {member.role}
                                </p>
                                <p className="text-gray-600 text-sm">
                                    {member.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4" data-aos="fade-up">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Start Your Learning Journey?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Join thousands of learners and teachers in our community today
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                       <Link to='/apps'><button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105">
                            Browse Skills
                        </button></Link> 
                        <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all">
                            Become a Provider
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;