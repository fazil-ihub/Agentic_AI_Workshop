import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Send } from 'lucide-react';

export const EntryPage = ({ setPage, setVideoUrl }) => {
    const [localUrl, setLocalUrl] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setVideoUrl(localUrl);
        setPage('loading');
    };
    return (
        <main className="max-w-2xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Submit Your Pitch Video</CardTitle>
                    <CardDescription>Enter a public YouTube URL to begin the AI evaluation process.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Input value={localUrl} onChange={(e) => setLocalUrl(e.target.value)} placeholder="https://www.youtube.com/watch?v=..." />
                            <Button type="submit"><Send size={18} /> Evaluate</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </main>
    );
};
