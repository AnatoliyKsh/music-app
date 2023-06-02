import React from 'react'
import {genres} from "../Assets/Constants";
import SongCard from "../Components/SongCard";
import {useGetTopChartsQuery} from "../Api/ShazamCore.";

const Main = () => {
    const {data, isFetching, error } = useGetTopChartsQuery();
    const generTitle= ' pop'
    console.log(data)

    return(
        <div className="flex flex-coll">
            <h2>Discover{generTitle}</h2>
            <select>
                {genres.map((genre)=><option key={genre.value} value={genre.value}>{genre.title}</option>)}
            </select>
            <div className="flex flex-whap justifu-center gap-8" >
                {[1,2,3,4,5,6,7,8,9,10].map((song,i)=>(
                    <SongCard
                        key={song.key}
                        song={song}
                        i={i}/>
                    ))}
            </div>
        </div>
    )
}
export default Main
