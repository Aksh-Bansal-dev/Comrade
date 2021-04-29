import React,{useState, useEffect} from "react";
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ReactMarkdown from "react-markdown";
import classes from "*.module.css";
import {makeStyles, createStyles, Theme} from "@material-ui/core";
const gfm = require('remark-gfm')

const useStyles = makeStyles((theme:Theme)=>createStyles({
  title: {
    fontWeight: 500,
    fontSize: "1.5rem"
  },
  sub: {
    fontWeight: 300
  }

}))

interface DialogBlogProps {
  open: boolean;
  toggle: ()=>void;
  content: string;
  author: string;
  title: string;
};

const DialogBlog:React.FC<DialogBlogProps> = ({
  open, toggle, content, title, author
})=>{
  const classes = useStyles();
  const descriptionElementRef = React.useRef<HTMLElement>(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  return (
      <Dialog
        open={open}
        onClose={toggle}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        fullScreen={true}
      >
        <DialogTitle id="scroll-dialog-title">
          <Typography className={classes.title} >{title}</Typography>
          <Typography className={classes.sub}>{author}</Typography>
        </DialogTitle>
        <DialogContent dividers={true}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
            component="span"
          >
            <ReactMarkdown plugins={[gfm]} children={content} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggle} color="primary">
            Back
          </Button>
        </DialogActions>
      </Dialog>
  )
}

export default DialogBlog;
