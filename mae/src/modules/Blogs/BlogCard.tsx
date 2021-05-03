import React,{useState} from "react";
import {Grid, Typography, Paper,makeStyles, createStyles, Theme,Container } from "@material-ui/core";
import DialogBlog from "./DialogBlog";
import moment from "moment";

import {map, tagsType} from "../../utils/tags";

export interface CardProps {
  title: string;
  description: string;
  tags?: tagsType;
  dateprops?: string;
  content: string;
}

const BlogCard:React.FC<CardProps> = ({title, description,tags,dateprops, content}) =>  {
  const isEvent = tags==="event" && dateprops;

  const usableDate = isEvent?moment(dateprops).format("MMM Do YYYY"): "";
  const usableTime = isEvent?moment(dateprops).format("LT"): "";


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
    <Container onClick={handleClickOpen}>
      <DialogBlog content={content} open={isOpen} toggle={handleClickOpen}  title={title} author={description}/>
      <Paper className={classes.con}>
            <Grid container >
        <Grid container xs item direction="column" >
          <Grid item>
            <Typography className={classes.title}>{title}</Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.desc}>{description}</Typography>
          </Grid>
        </Grid>
        <Grid item  >
          <Grid item container direction="column">
          <Grid item >
            <Typography align="right" className={classes.title}>{usableDate}</Typography>
          </Grid>
          <Grid item >
            <Typography align="right" className={classes.desc}>{usableTime}</Typography>
          </Grid>
          </Grid>
        </Grid>

        </Grid>
      </Paper>
    </Container>
  );
}

export default BlogCard;
