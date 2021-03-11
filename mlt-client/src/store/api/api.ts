import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import { ItemDetail, QueryResults } from "../../models/Interfaces";

const callAPI = async ({
  url,
  method,
  data,
}: AxiosRequestConfig): Promise<AxiosResponse<QueryResults | ItemDetail>> => {
  return await Axios({
    url,
    method,
    data,
  });
};

export default callAPI;
