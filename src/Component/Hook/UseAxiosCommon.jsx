import axios from "axios";


const axiosCommon = axios.create({
  baseURL: 'http://localhost:5000',
});
const UseAxiosCommon = () => {
  return axiosCommon;
};



export default UseAxiosCommon;