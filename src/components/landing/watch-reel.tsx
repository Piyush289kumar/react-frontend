import { Play } from 'lucide-react';

export function WatchReel() {
    return (
        <>
            <section className='px-52 py-32'>
                <div className="h-[600px] w-full bg-white rounded-3xl shadow-md flex justify-center align-middle items-center">
                    <h3 className='text-4xl font-medium'>We not build </h3>
                </div>

                <h3 className='text-xl font-medium flex align-middle items-center justify-center mt-3'>Watch Reel <span className='border border-blue-600 text-blue-600 px-1 rounded-full mx-2'><Play width={15} /></span> </h3>
            </section>

        </>



    );
}
