import React from 'react';
import { motion } from "framer-motion";

const Statement = () => {
    return (
        <div id='statement' className='relative h-auto bg-gray-900'>
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
                        <h3 className='text-xl md:text-2xl font-semibold text-white mt-2'>Core Christian Faith</h3>
                        <p className='mt-3 font-light text-gray-200'>
                            This work is inter-denominational and stands within the historic Christian faith, as confessed in the Apostles' and Nicene Creeds and proclaimed by the apostles in the New Testament.
                        </p>
                    </motion.div>

                    <div className='mx-6 md:mx-12 grid grid-cols-1 lg:grid-cols-2 gap-6'>
                        <div className='rounded-2xl border border-white/10 bg-gray-800/50 p-6'>
                            <p className='text-yellow-200 font-semibold mb-3'>The Triune God</p>
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

                        <div className='rounded-2xl border border-white/10 bg-gray-800/50 p-6'>
                            <p className='text-yellow-200 font-semibold mb-3'>The Incarnation</p>
                            <div className='text-left font-light text-white space-y-2'>
                                <p>The eternal Son of God took on human flesh for our salvation.</p>
                                <p>Jesus Christ is <span className='font-medium text-yellow-100'>fully God and fully man</span>—conceived by the Holy Spirit, born of the Virgin Mary. In Him, the fullness of God dwells bodily.</p>
                                <p>He lived in perfect obedience, revealing the Father and proclaiming the kingdom of God.</p>
                            </div>
                        </div>

                        <div className='rounded-2xl border border-white/10 bg-gray-800/50 p-6'>
                            <p className='text-yellow-200 font-semibold mb-3'>The Cross & Resurrection</p>
                            <div className='text-left font-light text-white space-y-2'>
                                <p>Jesus Christ was crucified, truly died, and was buried. On the cross, He bore our sins, reconciling us to God and triumphing over sin and death.</p>
                                <p>His sacrifice was <span className='font-medium text-yellow-100'>once for all</span>, sufficient and complete.</p>
                                <p>On the third day, He rose bodily from the dead. He ascended into heaven, is seated at the right hand of the Father, and ever lives to intercede for His people.</p>
                                <p className='text-sm italic'>He will come again in glory to judge the living and the dead.</p>
                            </div>
                        </div>

                        <div className='rounded-2xl border border-white/10 bg-gray-800/50 p-6'>
                            <p className='text-yellow-200 font-semibold mb-3'>Salvation & the Holy Spirit</p>
                            <div className='text-left font-light text-white space-y-2'>
                                <p>Salvation is by <span className='font-medium text-yellow-100'>grace alone, through faith alone, in Christ alone</span>.</p>
                                <p>The Holy Spirit brings new birth, unites believers to Christ, and dwells within them, forming them into His likeness.</p>
                                <p className='text-sm'>By the Spirit, we are justified, adopted, sanctified, and sealed for the day of redemption.</p>
                            </div>
                        </div>

                        <div className='rounded-2xl border border-white/10 bg-gray-800/50 p-6'>
                            <p className='text-yellow-200 font-semibold mb-3'>The Church</p>
                            <div className='text-left font-light text-white space-y-2'>
                                <p>We confess one holy, universal Church - the body of Christ - built upon the foundation of the apostles and prophets.</p>
                                <p>All who confess Jesus Christ as Lord and believe in His resurrection are united in Him by the Spirit and called to worship God, proclaim the gospel, and live in love and holiness.</p>
                            </div>
                        </div>

                        <div className='rounded-2xl border border-white/10 bg-gray-800/50 p-6'>
                            <p className='text-yellow-200 font-semibold mb-3'>The Holy Scriptures</p>
                            <div className='text-left font-light text-white space-y-2'>
                                <p>The Holy Scriptures of the Old and New Testaments are inspired by God and bear faithful witness to Jesus Christ.</p>
                                <p>They are authoritative, trustworthy and sufficient for teaching, correction, and training in righteousness, so that the people of God may be equipped for every good work.</p>
                            </div>
                        </div>
                    </div>

                    <div className='mx-6 md:mx-12 mt-8 rounded-2xl border border-yellow-200/20 bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-sm p-6'>
                        <p className='text-yellow-200 font-semibold mb-2'>The Apostolic Gospel</p>
                        <p className='text-sm md:text-base font-light text-gray-200'>
                            These essentials reflect the gospel proclaimed in the Epistles: Jesus Christ crucified and risen, salvation by grace through faith, the indwelling Holy Spirit, and the blessed hope of His appearing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statement;