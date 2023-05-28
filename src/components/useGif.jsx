import { useState ,useEffect} from "react";
import axios from "axios";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;




const useGif = (tag) => {
    const Tagurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const Randomurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const [gif, setGif] = useState("");
  const [Loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    const { data } = await axios.get(tag ? (Tagurl):(Randomurl));
    const imageSrc = data.data.images.downsized_large.url;
    setGif(imageSrc);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {gif , Loading , fetchData};
};

export default useGif;
