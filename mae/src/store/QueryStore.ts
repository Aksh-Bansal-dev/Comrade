import create from "zustand";
import { combine } from "zustand/middleware";

// Note that pageNum shouldn't be less than 0
const useQueryStore = create(
  combine(
    {
      pageNum: 0,
      query: "",
    },
    (set) => ({
      nextPage: () => {
        return set((state) => ({
          pageNum: state.pageNum + 1,
        }));
      },
      prevPage: () => {
        return set((state) => ({
          pageNum: state.pageNum - 1,
        }));
      },
      resetPage: () => {
        return set((state) => ({
          pageNum: 0,
        }));
      },
      setQuery: (input: string) => {
        return set((state) => ({
          query: input,
        }));
      },
    })
  )
);

export default useQueryStore;
