import React from 'react';
import { motion } from "framer-motion";
import { FaInfinity, FaCross, FaCrown, FaDove, FaChurch, FaBookOpen } from "react-icons/fa";
import { MdMan } from "react-icons/md";

const essentials = [
    {
        title: 'The Triune God',
        icon: FaInfinity,
        color: 'yellow',
        text: 'One God, Father, Son, and Holy Spirit - one in being, equal in glory, and co-eternal in majesty, Creator of heaven and earth.'
    },
    {
        title: 'The Holy Scriptures',
        icon: FaBookOpen,
        color: 'amber',
        text: 'Given through the prophets and apostles, the Holy Scriptures are inspired by God and bear faithful witness to Jesus Christ.'
    },
    {
        title: 'The Incarnation',
        icon: MdMan,
        color: 'blue',
        text: 'The eternal Son became truly human: Jesus Christ, fully God and fully man, born of the Virgin Mary.'
    },
    {
        title: 'The Cross & Resurrection',
        icon: FaCross,
        color: 'red',
        text: 'Christ was crucified for our sins, died and was buried, rose from the dead on the third day, ascended into heaven, and is seated at the Father’s right hand.'
    },
    {
        title: 'The Holy Spirit',
        icon: FaDove,
        color: 'purple',
        text: 'The Lord, the giver of life, who proceeds from the Father; with the Father and the Son He is worshipped and glorified, and He has spoken through the prophets.'
    },
    {
        title: 'The Church',
        icon: FaChurch,
        color: 'green',
        text: 'One, holy, catholic, and apostolic Church - one body in Christ, called to worship God, proclaim the gospel, live in love, and share in Holy Communion and baptism.'
    },
    {
        title: 'The Return & Everlasting Life',
        icon: FaCrown,
        color: 'teal',
        text: 'Christ will come again in glory to judge the living and the dead, and His kingdom will have no end. We look for the resurrection of the dead and the life everlasting in the world to come.'
    },
];

const iconStyles = {
    yellow: 'from-yellow-200/20 to-yellow-400/10 text-yellow-200',
    blue: 'from-blue-200/20 to-blue-400/10 text-blue-200',
    red: 'from-red-200/20 to-red-400/10 text-red-200',
    indigo: 'from-indigo-200/20 to-indigo-400/10 text-indigo-200',
    purple: 'from-purple-200/20 to-purple-400/10 text-purple-200',
    green: 'from-green-200/20 to-green-400/10 text-green-200',
    amber: 'from-amber-200/20 to-amber-400/10 text-amber-200',
    teal: 'from-teal-200/20 to-teal-400/10 text-teal-200',
};


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
                            This work stands within the ancient, apostolic faith expressed in the Apostles' and Nicene Creeds - a confession shared by Catholics, Orthodox, and Protestants.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className='mx-6 md:mx-12 rounded-2xl border border-yellow-200/20 bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-sm p-6 md:p-8 relative overflow-hidden'
                    >
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-yellow-200/5 rounded-full blur-3xl' />

                        <div className='relative'>
                            <p className='text-yellow-200 font-semibold text-lg mb-1'>The Essentials of the Faith</p>
                            <p className='text-sm text-gray-300 font-light mb-6'>Summarised from the Apostles' and Nicene Creeds</p>

                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 text-left'>
                                {essentials.map(({ title, icon: Icon, color, text }) => (
                                    <div key={title} className='flex items-start gap-3'>
                                        <div className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br ${iconStyles[color]}`}>
                                            <Icon className='text-base' />
                                        </div>
                                        <div>
                                            <p className='text-white font-semibold'>{title}</p>
                                            <p className='text-sm text-gray-300 font-light mt-0.5'>{text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p className='text-sm md:text-base font-light text-gray-200 mt-6 pt-5 border-t border-white/10'>
                                This is the faith <strong className='font-semibold text-white'>"once for all delivered to the saints"</strong> (Jude 1:3) - tested by centuries, treasured across traditions.
                            </p>
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='mx-6 md:mx-12 mt-8 text-sm md:text-base font-light text-white'
                    >
                        <span className='font-semibold text-yellow-200'>Immanuel.</span> God is with us. The risen King Jesus is Lord and Savior.
                    </motion.p>
                </div>
            </div>
        </div>
    );
};

export default Statement;
