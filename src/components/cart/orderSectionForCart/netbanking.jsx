




export default function NetBanking() {

    const banks= [{bank: "HDFC", value: "hdfc"},
                {bank: "ICICI", value: "icici"},
                {bank: "SBI", value: "sbi"},
                {bank: "Axis", value: "axis"},
                {bank: "Andhra Bank", value: "ab"},
                {bank: "Bank of Baroda", value: "bob"},
                {bank: "Bank of India", value: "boi"},
                {bank: "Bank of Maharashtra", value: "bom"},
                {bank: "Canara Bank", value: "cb"},
                {bank: "Indian Overeseas Bank", value: "iob"},
                {bank: "Yes Bank", value: "yb"},
                {bank: "Kotak Bank", value: "kb"},
                ];

    return (
        <div className="px-[2rem] w-full">
            {
                banks.map(item => {
                    const {bank, value}= item;

                    return (
                        <div key={value} className="px-[1rem] flex items-center justify-between py-[10px] gap-[10px]
                            rounded-[5px] cursor-pointer
                            hover:bg-[#f2f2f2]">
                            <label htmlFor={value} className="w-full cursor-pointer">{bank}</label>
                            <input type="radio" name="bank" id={value} value={value} 
                                className="w-[1rem] h-[1rem] cursor-pointer"/>
                        </div>
                    )
                })
            }
        </div>
    )
}