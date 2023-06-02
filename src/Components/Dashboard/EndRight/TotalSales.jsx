
const TotalSales = () => {
    return (
        <div className="">
            <p className="font-bold pl-3 ">Total Sales </p>
            <div className="">
                <div className="flex  items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <p>order</p>
                    </div>

                    <p>$154030</p>
                </div>
            </div>

            <div className="">
                <div className="flex  items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <p>Returns</p>
                    </div>

                    <p>-$13030</p>
                </div>
            </div>
        </div>
    );
};

export default TotalSales;