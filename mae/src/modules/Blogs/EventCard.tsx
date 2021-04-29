import React,{useState} from "react";
import {Grid, Typography, Paper,makeStyles, createStyles, Theme,Container } from "@material-ui/core";
import moment from "moment";
import useBlogStore from "../../store/BlogStore";
import DialogBlog from "./DialogBlog";

const useStyles = makeStyles((theme: Theme)=>createStyles({
  root: {
    flexGrow: 1
  },
  con: {
    background: "var(--card)",
    flexGrow: 1,
    padding: 9,
    border: "4px solid #f44336", // red
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

export interface CardProps {
  title: string;
  description: string;
  tag: "event";
  dateprops?: string;
  content: string;
}

const EventCard:React.FC<CardProps> = ({title, description,tag,dateprops,content}) =>  {
  const classes = useStyles();
  const usableDate = moment(dateprops).format("MMM Do YYYY");
  const usableTime = moment(dateprops).format("LT");

  const blogs = useBlogStore(state=>state.blogs);

  const [isOpen, setIsOpen] = useState(false);
  const handleClickOpen = ()=>{
    setIsOpen(!isOpen);
  }

  return (
    <>
    {
      blogs.includes("event")?
      (
        <Container onClick={handleClickOpen}>
          <DialogBlog content={content} open={isOpen} toggle={handleClickOpen} title={title} author={description} />
          <Paper className={classes.con}>
            <Grid container direction="row">
              <Grid container xs item direction="column" >
                <Grid item>
                  <Typography className={classes.title}>{title}</Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.desc}>{description}</Typography>
                </Grid>
              </Grid>
              <Grid container xs item direction="column" >
                <Grid item>
                  <Typography align="right" className={classes.title}>{usableDate}</Typography>
                </Grid>
                <Grid item>
                  <Typography align="right" className={classes.desc}>{usableTime}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      ):
      <></>
    }
    </>
  );
}

export default EventCard;
