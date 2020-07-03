import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    pagi: {
        margin: '30px 0'
    }
});


const Pagi = (props) => {
    const classes = useStyle();
    // console.log("Hello this is Pagi page ",props.totalCount, props.onPagi);
    const pagiValue = Math.ceil(props.totalCount / props.onPagi);
    return(
         
        <div> 
        <Pagination className={classes.pagi} count={pagiValue} color="primary" />
        </div>
    );
}

export default Pagi;