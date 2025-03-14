
const BannerCard = ({ card }) => {
    const { title, description, linkText, icon } = card;
    return (
        <div className='shadow-2xl rounded p-5 flex flex-col justify-between bg-white'>
            <div>
                <div className="text-center text-4xl mb-2 text-main ">
                    {icon}
                </div>
                <h3 className='text-xl text-supporting md:text-2xl font-semibold'>{title}</h3>
                <p className=''>{description}</p>
            </div>
            <button className='btn mt-4'>{linkText}</button>
        </div>
    )
}

export default BannerCard