import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ContentContainer from '@kappa/components/src/atoms/contentContainer';
import Divider from '@kappa/components/src/atoms/divider';
import Typography from '@kappa/components/src/atoms/typography';

import FOOTER_NOTES from './footerNotes.constants';

/* STYLES */
import useStyles from './footerNotes.styles';

export default function FooterNotes() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Divider className={classes.divider} />
    <ContentContainer maxWidth="lg">
      <Grid container spacing={3}>
        {FOOTER_NOTES.map((notes) => (
          <Grid item xs={12} sm={6} lg={3}>
            <Grid
              container
              direction="column"
              alignItems="center"
            >
            <notes.ICON fontSize="large" color="primary" />
              <Typography variant="h6" gutterBottom>{notes.TITLE}</Typography>
              <Typography gutterBottom style={{textAlign: 'center'}} variant="body2" color="textSecondary">{notes.DESCRIPTION}</Typography>
            </Grid>
            </Grid>
          ))}
      </Grid>
    </ContentContainer>
    </div>
  );
}
