'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMail, FiMapPin, FiPhone, FiSend, FiMessageSquare } from 'react-icons/fi';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send the form data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSubmitStatus({
        success: true,
        message: 'Your message has been sent! I\'ll get back to you soon.'
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactMethods = [
    {
      icon: <FiMail className="w-6 h-6" />,
      title: 'Email',
      value: 'hello@example.com',
      href: 'mailto:hello@example.com',
      color: 'bg-[#0078D4]'
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: 'Phone',
      value: '+1 (234) 567-890',
      href: 'tel:+1234567890',
      color: 'bg-[#00A4EF]'
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'San Francisco, CA',
      color: 'bg-[#50E6FF]'
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="w-5 h-5" />,
      href: 'https://github.com',
      label: 'GitHub'
    },
    {
      icon: <FaLinkedinIn className="w-5 h-5" />,
      href: 'https://linkedin.com',
      label: 'LinkedIn'
    },
    {
      icon: <FaTwitter className="w-5 h-5" />,
      href: 'https://twitter.com',
      label: 'Twitter'
    }
  ];

  return (
      <section id="contact" className="py-20 bg-gradient-to-b from-[#001a33] to-[#000d1a] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#007FFF] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#3399FF] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#3399FF] to-[#66B2FF] bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-8"
            >
              <h3 className="text-2xl font-semibold text-white">Contact Information</h3>
              <p className="text-gray-400">
                I'm always open to discussing product design work or partnership opportunities. Don't hesitate to get in touch!
              </p>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className={`p-3 ${method.color} rounded-xl text-white group-hover:scale-110 transition-transform`}>
                        {method.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{method.title}</h4>
                        {method.href ? (
                            <a
                                href={method.href}
                                className="text-[#66B2FF] hover:text-white transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                              {method.value}
                            </a>
                        ) : (
                            <p className="text-gray-400">{method.value}</p>
                        )}
                      </div>
                    </div>
                ))}
              </div>

              <div className="pt-4">
                <h4 className="font-medium text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                      <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-[#00264d] text-[#66B2FF] rounded-full hover:bg-[#003366] hover:text-white transition-colors"
                          aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-[#001a33] bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-[#003366]"
            >
              <div className="flex items-center mb-8">
                <div className="p-3 bg-[#003366] rounded-xl mr-4">
                  <FiMessageSquare className="w-6 h-6 text-[#66B2FF]" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Send Me a Message</h3>
              </div>

              {submitStatus && (
                  <div
                      className={`p-4 mb-6 rounded-lg ${
                          submitStatus.success
                              ? 'bg-green-900 bg-opacity-50 text-green-300'
                              : 'bg-red-900 bg-opacity-50 text-red-300'
                      }`}
                  >
                    {submitStatus.message}
                  </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#00264d] border border-[#003366] rounded-lg focus:ring-2 focus:ring-[#3399FF] focus:border-transparent text-white placeholder-gray-500"
                      placeholder="John Doe"
                      required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#00264d] border border-[#003366] rounded-lg focus:ring-2 focus:ring-[#3399FF] focus:border-transparent text-white placeholder-gray-500"
                      placeholder="you@example.com"
                      required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#00264d] border border-[#003366] rounded-lg focus:ring-2 focus:ring-[#3399FF] focus:border-transparent text-white placeholder-gray-500"
                      placeholder="Your message here..."
                      required
                  />
                </div>

                <div className="pt-2">
                  <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#007FFF] to-[#3399FF] text-white font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                        'Sending...'
                    ) : (
                        <>
                          <FiSend className="mr-2" />
                          Send Message
                        </>
                    )}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default Contact;