import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

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

export default function Album ({ images, showAlbum }) {
  const items = [
    { image: images.back_default, title: 'Back' },
    { image: images.back_female, title: 'Back Female' },
    { image: images.back_shiny, title: 'Back Shiny' },
    { image: images.back_shiny_female, title: 'Back Shiny Female' },
    { image: images.front_default, title: 'Front' },
    { image: images.front_female, title: 'Front Female' },
    { image: images.front_shiny, title: 'Front Shiny' },
    { image: images.front_shiny_female, title: 'Front Shiny Female' }
  ]
  const filtered = items.filter(function (el) {
    return el.image != null
  })

  const classes = useStyles()

  if (showAlbum) {
    return (
      <>
        <CssBaseline />

        <main>
          <Container className={classes.cardGrid} maxWidth='md'>
            {/* End hero unit */}
            <Grid container spacing={4}>
              {filtered.map((card, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
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

      </>
    )
  }
  return ('')
}
