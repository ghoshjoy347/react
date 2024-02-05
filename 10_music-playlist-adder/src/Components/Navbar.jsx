import React from "react"

function Navbar({data}){
    return (
    <div className="w-full px-20 py-3 flex justify-between items-center">
        <h3>ORANGE</h3>
        <div className="flex p-2 px-4 bg-orange-400 text-sm rounded-md gap-3">
            <h3>My Playlist :</h3>
            <h4>{data.filter(item => item.added).length}</h4>
        </div>
    </div>
    )
}

export default Navbar