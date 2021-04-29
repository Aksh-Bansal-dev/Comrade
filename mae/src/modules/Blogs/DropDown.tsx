import React, {useState} from "react";
import {Checkbox, FormControlLabel, FormGroup, Container, makeStyles, createStyles, Theme} from "@material-ui/core";
import { checkboxData, nameToTag } from "../../utils/tags";
import useBlogStore from "../../store/BlogStore";

const useStyles = makeStyles((theme: Theme)=>createStyles({
  root: {
    justifyContent: "center"
  },
}))

export interface DropDownProps {
}

const DropDown:React.FC<DropDownProps> = () =>  {
  const classes = useStyles();
  const setBlog = useBlogStore(state=>state.setBlog);

  const [check, setCheck] = useState([false, false, false, false, false, true, false])
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setBlog(nameToTag.get(event.target.name), event.target.checked);
    check[parseInt(event.target.name)] = event.target.checked
    setCheck([...check]);
  };

  return (
    <FormGroup row className={classes.root}>
      {
        checkboxData.map((each, i)=>(
          <FormControlLabel
            key={i}
            control={
              <Checkbox
                checked={check[i]}
                onChange={handleChange}
                name={each.name}
                color="primary"
              />
            }
            label={each.label}
          />
        ))
      }
    </FormGroup>
  );
}

export default DropDown;
