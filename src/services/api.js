import axios from "axios";

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
export const fetchPost = async (name, page) => {
    const KEY = '36628090-3939a6c61934d7181d416eca1';
    const { data } = await axios.get(
      `https://pixabay.com/api/?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return data;
}