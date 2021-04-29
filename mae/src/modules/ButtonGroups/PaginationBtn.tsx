import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import useUrlStore from "../../store/QueryStore";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

interface PaginationBtnProps {
  isNext: boolean;
}

const PaginationBtn:React.FC<PaginationBtnProps> = ({isNext}) =>{
  const classes = useStyles();
  const pageNum = useUrlStore(state=>state.pageNum);
  const nextPage = useUrlStore(state=>state.nextPage);
  const prevPage = useUrlStore(state=>state.prevPage);


  return (
    <div className={classes.root}>
      <ButtonGroup variant="contained" color="secondary" aria-label="contained primary button group">
        <Button disabled={pageNum===0} onClick={prevPage}>Prev</Button>
        <Button disabled={!isNext} onClick={nextPage}>Next</Button>
      </ButtonGroup>
    </div>
  );
}

export default PaginationBtn;
