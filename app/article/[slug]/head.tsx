import React from "react";

export default function Head() {
    return (
        <>
            <meta charSet="utf-8" />
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <title>Articles | Tech Blog</title>
            <link href={`${process.env.DOMAIN}/`} rel="canonical" />
            <meta content="index, follow" name="robots" />
            <meta name="description" content="Technical Blogs" />
            <meta property="og:url" content="Tech Blog" />
            <meta property="og:description" content="Technical Blogs" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="homepage" />
            <link rel="icon" href="/favicon.ico" />
        </>
    )
}
