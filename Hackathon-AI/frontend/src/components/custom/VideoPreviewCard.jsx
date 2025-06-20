import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/Card';

export const VideoPreviewCard = ({ videoData, className }) => {
    if (!videoData) {
        return <Card className={`animate-pulse ${className}`}><CardContent><div className="h-48 bg-gray-700 rounded-md"></div><div className="p-4"><div className="h-5 w-3/4 bg-gray-700 rounded-md mt-2"></div><div className="h-4 w-1/2 bg-gray-700 rounded-md mt-3"></div></div></CardContent></Card>;
    }
    if (videoData.error) {
        return <Card className={className}><CardContent><p className="text-red-400 p-6 text-center">{videoData.error}</p></CardContent></Card>;
    }
    return (
        <Card className={`overflow-hidden ${className}`}>
            {videoData.thumbnailUrl && <img src={videoData.thumbnailUrl} alt="Video Thumbnail" className="w-full h-auto border-b border-gray-700" />}
            <CardHeader>
                <CardTitle>{videoData.title}</CardTitle>
                <CardDescription>{videoData.description ? `${videoData.description.substring(0, 100)}...` : 'No description available.'}</CardDescription>
            </CardHeader>
        </Card>
    );
};