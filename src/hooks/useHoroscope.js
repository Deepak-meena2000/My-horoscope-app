import {useQuery} from 'react-query';
import axios from 'axios';

const fetchHoroscope = async (zodiacSign) => {
    const {data} = await axios.post(`https://aztro.sameerkumar.website?sign=${zodiacSign}&day=Today`)
    return data
}


const useHoroscope = (zodiacSign) => useQuery(['horoscope',zodiacSign], () => fetchHoroscope(zodiacSign));

export default useHoroscope;