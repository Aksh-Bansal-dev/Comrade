import React,{useState} from "react";
import {Grid, Typography, Paper,makeStyles, createStyles, Theme,Container } from "@material-ui/core";
import DialogBlog from "./DialogBlog";

import EventCard from "./EventCard";
import {map, tagsType} from "../../utils/tags";
import useBlogStore from "../../store/BlogStore";

export interface CardProps {
  title: string;
  description: string;
  tags?: tagsType;
  date?: string;
  content: string;
}

const BlogCard:React.FC<CardProps> = ({title, description,tags,date, content}) =>  {
  const blogs = useBlogStore(state=>state.blogs);

  if(tags==="event"){
    return <EventCard title={title} description={description} tag={tags} dateprops={date} content={content}/>
  }

  const useStyles = makeStyles((theme: Theme)=>createStyles({
    root: {
      flexGrow: 1
    },
    con: {
      background: "var(--card)",
      flexGrow: 1,
      padding: 9,
      border: `4px solid ${tags?map.get(tags):"#9e9e9e"}`,
      cursor: "pointer"
    },
    title: {
      fontSize: "1.4rem",
      fontWeight: 500
    },
    desc: {
      fontSize: "1rem",
      color: "grey"
    }
  }))

  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);
  const handleClickOpen = ()=>{
    setIsOpen(!isOpen);
  }

  return (
    <>
    {
      tags && blogs.includes(tags)?
      (

    <Container onClick={handleClickOpen}>
      <DialogBlog content={content} open={isOpen} toggle={handleClickOpen}  title={title} author={description}/>
      <Paper className={classes.con}>
        <Grid container item direction="column" >
          <Grid item>
            <Typography className={classes.title}>{title}</Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.desc}>{description}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
      ):
      (
        <></>
      )
    }
    </>
  );
}

export default BlogCard;
