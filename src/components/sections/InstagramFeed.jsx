const imgs = [
    { id: 1, src: "/src/assets/images/Puffers.png" },
    { id: 2, src: "/src/assets/images/collection1.png" },
    { id: 3, src: "/src/assets/images/collection2.png" },
    { id: 4, src: "/src/assets/images/article2.png" },
];

function InstagramFeed() {
    return (
        <div className="w-full mx-auto flex justify-center">
            <div className="w-full max-w-[1200px] pt-[80px] pb-[80px] flex flex-col gap-[8px] px-6">
                <div className="w-full flex justify-center items-center">
                    <p className="font-semibold text-[12px] leading-[18px] tracking-[1px] text-center uppercase text-[#666666]">
                        NEWSFEED
                    </p>
                </div>
                <div className="w-full flex justify-center items-center">
                    <p className="font-bold text-[32px] leading-[48px] text-text">
                        Instagram
                    </p>
                </div>
                <div className="w-full flex gap-[24px] justify-center items-center flex-col">
                    <p className="max-w-[436.36px] font-normal text-[16px] leading-[24px] text-center text-[#555555]">
                        Follow us on social media for more discount & promotions
                    </p>
                    <p className="font-normal text-[16px] leading-[24px] text-[#555555] text-center">
                        @VisioCreate_official
                    </p>
                </div>
                <div className="w-full pt-[24px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px]">
                    {imgs.map((img) => (
                        <div key={img.id} className="rounded-[8px] overflow-hidden">
                            <img src={img.src} alt="Instagram" className="w-full h-[288px] object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default InstagramFeed;