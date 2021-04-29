export const invalidRegex = /(#.+@)|(@.+#)|(\s)|[\!\"\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\>\=\?\[\]\{\}\\\\\^\_\`\~]/;

type getUrlType = (pageNum: number, query: string) => string;

const getUrl: getUrlType = (pageNum, query) => {
  const base = `?_limit=10&_start=${pageNum * 10}`;
  if (query === "" || invalidRegex.test(query)) {
    return base;
  } else {
    if (query[0] === "#") {
      // return `/${query.substring(1)}${base}`;
      return `${base}&tags=${query.substring(1)}`;
    } else if (query[0] === "@") {
      return `${base}&authorName=${query.substring(1)}`;
    } else {
      return base;
    }
  }
};

export default getUrl;
