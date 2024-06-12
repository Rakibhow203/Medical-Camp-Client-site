import axios from "axios";


const axiosCommon = axios.create({
  baseURL: 'https://madical-camp-server.vercel.app',
});
const UseAxiosCommon = () => {
  return axiosCommon;
};



export default UseAxiosCommon;