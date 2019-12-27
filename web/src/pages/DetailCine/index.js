import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {

}

const DetailCine = (props) => {
  const { classes, match } = props;
  const branchId = match.params.id;
  return (
    <div>
      detailCine
    </div>
  );
};

export default withStyles(styles)(DetailCine);