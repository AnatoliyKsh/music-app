import React from 'react'
import {genres} from "../Assets/Constants";
import SongCard from "../Components/SongCard";
import {useGetTopChartsQuery} from "../Api/ShazamCore.";
import Error from "../Components/Error";
import Loader from "../Components/Loader";

const Main = () => {
    const {data, isFetching, error} = useGetTopChartsQuery();
    const generTitle = ' pop';

    if (isFetching) return <Loader title="Loading songs..."/>;

    if (error) return <Error/>;

    return (
        <div className="flex flex-coll">
            <h2>Discover{generTitle}</h2>
            <select>
                {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
            </select>
            <div className="flex flex-whap justifu-center gap-8">
                {data?.map((song, i) => (
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
