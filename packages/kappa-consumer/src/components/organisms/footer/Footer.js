import React from 'react';
import clsx from 'clsx';

// Icons
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon,
  Reddit as RedditIcon,
  Twitter as TwitterIcon,
  Pinterest as PinterestIcon,
} from '@material-ui/icons';

// Styles - Responsible for Responsiveness
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import Button from 'kappaComponents/atoms/button';

// Components
import Typography from 'kappaComponents/atoms/typography';
import Divider from 'kappaComponents/atoms/divider';
import Container from 'kappaComponents/atoms/container';
import Box from 'kappaComponents/atoms/box';
import Grid from 'kappaComponents/atoms/grid';

// Styles
import useStyles from './footer.styles';

const Footer = () => {
  const classes = useStyles();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Box className={classes.root}>
      <Container
        maxWidth="lg"
      >
        <Grid container className={classes.header}>
          <Grid item className={classes.headerTitleContainer}>
            <Box>
              <Typography gutterBottom variant="h6" className={classes.white}>Follow-us on social media!</Typography>
            </Box>
          </Grid>

          <Grid item>
            <Box>
              <FacebookIcon className={clsx(classes.icon, classes.white)} />
              <InstagramIcon className={clsx(classes.icon, classes.white)} />
              <YouTubeIcon className={clsx(classes.icon, classes.white)} />
              <RedditIcon className={clsx(classes.icon, classes.white)} />
              <TwitterIcon className={clsx(classes.icon, classes.white)} />
              <PinterestIcon className={clsx(classes.icon, classes.white)} />
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Divider className={classes.divider} />

      <Container
        maxWidth="lg"
        style={{ padding: matches && 'unset' }}
      >
        <Grid container className={classes.body} justify="space-between">
          <Grid
            item
            xs={12}
            sm={4}
          >
            <Box
              style={{
                padding: matches && 20,
                paddingTop: matches && 'unset',
              }}
            >
              <Typography variant="h6" className={clsx(classes.title, classes.white)}>About the shop</Typography>
              <Typography variant="caption" className={classes.white}>
                Artifact Skin Co is a Canadian brand, created by
                Narae Kim
                <br />
                and Elie Nehme, which specializes in the
                production of all-natural face masks.
                Thanks to Artifact Skin Co for allowing us to use
                their photography and products in this demo store.
              </Typography>
            </Box>
            {matches && <Divider className={classes.divider} />}
          </Grid>

          <Grid
            item
            xs={12}
            sm={2}
          >
            <Box
              style={{
                padding: matches && 20,
              }}
            >
              <Typography variant="h6" className={clsx(classes.title, classes.white)}>Shop</Typography>
              <div className={classes.section}>
                {['Skincare', 'Body', 'Hair'].map((text) => (
                  <Button
                    key={text}
                    className={classes.buttonText}
                    onClick={() => { }}
                    label={text}
                  />
                ))}
              </div>
            </Box>
            {matches && <Divider className={classes.divider} />}
          </Grid>

          <Grid
            item
            xs={12}
            sm={2}
          >
            <Box
              style={{
                padding: matches && 20,
              }}
            >
              <Typography variant="h6" className={clsx(classes.title, classes.white)}>About</Typography>
              <div className={classes.section}>
                {['Story', 'Journal', 'FAQ', 'Terms Of Usage'].map((text) => (
                  <Button
                    key={text}
                    className={classes.buttonText}
                    onClick={() => { }}
                    label={text}
                  />
                ))}
              </div>
            </Box>
            {matches && <Divider className={classes.divider} />}
          </Grid>

          <Grid item xs={12} sm={3}>
            <Box style={{
              padding: matches && 20,
            }}
            >
              <Typography variant="h6" className={clsx(classes.title, classes.white)}>Newsletter</Typography>
              <Typography variant="caption" className={classes.white}>
                Subscribe to receive updates,
                access to exclusive deals, and more.
              </Typography>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
