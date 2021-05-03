import getUrl from "../getUrl";

describe("Making Link", () => {
  test("Only tag", () => {
    const queryString = "#event";
    const pageNum = 0;

    expect(getUrl(pageNum, queryString)).toBe("?_limit=10&_start=0&tags=event");
  });
  test("Only author", () => {
    const queryString = "@user";
    const pageNum = 0;

    expect(getUrl(pageNum, queryString)).toBe(
      "?_limit=10&_start=0&authorName=user"
    );
  });
  test("2nd page", () => {
    const queryString = "";
    const pageNum = 1;

    expect(getUrl(pageNum, queryString)).toBe("?_limit=10&_start=10");
  });
  test("Query with space", () => {
    const queryString = " #event";
    const pageNum = 0;

    expect(getUrl(pageNum, queryString)).toBe("?_limit=10&_start=0");
  });
  test("Query with both tag and author", () => {
    const queryString = "#event@user";
    const pageNum = 0;

    expect(getUrl(pageNum, queryString)).toBe("?_limit=10&_start=0");
  });
  test("Wrong tag", () => {
    const queryString = "#events";
    const pageNum = 0;

    expect(getUrl(pageNum, queryString)).toBe(
      "?_limit=10&_start=0&tags=events"
    );
  });
});
