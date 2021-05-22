import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import CameraIcon from '@material-ui/icons/PhotoCamera'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'

function Copyright () {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      .
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}))

export default function Album ({ images }) {
  const items = [
    { image: images.back_default === null ? '/not-found.png' : images.back_default, title: 'Back' },
    { image: images.back_female === null ? '/not-found.png' : images.back_female, title: 'Back Female' },
    { image: images.back_shiny === null ? '/not-found.png' : images.back_shiny, title: 'Back Shiny' },
    { image: images.back_shiny_female === null ? '/not-found.png' : images.back_shiny_female, title: 'Back Shiny Female' },
    { image: images.front_default === null ? '/not-found.png' : images.front_default, title: 'Front' },
    { image: images.front_female === null ? '/not-found.png' : images.front_female, title: 'Front Female' },
    { image: images.front_shiny === null ? '/not-found.png' : images.front_shiny, title: 'Front Shiny' },
    { image: images.front_shiny_female === null ? '/not-found.png' : images.front_shiny_female, title: 'Front Shiny Female' }
  ]
  console.log(items)
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant='h6' color='inherit' noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container className={classes.cardGrid} maxWidth='md'>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {items.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title='Image title'
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {card.title}
                    </Typography>
                    <Typography gutterBottom variant='h5' component='h2' />
                    <Typography />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant='h6' align='center' gutterBottom>
          Footer
        </Typography>
        <Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </>
  )
}
