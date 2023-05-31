import React from 'react'
import { useRouter } from "next/router";
import { Banner, Outstream } from "exoclick-react";
import Link from 'next/link'
import MultiformatAds from './Ads/MultiFormatAds';
import PopunderAds_2 from './Ads/Popunder_2';

function PicsThumbnail({ data }) {

    const router = useRouter();

    const nextlink = data.nextLink.substring(data.nextLink.indexOf(".co/") + 4, data.nextLink.length)


    return (
        <div>
            <div className={`animate-fade flex flex-col justify-center rounded-lg md:hover:scale-105 transform transition duration-150 bg-white`}>
                <Link href={`/photo/${nextlink}`}>
                        <img
                            className='object-contain '
                            loading="lazy"
                            alt={data.title}
                            src={data.thumbnailUrl}

                        ></img>
                        <h1 className='text-xs lg:text-sm p-1 font-bold font-inter'>{data.title}</h1>
                        <p className='text-xs lg:text-sm p-1 font-poppins'>{data.dataAdded}</p>

                </Link>

            </div>

        </div>
    )
}

export default PicsThumbnail