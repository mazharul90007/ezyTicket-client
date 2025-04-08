import { useParams } from "react-router-dom";


const PaymentSuccess = () => {
    const {tran_id} = useParams();
    return (
        <div className="min-h-screen pt-24">
            <h2 className="text-5xl text-green-500 text-center font-semibold">Payment Successfully Done. id: {tran_id}</h2>
        </div>
    );
};

export default PaymentSuccess;