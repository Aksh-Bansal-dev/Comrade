import create from "zustand";
import { combine, devtools } from "zustand/middleware";
import { tagsType } from "../utils/tags";

const useBlogStore = create(
  devtools(
    combine(
      {
        blogs: ["event"],
      },
      (set) => ({
        setBlog: (tag: tagsType, check: boolean) => {
          if (check)
            return set((state) => ({
              blogs: [...state.blogs, tag],
            }));
          else {
            return set((state) => ({
              blogs: state.blogs.filter((blog) => blog !== tag),
            }));
          }
        },
      })
    )
  )
);

export default useBlogStore;
