import React,{useState} from 'react';
import {InputBase, IconButton} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import SearchIcon from "@material-ui/icons/Search";
import {invalidRegex} from "../../utils/getUrl";
import useUrlStore from "../../store/QueryStore";
import ClearIcon from "@material-ui/icons/Clear";
import HelpPopover from "./HelpPopover";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      marginLeft: theme.spacing(1),
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
    },
    errorCss: {
      border: "2px solid red",
      borderRadius: "theme.shape.borderRadius"
    },
    iconBtn: {
      color: "white",
    },
    noDisplay: {
      display: "none",
    }
  }),
);

interface SearchBarProps {}

const SearchBar:React.FC<SearchBarProps> = () => {
  const classes = useStyles();
  const setQuery = useUrlStore(state=>state.setQuery);
  const resetPage = useUrlStore(state=>state.resetPage);
  const [error,setError] = useState(false);
  const [value, setValue] = useState("");
  const [clearClass,setClearClass] = useState(classes.noDisplay);

  const checkInput = (s: string): boolean => {
    if(s[0]==="@" || s[0]==="#"){
      return !invalidRegex.test(s);
    }
    else{
      return false;
    }
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    if(checkInput(value)){
      resetPage();
      setQuery(value);
      setClearClass(classes.iconBtn);
    }
    else{
      setError(true);
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.value);
    setError(false);
  }
  const handleClear = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    setValue("");
    setError(false);
    resetPage();
    setQuery("");
    setClearClass(classes.noDisplay);
  }

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon color={error?"error":undefined} />
      </div>
      <form noValidate autoComplete="off"
       onSubmit={handleSubmit}
      >
      <InputBase
        placeholder="Search…"
        error={error}
        value={value}
        onChange={handleChange}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
          error: classes.errorCss
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton onClick={handleClear} className={clearClass}>
        <ClearIcon />
      </IconButton>
        <HelpPopover />
      </form>
    </div>
  );
}

export default SearchBar;
