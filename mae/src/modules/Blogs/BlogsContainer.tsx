import React from "react";
import BlogCard from "./BlogCard";
import { Grid, makeStyles, createStyles, Theme } from "@material-ui/core";
import {dataType} from "../../../pages/index";

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
  return (
    <Grid container className={classes.blogCon} direction="column" spacing={3}>
      {data.map((info)=>{
          return (
          <Grid item xs key={info.id}>
            <BlogCard title={info.title} description={info.authorName} content={info.content} tags={info.tags} date={info.eventTime} />
          </Grid>
          )
      })}
    </Grid>
  );
}

export default BlogsContainer;
