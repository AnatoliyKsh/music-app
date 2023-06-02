import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query";

export const shazamCoreApi = createApi({
    reducerPath:'shazamCoreApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders:(headers)=>{
            headers.set('X-RapidAPI-Key', '0a0ad11a04msh0f2a08a7e71a3aep1e12f8jsn2f1f817c82b2')
            return headers;
        },
    }),
    endpoints:(builder) => ({
        getTopCharts: builder.query({query:()=>'/charts/world'}),
    }),
});
export const {
    useGetTopChartsQuery,
}= shazamCoreApi;

