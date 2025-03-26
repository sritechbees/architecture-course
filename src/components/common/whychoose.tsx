import React from 'react';
import Image from 'next/image';

type WhyChooseUsProps = {
    firstRow: {
        imageFirst: boolean;
        image1: string;
        title1: string;
        number1: number;
        text1: string;
        imageSecond: boolean;
        image2: string;
        title2: string;
        number2: number;
        text2: string;
    };
    secondRow: {
        imageFirst: boolean;
        image3: string;
        title3: string;
        number3: number;
        text3: string;
        imageSecond: boolean;
        image4: string;
        title4: string;
        number4: number;
        text4: string;
    };
};

const WhyChoseUs: React.FC<WhyChooseUsProps> = ({ firstRow, secondRow }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-12">
            {/* First Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* First Column of First Row */}
                {firstRow.imageFirst ? (
                    <>
                        <Image src={firstRow.image1} alt="First Column Image 1" className="w-full h-auto" width={500} height={300} />
                        <div className="bg-primary flex flex-col justify-center text-lg text-white p-5">
                            <h3 className="text-xl font-bold mb-5">{firstRow.number1}. {firstRow.title1}</h3>
                            <p className='!text-sm'>{firstRow.text1}</p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="bg-gray-900 flex flex-col justify-center text-lg text-white p-5">
                            <h3 className="text-xl font-bold mb-5">{firstRow.number1}. {firstRow.title1}</h3>
                            <p className='!text-sm'>{firstRow.text1}</p>
                        </div>
                        <Image src={firstRow.image1} alt="First Column Image 1" className="w-full h-auto" width={500} height={300} />
                    </>
                )}

                {/* Second Column of First Row */}
                {firstRow.imageSecond ? (
                    <>
                        <Image src={firstRow.image2} alt="Second Column Image 2" className="w-full h-auto" width={500} height={300} />
                        <div className="bg-green-500 flex flex-col justify-center text-lg text-white p-5">
                            <h3 className="text-xl font-bold mb-5">{firstRow.number2}. {firstRow.title2}</h3>
                            <p className='!text-sm'>{firstRow.text2}</p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="bg-primary flex flex-col justify-center text-lg text-white p-5">
                            <h3 className="text-xl font-bold mb-5">{firstRow.number2}. {firstRow.title2}</h3>
                            <p className='!text-sm'>{firstRow.text2}</p>
                        </div>
                        <Image src={firstRow.image2} alt="Second Column Image 2" className="w-full h-auto" width={500} height={300} />
                    </>
                )}
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* First Column of Second Row */}
                {secondRow.imageFirst ? (
                    <>
                        <Image src={secondRow.image3} alt="First Column Image 3" className="w-full h-auto" width={500} height={300} />
                        <div className="bg-gray-900 flex flex-col justify-center text-lg text-white p-5">
                            <h3 className="text-xl font-bold mb-5">{secondRow.number3}. {secondRow.title3}</h3>
                            <p className='!text-sm'>{secondRow.text3}</p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="bg-green-500 flex flex-col justify-center text-lg text-white p-5">
                            <h3 className="text-xl font-bold mb-5">{secondRow.number3}. {secondRow.title3}</h3>
                            <p className='!text-sm'>{secondRow.text3}</p>
                        </div>
                        <Image src={secondRow.image3} alt="First Column Image 3" className="w-full h-auto" width={500} height={300} />
                    </>
                )}

                {/* Second Column of Second Row */}
                {secondRow.imageSecond ? (
                    <>
                        <Image src={secondRow.image4} alt="Second Column Image 4" className="w-full h-auto" width={500} height={300} />
                        <div className="bg-gray-900 flex flex-col justify-center text-lg text-white p-5">
                            <h3 className="text-xl font-bold mb-5">{secondRow.number4}. {secondRow.title4}</h3>
                            <p className='!text-sm'>{secondRow.text4}</p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="bg-primary flex flex-col justify-center text-lg text-white p-5">
                            <h3 className="text-xl font-bold mb-5">{secondRow.number4}. {secondRow.title4}</h3>
                            <p className='!text-sm'>{secondRow.text4}</p>
                        </div>
                        <Image src={secondRow.image4} alt="Second Column Image 4" className="w-full h-auto" width={500} height={300} />
                    </>
                )}
            </div>
        </div>
    );
};

export default WhyChoseUs;
