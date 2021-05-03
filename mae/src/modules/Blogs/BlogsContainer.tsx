import React from "react";
import BlogCard from "./BlogCard";
import { Grid, makeStyles, createStyles, Theme } from "@material-ui/core";
import {dataType} from "../../../pages/index";
import useBlogStore from "../../store/BlogStore";

const useStyles = makeStyles((theme:Theme)=>createStyles({
  blogCon: {
    marginTop: "1vh"
  }
}))

interface BlogsContainerProps {
  data: dataType
}

const BlogsContainer:React.FC<BlogsContainerProps> = ({data}) =>  {
  const classes = useStyles();
  const blogStore = useBlogStore(state=>state.blogs);
  return (
    <Grid container className={classes.blogCon} direction="column" spacing={3}>
      {data.map((info)=>{
          if(blogStore.includes(info.tags))
          return (
          <Grid item xs key={info.id}>
            <BlogCard title={info.title} description={info.authorName} content={info.content} tags={info.tags} dateprops={info.eventTime} />
          </Grid>
          )
      })}
    </Grid>
  );
}

export default BlogsContainer;
