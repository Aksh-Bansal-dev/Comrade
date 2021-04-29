type fetcherType = (args: RequestInfo) => any;

// const fetcher: fetcherType = async (...args) => {
//   const res = await fetch(...args);
//   console.log(res.json());
//   return res.json();
// };

const fetcher: fetcherType = (...args) =>
  fetch(...args).then((res) => res.json());

export default fetcher;
