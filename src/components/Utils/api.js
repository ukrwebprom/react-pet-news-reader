import axios from "axios";

export const getData = async (request) => {
    const res = await axios.get(`http://hn.algolia.com/api/v1/search?query=${request}`);
    console.log(res);
    return res.data.hits;
}