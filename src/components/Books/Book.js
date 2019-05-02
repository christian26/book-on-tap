import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 20
    },
    media: {
        height: 0,
        paddingTop: '80.25%',
    },   
    card: {
        maxWidth: 600,
        margin: "auto"
    },
    link: {
        textDecoration: 'none',
        cursor: 'pointer',
    },
    button: {
        margin: theme.spacing.unit,         
    },
    price: {
        flex: 'auto' 
    },
    stock: {
        color: 'red',
        flex: 'auto'
    }
})

class Book extends Component {
    state = {
        spacing: '16',
    }

    render() {
        const { book } = this.props         
        const { author: { firstName = ''} = {} } = book
        const { author: { lastName = '' } = {} } = book
        const { classes } = this.props
        const { spacing } = this.state

        return (    
            <Grid container className={classes.root} spacing={16}>                                    
                <Grid item xs={12}>
                    <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                        <Grid item xs={12} sm={8} key={book.id}>
                            <Card className={classes.card}>                                
                                <CardMedia
                                    className={classes.media}
                                    image={book.thumbnail}
                                    title={book.title}
                                />  
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {book.title}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        {`Author ${firstName} ${lastName}`}
                                    </Typography>          
                                    <Typography component="p">
                                        {book.description}
                                    </Typography>                                                              
                                </CardContent>
                                <CardActions>   
                                    <Typography gutterBottom variant="h5" component="h2" className={classes.price}>
                                        Price £{book.price}
                                    </Typography>                                          
                                </CardActions>
                                <CardActions justify="center">                                
                                    { book.stockAmount === 0 ? (
                                        <Typography gutterBottom  component="p" className={classes.stock}>
                                            Stock out of order
                                        </Typography>
                                    ): '' }                              
                                </CardActions> 
                                <CardActions>                                         
                                    <Link to="/" className={classes.link}>     
                                        <Button variant="contained" color="primary" className={classes.button}>
                                            Go back
                                        </Button>
                                    </Link>
                                </CardActions>  
                            </Card>                                                                            
                        </Grid>  
                    </Grid>
                </Grid>                    
            </Grid>                                             
        )
      }
}

export default withStyles(styles)(Book)