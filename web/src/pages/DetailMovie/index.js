import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {

}

const DetailMovie = (props) => {
  const { classes, match } = props;
  const movieId = match.params.id;
  return (
    <div>
      detailMovie
    </div>
  );
};

export default withStyles(styles)(DetailMovie);