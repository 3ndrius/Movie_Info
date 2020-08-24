import React from 'react'
import Skeleton from 'react-loading-skeleton';
import './skeleton.scss';

export default function SkeletonLoading() {
    return (
        <div className="skeleton">
            <Skeleton height={750} width={450} />
            <Skeleton height={750} width={450} />
            <Skeleton height={750} width={450} />
            <Skeleton height={750} width={450} />
            <Skeleton height={750} width={450} />
            <Skeleton height={750} width={450} />
            <Skeleton height={750} width={450} />
            <Skeleton height={750} width={450} />
        </div>
    )
}
