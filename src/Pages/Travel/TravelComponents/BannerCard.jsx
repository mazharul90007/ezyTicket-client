
const BannerCard = ({ card }) => {
    const { title, description, linkText } = card;
    return (
        <div className='shadow-2xl rounded p-5 flex flex-col justify-between bg-white'>
            <div>
                <h3 className='text-xl md:text-2xl font-semibold'>{title}</h3>
                <p className=''>{description}</p>
            </div>
            <button className='btn mt-4'>{linkText}</button>
        </div>
    )
}

export default BannerCard