import React from 'react';
import { motion } from "framer-motion";
import { FaInfinity, FaCross, FaDove, FaChurch, FaBookOpen, FaHeart } from "react-icons/fa";
import { MdMan } from "react-icons/md";

const Statement = () => {
    return (
        <div id='statement' className='relative h-auto bg-gray-900 overflow-x-hidden'>
            <div className='flex flex-col md:flex-row md:w-full py-12'>
                <div className='text-white text-sm md:text-base w-full'>
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className='mx-6 md:mx-12 mb-6'
                    >
                        <p className='text-xs md:text-sm tracking-widest uppercase text-yellow-200'>Statement of faith</p>
                        <h3 className='text-xl md:text-2xl font-semibold text-white mt-2'>Historic Christian Faith</h3>
                        <p className='mt-3 font-light text-gray-200'>
                            This work stands within the ancient, apostolic faith confessed by Christians across all centuries and traditions. We affirm the Apostles' and Nicene Creeds—tested by time, embraced by Catholics, Orthodox, and Protestants alike—and proclaim the Gospel delivered once for all to the saints.
                        </p>
                    </motion.div>

                    <div className='mx-6 md:mx-12 grid grid-cols-1 lg:grid-cols-2 gap-6'>
                        {/* The Triune God */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className='group rounded-2xl border border-white/10 bg-gray-800/50 p-6 hover:border-yellow-200/30 hover:bg-gray-800/70 transition-all duration-300 relative overflow-hidden'
                        >
                            {/* Background gradient accent */}
                            <div className='absolute top-0 right-0 w-32 h-32 bg-yellow-200/5 rounded-full blur-2xl group-hover:bg-yellow-200/10 transition-all duration-300' />
                            
                            <div className='relative'>
                                <div className='flex items-center gap-3 mb-4'>
                                    <div className='flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-yellow-200/20 to-yellow-400/10 group-hover:from-yellow-200/30 group-hover:to-yellow-400/20 transition-all duration-300'>
                                        <FaInfinity className='text-yellow-200 text-xl' />
                                    </div>
                                    <p className='text-yellow-200 font-semibold text-lg'>The Triune God</p>
                                </div>
                                <div className='text-left font-light text-white space-y-3'>
                                    <p>We believe in one God, eternally existing as Father, Son, and Holy Spirit—one in essence and three in Persons.</p>
                                    <ul className='list-disc pl-5 space-y-1.5 text-sm'>
                                        <li>The Father is the source of all that exists</li>
                                        <li>The Son is eternally begotten of the Father</li>
                                        <li>The Holy Spirit proceeds from the Father and is sent by the Son</li>
                                    </ul>
                                    <p className='text-sm'>Equal in glory and co-eternal in majesty, the Triune God is the Creator and Sustainer of heaven and earth, holy in nature and perfect in love.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* The Incarnation */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className='group rounded-2xl border border-white/10 bg-gray-800/50 p-6 hover:border-yellow-200/30 hover:bg-gray-800/70 transition-all duration-300 relative overflow-hidden'
                        >
                            <div className='absolute bottom-0 left-0 w-32 h-32 bg-blue-400/5 rounded-full blur-2xl group-hover:bg-blue-400/10 transition-all duration-300' />
                            
                            <div className='relative'>
                                <div className='flex items-center gap-3 mb-4'>
                                    <div className='flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-200/20 to-blue-400/10 group-hover:from-blue-200/30 group-hover:to-blue-400/20 transition-all duration-300'>
                                        <MdMan className='text-blue-200 text-xl' />
                                    </div>
                                    <p className='text-yellow-200 font-semibold text-lg'>The Incarnation</p>
                                </div>
                                <div className='text-left font-light text-white space-y-2'>
                                    <p>The eternal Son of God took on human flesh for our salvation.</p>
                                    <p>Jesus Christ is <span className='font-medium text-yellow-100'>fully God and fully man</span>—conceived by the Holy Spirit, born of the Virgin Mary. In Him, the fullness of God dwells bodily.</p>
                                    <p>He lived in perfect obedience, revealing the Father and proclaiming the kingdom of God.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* The Cross & Resurrection */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className='group rounded-2xl border border-white/10 bg-gray-800/50 p-6 hover:border-yellow-200/30 hover:bg-gray-800/70 transition-all duration-300 relative overflow-hidden'
                        >
                            <div className='absolute top-0 right-0 w-32 h-32 bg-red-400/5 rounded-full blur-2xl group-hover:bg-red-400/10 transition-all duration-300' />
                            
                            <div className='relative'>
                                <div className='flex items-center gap-3 mb-4'>
                                    <div className='flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-red-200/20 to-red-400/10 group-hover:from-red-200/30 group-hover:to-red-400/20 transition-all duration-300'>
                                        <FaCross className='text-red-200 text-xl' />
                                    </div>
                                    <p className='text-yellow-200 font-semibold text-lg'>The Cross & Resurrection</p>
                                </div>
                                <div className='text-left font-light text-white space-y-2'>
                                    <p>Jesus Christ was crucified, truly died, and was buried. On the cross, He bore our sins, reconciling us to God and triumphing over sin and death.</p>
                                    <p>His sacrifice was <span className='font-medium text-yellow-100'>once for all</span>, sufficient and complete.</p>
                                    <p>On the third day, He rose bodily from the dead. He ascended into heaven, is seated at the right hand of the Father, and ever lives to intercede for His people.</p>
                                    <p className='text-sm italic'>He will come again in glory to judge the living and the dead.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Salvation & the Holy Spirit */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className='group rounded-2xl border border-white/10 bg-gray-800/50 p-6 hover:border-yellow-200/30 hover:bg-gray-800/70 transition-all duration-300 relative overflow-hidden'
                        >
                            <div className='absolute bottom-0 left-0 w-32 h-32 bg-purple-400/5 rounded-full blur-2xl group-hover:bg-purple-400/10 transition-all duration-300' />
                            
                            <div className='relative'>
                                <div className='flex items-center gap-3 mb-4'>
                                    <div className='flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-200/20 to-purple-400/10 group-hover:from-purple-200/30 group-hover:to-purple-400/20 transition-all duration-300'>
                                        <FaDove className='text-purple-200 text-xl' />
                                    </div>
                                    <p className='text-yellow-200 font-semibold text-lg'>Salvation & the Holy Spirit</p>
                                </div>
                                <div className='text-left font-light text-white space-y-2'>
                                    <p>Salvation is by <span className='font-medium text-yellow-100'>grace alone, through faith alone, in Christ alone</span>.</p>
                                    <p>The Holy Spirit brings new birth, unites believers to Christ, and dwells within them, forming them into His likeness.</p>
                                    <p className='text-sm'>By the Spirit, we are justified, adopted, sanctified, and sealed for the day of redemption.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* The Church */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className='group rounded-2xl border border-white/10 bg-gray-800/50 p-6 hover:border-yellow-200/30 hover:bg-gray-800/70 transition-all duration-300 relative overflow-hidden'
                        >
                            <div className='absolute top-0 right-0 w-32 h-32 bg-green-400/5 rounded-full blur-2xl group-hover:bg-green-400/10 transition-all duration-300' />
                            
                            <div className='relative'>
                                <div className='flex items-center gap-3 mb-4'>
                                    <div className='flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-green-200/20 to-green-400/10 group-hover:from-green-200/30 group-hover:to-green-400/20 transition-all duration-300'>
                                        <FaChurch className='text-green-200 text-xl' />
                                    </div>
                                    <p className='text-yellow-200 font-semibold text-lg'>The Church</p>
                                </div>
                                <div className='text-left font-light text-white space-y-2'>
                                    <p>We confess one holy, universal Church - the body of Christ - built upon the foundation of the apostles and prophets.</p>
                                    <p>All who confess Jesus Christ as Lord and believe in His resurrection are united in Him by the Spirit and called to worship God, proclaim the gospel, and live in love and holiness.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* The Scriptures */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className='group rounded-2xl border border-white/10 bg-gray-800/50 p-6 hover:border-yellow-200/30 hover:bg-gray-800/70 transition-all duration-300 relative overflow-hidden'
                        >
                            <div className='absolute bottom-0 left-0 w-32 h-32 bg-amber-400/5 rounded-full blur-2xl group-hover:bg-amber-400/10 transition-all duration-300' />
                            
                            <div className='relative'>
                                <div className='flex items-center gap-3 mb-4'>
                                    <div className='flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-amber-200/20 to-amber-400/10 group-hover:from-amber-200/30 group-hover:to-amber-400/20 transition-all duration-300'>
                                        <FaBookOpen className='text-amber-200 text-xl' />
                                    </div>
                                    <p className='text-yellow-200 font-semibold text-lg'>The Scriptures</p>
                                </div>
                                <div className='text-left font-light text-white space-y-2'>
                                    <p>The sacred Scriptures of the Old and New Testaments are inspired by God and bear faithful witness to Jesus Christ - to grow in wisdom of salvation through faith in Him.</p>
                                    <p>They are authoritative, trustworthy and sufficient for teaching, correction, and training in righteousness, so that the people of God may be equipped for every good work.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className='mx-6 md:mx-12 mt-8 group rounded-2xl border border-yellow-200/20 bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-sm p-6 hover:border-yellow-200/40 transition-all duration-300 relative overflow-hidden'
                    >
                        {/* Background glow effect */}
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-200/5 rounded-full blur-3xl group-hover:bg-yellow-200/10 transition-all duration-300' />
                        
                        <div className='relative'>
                            <div className='flex items-center gap-3 mb-3'>
                                <div className='flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-yellow-200/30 to-red-400/20 group-hover:from-yellow-200/40 group-hover:to-red-400/30 transition-all duration-300'>
                                    <FaHeart className='text-yellow-200 text-xl' />
                                </div>
                                <p className='text-yellow-200 font-semibold text-lg'>The Apostolic Gospel</p>
                            </div>
                            <p className='text-sm md:text-base font-light text-gray-200'>
                                These essentials reflect the Gospel proclaimed by the apostles, guarded by the Church Fathers, reaffirmed by the Reformers, and confessed by believers today: Jesus Christ crucified and risen, salvation by grace through faith, the indwelling Holy Spirit, and the blessed hope of His appearing. This is the faith <strong className="font-semibold">"once for all delivered to the saints" (Jude 1:3)</strong>, tested by centuries, treasured across traditions.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Statement;