import React, { Component } from "react"
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
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
        maxWidth: 400,
        margin: 'auto'
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


class Books extends Component {
    state = {
        spacing: '16',
    }
    render() {
        const { books } = this.props   
        const { classes } = this.props
        const { spacing } = this.state
     
        const ListBooks = books.map((book) => {
            const { firstName = '' } = book.author
            const { lastName = '' } = book.author
                       
            return (                
                <Grid item xs={12} sm={4} key={book.id}>
                    <Link to={`book/${book.id}`} className={classes.link}>
                        <Card className={classes.card}>
                            <CardHeader                                                        
                                title={book.title}
                                subheader={`Author ${firstName} ${lastName}`}
                            />
                            <CardMedia
                                className={classes.media}
                                image={book.thumbnail}
                                title={book.title}
                            />  
                            <CardActions justify="center">
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
                            <CardActions justify="center">                                
                                <Button variant="contained" color="primary" className={classes.button}>
                                    View
                                </Button>
                            </CardActions>  
                        </Card>                                                                            
                    </Link>  
                </Grid>                     
            )
        })
        return (            
            <Grid container className={classes.root} spacing={16}>                                    
                <Grid item xs={12}>
                    <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                        { ListBooks } 
                    </Grid>
                </Grid>                    
            </Grid>            
        )
      }
}

export default withStyles(styles)(Books)