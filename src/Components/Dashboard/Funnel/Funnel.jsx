

const Funnel = () => {
    return (
        <div className=' col-span-3 bg-white rounded-lg'>
            <p className="font-bold pl-3">Top Funnls </p>
            <div className="overflow-x-auto">
                <table className="table font-semibold">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            
                            <td>Lux iPhone Battery Case</td>
                            <td className="flex gap-2 items-center"><div className="w-2 h-2 bg-red-500  rounded-full"></div><p>Red</p></td>
                            <td>22 Orders</td>
                            <td>$13280.0</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                        <td>
                            Lux iPhone Battery Case</td>
                            <td className="flex gap-2 items-center"><div className="w-2 h-2 bg-black rounded-full"></div><p>Black</p></td>
                            <td>20 Orders</td>
                            <td>$12180.0</td>
                        </tr>
                        {/* row 3 */}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Funnel;